<template>
  <div class="flex flex-col p-4 flex-grow sm:p-6 md:p-8">
    <div class="flex flex-grow">
      <div class="hidden w-64 shrink-0 lg:block lg:px-8 relative">
        <navigation :category="category" />
      </div>
      <div
        v-if="articleList?.length > 0"
        class="grid grid-cols-[repeat(auto-fill,minmax(max(300px,calc((33%-48px))),1fr))] gap-6"
      >
        <template v-for="article in articleList" :key="article._path">
          <article-card
            :title="article.title"
            :description="article.description"
            :category="article.category"
            :image="article.coverImage"
            :slug="article.slug"
            :createdAt="article.createdAt"
          />
        </template>
      </div>

      <div
        class="flex-grow flex flex-col items-center justify-center"
        v-else-if="!articleList?.length && isEndOfPage && pageNum === 1"
      >
        <div class="sm:text-5xl text-3xl">작성된 포스트가 없습니다.</div>
        <div class="sm:text-3xl text-xl mt-6">포스트를 한번 작성해 볼까요?</div>
      </div>
    </div>
    <div ref="bottomEl" class="w-full h-1" />
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
    pageNum.value = 1;
    articleList.value = [];
    isEndOfPage.value = false;
    category.value = route.query.category ?? "";
  }
);
watch(category, () => {
  router.push({
    path: "/",
    ...(category.value ? { query: { category: category.value } } : {}),
  });
});

const pageNum = ref(1);
const FETCH_NUM = 12;
const isEndOfPage = ref(false);

const { data } = await useLazyAsyncData(
  async () => {
    try {
      if (isEndOfPage.value) return;
      const articleList = await queryContent("/article")
        .where({
          _path: { $ne: "/article" },
          isPublished: { $ne: false },
          ...(isCategoryQuery.value
            ? { category: { $eq: category.value } }
            : {}),
        })
        .skip(FETCH_NUM * (pageNum.value - 1))
        .limit(FETCH_NUM)
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
      return articleList;
    } catch (err) {
      router.replace({ path: "/404" });
      throw createError({ statusCode: 404, statusMessage: "404" });
    }
  },
  { watch: [category, pageNum] }
);

const articleList = ref([]);
articleList.value = data.value;

watch(data, (newData, oldData) => {
  if (newData?.length === 0 && oldData?.length > 0) {
    isEndOfPage.value = true;
  } else if (newData?.length > 0 && oldData?.length === 0) {
    pageNum.value += 1;
  } else if (newData?.length === 0 && oldData?.length === 0) {
    isEndOfPage.value = true;
  }
});

watch(data, (newData) => {
  if (!isEndOfPage.value && pageNum.value > 1) {
    articleList.value.push(...newData);
  } else if (!isEndOfPage.value && pageNum.value === 1) {
    articleList.value = newData;
  }
});

const observer = ref(null);
const bottomEl = ref(null);

onMounted(() => {
  if (articleList.value?.length === 0 && pageNum.value === 1) {
    isEndOfPage.value = true;
  }
});

onMounted(() => {
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        if (!isEndOfPage.value && articleList.value?.length > 0) {
          pageNum.value += 1;
        }
      }
    },
    { threshold: 0.3 }
  );
  if (!isEndOfPage.value) {
    observer.value.observe(bottomEl.value);
  }
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>
