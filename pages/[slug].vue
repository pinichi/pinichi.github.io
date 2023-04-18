<template>
  <div class="flex w-full">
    <ContentRenderer class="flex-grow" :value="article" ref="nuxtContent">
      <ContentRendererMarkdown
        :value="article"
        class="article-content prose max-w-none min-w-0"
      />
    </ContentRenderer>
    <div class="hidden lg:block flex-shrink-0 relative pl-6">
      <table-of-contents
        :contents="article.body.toc"
        :activeId="currentActiveToc"
      />
    </div>
  </div>
</template>
<script setup>
import TableOfContents from "~/components/base/TableOfContents.vue";

const nuxtContent = ref(null);
const currentActiveToc = ref("");
const observer = ref(null);
const options = {};

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          currentActiveToc.value = id;
        }
      });
    },
    {
      rootMargin: "0px 0px -90% 0px",
      threshold: 0,
    }
  );

  document
    .querySelectorAll(".article-content h2[id], .article-content h3[id]")
    .forEach((section) => {
      observer.value.observe(section);
    });
});

onUnmounted(() => {
  observer.value.disconnect();
});

const route = useRoute();
const router = useRouter();
const { data: article } = await useAsyncData("article", async () => {
  try {
    const result = await queryContent("/article")
      .where({ _id: `content:article:${route.params.slug}.md` })
      .findOne();
    return result;
  } catch (error) {
    router.replace({ path: "/404" });
    // throw createError({ statusCode: 404, statusMessage: "404" });
  }
});
</script>
