<template>
  <div v-if="article" class="flex w-full p-4 sm:p-6 md:p-8">
    <ContentRenderer ref="nuxtContent" class="flex-grow" :value="article">
      <ContentRendererMarkdown
        :value="article"
        class="article-content prose max-w-none min-w-0"
      />
    </ContentRenderer>
    <div class="hidden lg:block flex-shrink-0 relative pl-6">
      <table-of-contents
        :contents="article.body.toc"
        :active-id="currentActiveToc"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TableOfContents from "~/components/base/TableOfContents.vue";
const nuxtContent = ref<HTMLElement | null>(null);
const currentActiveToc = ref<string>("");
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) currentActiveToc.value = id;
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
      observer.value?.observe(section);
    });
});

onUnmounted(() => {
  observer.value?.disconnect();
});

const route = useRoute();

const { data: article, error } = await useAsyncData("article", async () => {
  try {
    const result = await queryContent("/article")
      .where({ _id: `content:article:${route.params.slug}.md` })
      .findOne();
    return result;
  } catch (error) {
    showError({ message: "Page not found", statusCode: 404 });
  }
});

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>
