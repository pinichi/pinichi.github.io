<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogType: "website",
  title: "Pinichi | Blog",
  ogTitle: "Pinichi | Blog",
  ogImage:
    "https://user-images.githubusercontent.com/19923534/235397317-bcc0948b-4609-4bde-9fb8-82df94aacc8c.jpg",
  description: "Pinichi의 블로그입니다.",
  ogDescription: "Pinichi의 블로그입니다.",
  ogUrl: "pinichi.github.io",
});
</script>
