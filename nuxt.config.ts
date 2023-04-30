// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";
import { routes as contentsRoutes } from "./utils/extractContentMarkdown";

export default defineNuxtConfig({
  // @ts-ignore: nuxt3에서  nuxtConfig에 대한 type정의가 안되고 있음.
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: "ko" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css",
        },
        {
          rel: "icon",
          href: "./favicon.ico",
          sizes: "any",
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
  nitro: {
    prerender: {
      routes: [
        "/",
        "/?category=tech",
        "/?category=design",
        "/?category=daily",
        "/about",
        ...contentsRoutes,
      ],
    },
  },
});
