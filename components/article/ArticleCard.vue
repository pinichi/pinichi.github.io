<template>
  <nuxt-link class="w-[350px] cursor-pointer flex flex-col" :to="slugUrl">
    <img :src="props.image" class="rounded-xl" />
    <div class="flex gap-x-4 mt-2">
      <div>2020년 3월 12일</div>
      <category-chip :category="props.category" />
    </div>
    <div class="text-xl mt-2">{{ props.title }}</div>
    <div class="text-md text-gray-400">{{ props.description }}</div>
  </nuxt-link>
</template>

<script setup>
import CategoryChip from "./CategoryChip.vue";
const slugUrl = `${props.slug}`;

const props = defineProps({
  image: String,
  title: String,
  description: String,
  category: String,
  slug: String,
});
</script>
