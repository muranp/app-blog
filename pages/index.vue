<template>
  <top :data="fetchedData" />
</template>

<script>
import Top from "~/components/templates/Top";

import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  components: {
    Top
  },
  async asyncData({ error }) {
    try {
      // 最新の記事を取得する
      const res = await Promise.all([
        client.getEntries({
          content_type: process.env.CTF_IMAGE_LIST_TYPE_ID,
          'sys.id': process.env.CTF_TINDER_IMAGES_SYSTEM_ID,
        })
      ]);
      if (res[0]["items"].length) {
        return {
          fetchedData: {
            tinderImages: res[0]["items"][0]["fields"]
          }
        };
      } else {
        throw "no data";
      }
    } catch (err) {
      console.error("[ERROR] ", err);
      error({ statusCode: 404, message: "ページが見つかりません" });
    }
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "description",
          content: `${process.env.META_DESCRIPTION}`
        },
        {
          property: "og:title",
          content: `${this.pageTitle} | ${process.env.META_TITLE}`
        },
        {
          property: "og:url",
          content: `${process.env.DOMAIN_NAME}${this.$route.path}`
        },
        // TODO: add image
        {
          property: "og:image",
          content: `${process.env.DOMAIN_NAME}${process.env.META_HEAD_IMAGE_DEFAULT}`
        },
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
      pageTitle: "トップページ"
    };
  }
};
</script>

<style>
</style>

