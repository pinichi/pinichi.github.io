<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// TODO: default ogImage 작업 후에 추가 해야 함
useSeoMeta({
  ogType: "website",
  title: "Pinichi | Blog",
  ogTitle: "Pinichi | Blog",
  description: "Pinichi의 블로그입니다.",
  ogDescription: "Pinichi의 블로그입니다.",
  ogUrl: "pinichi.github.io",
});
</script>
