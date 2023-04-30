<template>
  <div class="flex flex-col p-4 flex-grow sm:p-6 md:p-8">
    <div class="flex flex-grow">
      <div class="hidden w-64 shrink-0 lg:block lg:px-8 relative">
        <navigation :category="category" />
      </div>
      <div class="flex flex-col w-full">
        <div class="lg:hidden shrink-0 pb-6">
          <category-chip :category="category" text-size="2xl" />
        </div>
        <div
          v-if="articleList && articleList.length > 0"
          class="grid grid-cols-[repeat(auto-fill,minmax(max(300px,calc((33%-48px))),1fr))] gap-6"
        >
          <template v-for="article in articleList" :key="article._path">
            <article-card
              :title="article.title"
              :description="article.description"
              :category="article.category"
              :image="article.coverImage"
              :slug="article.slug"
              :created-at="article.createdAt"
            />
          </template>
        </div>
        <div
          v-else-if="!articleList?.length"
          class="flex-grow flex flex-col items-center justify-center"
        >
          <div class="sm:text-5xl text-3xl">작성된 포스트가 없습니다.</div>
          <div class="sm:text-3xl text-xl mt-6">
            포스트를 한번 작성해 볼까요?
          </div>
        </div>
      </div>
    </div>
    <div ref="bottomEl" class="w-full h-1" />
  </div>
</template>

<script setup lang="ts">
import ArticleCard from "../components/article/ArticleCard.vue";
import CategoryChip from "../components/article/CategoryChip.vue";
import Navigation from "../components/base/Navigation.vue";

const route = useRoute();
const router = useRouter();

const isCategoryQuery = computed(
  () =>
    !!Object.keys(route.query).length &&
    Object.keys(route.query).includes("category")
);
const category = ref(
  route.query.category ? (route.query.category as string) : ""
);

watch(
  () => route.query,
  () => {
    category.value = (route.query.category as string) ?? "";
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
      const articles = await queryContent("/article")
        .where({
          _path: { $ne: "/article" },
          isPublished: { $ne: false },
          ...(isCategoryQuery.value
            ? { category: { $eq: category.value } }
            : {}),
        })
        .sort({ createdAt: 1 })
        .only([
          "coverImage",
          "createdAt",
          "category",
          "title",
          "description",
          "_path",
          "slug",
        ])
        .find();
      return articles;
    } catch (err) {
      router.replace({ path: "/404" });
      throw createError({ statusCode: 404, statusMessage: "404" });
    }
  },
  { watch: [category] }
);

useHead({
  titleTemplate: computed(() => {
    return isCategoryQuery.value
      ? `Pinichi | ${category.value}`
      : "Pinichi | Blog";
  }),
});
</script>
