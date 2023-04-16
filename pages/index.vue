<template>
  <div class="flex">
    <div class="hidden lg:block min-w-[200px]">
      <div>카테고리별 필터</div>
      <div class="border-l border-slate-100">Tech</div>
      <div class="border-l border-slate-100">Design</div>
      <div class="border-l border-slate-100">Daily</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <template v-for="article in articleList" :key="article._path">
        <article-card
          :title="article.title"
          :description="article.description"
          :category="article.category"
          :image="article.coverImage"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from "../components/article/ArticleCard.vue";

const { data: articleList } = await useAsyncData("post", async () => {
  try {
    const result = await queryContent("/article")
      .where({ _path: { $ne: "/article" } }) // exclude content/article/index.md
      .sort({ createdAt: 1 })
      .only([
        "title",
        "image",
        "_path",
        "description",
        "category",
        "coverImage",
      ])
      .find();
    return result;
  } catch (err) {
    router.replace({ path: "/404" });
    throw createError({ statusCode: 404, statusMessage: "404" });
  }
});
</script>
