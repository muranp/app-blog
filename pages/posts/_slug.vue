<template>
  <div>
    {{ currentPost }}
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  head() {
    return {
      title: this.currentPost.title,
      meta: [
        {
          name: "description",
          content: `${process.env.META_DESCRIPTION}`
        },
        {
          property: "og:title",
          content: `${this.currentPost.title} | ${
            process.env.META_TITLE
          }`
        },
        {
          property: "og:url",
          content: `${process.env.DOMAIN_NAME}${this.$route.path}`
        },
        // TODO: add image
        // {
        //   property: "og:image",
        //   content: `${this.currentPost.fields.headImage.fields.file.url}`
        // },
        {
          property: "og:description",
          content: `${process.env.META_OG_DESCRIPTION}`
        },
        {
          property: "keywords",
          content: `${process.env.META_KEYWORDS}`
        }
      ]
    };
  },
  data() {
    return {
      pageTitle: ""
    };
  },
  async asyncData({ error, params }) {
    try {
      // 最新の記事を取得する
      const res = await Promise.all([
        client.getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID,
          "fields.slug": params.slug
        })
      ]);
      console.log(res)
      if (res[0]["items"].length) {
        return {
          currentPost: res[0]["items"][0]["fields"]
        };
      } else {
        throw "no data";
      }
    } catch (err) {
      console.error("[ERROR] ", err);
      error({ statusCode: 404, message: "ページが見つかりません" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
