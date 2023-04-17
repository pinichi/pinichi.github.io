<template>
  <div class="flex w-full">
    <ContentRenderer class="flex-grow" :value="data">
      <ContentRendererMarkdown :value="data" class="prose max-w-none min-w-0" />
    </ContentRenderer>
    <div class="hidden lg:block flex-shrink-0 relative pl-6">
      <table-of-contents :contents="data.body.toc" />
    </div>
  </div>
</template>
<script setup>
import TableOfContents from "~/components/base/TableOfContents.vue";

const route = useRoute();
const router = useRouter();
const { data } = await useAsyncData("post", async () => {
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
