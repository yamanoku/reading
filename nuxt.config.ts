import { Configuration } from "@nuxt/types";

const nuxtConfig: Configuration = {
  mode: "universal",
  head: {
    title: "READING...",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "@yamanoku Reading News List"
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://yamanoku.net/reading/icon.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["modern-normalize"],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return;
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    quiet: false
  },
  buildModules: [
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  plugins: ["~/plugins/vue-paginate"],
  modules: ["@nuxtjs/pwa"],
  workbox: {
    dev: true
  },
  manifest: {
    name: "READING...",
    short_name: "READING...",
    title: "READING...",
    "og:title": "READING...",
    description: "@yamanoku Reading News List",
    "og:description": "@yamanoku Reading News List",
    lang: "en",
    theme_color: "#f9f9f9",
    background_color: "#f9f9f9"
  }
};

module.exports = nuxtConfig;
