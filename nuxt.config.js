const environment = process.env.NODE_ENV || "development";
console.log("[NODE_ENV] ", environment);

require("dotenv").config();
const envSetPub = require(`./.env.public.js`);

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
});

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s | ${envSetPub.META_TITLE}`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      {
        property: "og:site_name",
        content: `${envSetPub.META_SITENAME} | ${envSetPub.META_DESCRIPTION}`
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Generate paths
   ** /posts 以下に作成
   */
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.items.map(entry => `posts/${entry.fields.slug}`)];
        });
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#cd6133" },
  /*
   ** env setting
   */
  env: {
    ...envSetPub,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  /*
   ** plugins
   */
  plugins: [],
  /*
   ** modules
   */
  modules: ["@nuxtjs/dotenv", "nuxt-buefy"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
