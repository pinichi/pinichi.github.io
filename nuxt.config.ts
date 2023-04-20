// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // @ts-ignore: nuxt3에서  nuxtConfig에 대한 type정의가 안되고 있음.
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: {
        default: "github-dark",
      },
    },
  },

  typescript: { strict: true },
  modules: ["nuxt-icon", "@nuxt/content", "@nuxtjs/tailwindcss"],
});
