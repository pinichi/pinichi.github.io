<template>
  <div class="flex">
    <div class="hidden w-64 shrink-0 lg:block lg:pr-8">
      <navigation :category="category" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <template v-for="article in articleList" :key="article._path">
        <article-card
          :title="article.title"
          :description="article.description"
          :category="article.category"
          :image="article.coverImage"
          :slug="article.slug"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from "../components/article/ArticleCard.vue";
import Navigation from "../components/base/Navigation.vue";

const route = useRoute();
const router = useRouter();

const isCategoryQuery = computed(
  () =>
    !!Object.keys(route.query).length &&
    Object.keys(route.query).includes("category")
);
const category = ref(route.query.category ? route.query.category : "");

watch(
  () => route.query,
  () => {
    category.value = route.query.category ?? "";
  }
);
watch(category, () => {
  router.push({
    path: "/",
    ...(category.value ? { query: { category: category.value } } : {}),
  });
});

const { data: articleList } = await useAsyncData(
  async () => {
    try {
      const articleList = await queryContent("/article")
        .where({
          _path: { $ne: "/article" },
          ...(isCategoryQuery.value
            ? { category: { $eq: category.value } }
            : {}),
        }) // exclude content/article/index.md
        .sort({ createdAt: 1 })
        .only([
          "title",
          "image",
          "_path",
          "description",
          "category",
          "coverImage",
          "slug",
        ])
        .find();
      return articleList;
    } catch (err) {
      console.log("err: ", err);
      router.replace({ path: "/404" });
      throw createError({ statusCode: 404, statusMessage: "404" });
    }
  },
  { watch: [category] }
);
</script>
