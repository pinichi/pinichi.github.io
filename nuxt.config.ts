// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // @ts-ignore: nuxt3에서  nuxtConfig에 대한 type정의가 안되고 있음.
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
        },
      ],
    },
  },
  typescript: { strict: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
