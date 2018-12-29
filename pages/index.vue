<template>
  <top />
</template>

<script>
import Top from "~/components/templates/Top";

export default {
  components: {
    Top
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
          content: `${process.env.HEAD_IMAGE_DEFAULT}`
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

