<template>
  <nuxt-link
    class="min-w-[300px] cursor-pointer flex flex-col"
    :to="props.slug"
  >
    <img :src="props.image" class="rounded-xl" />
    <div class="flex align-items gap-x-2 mt-2">
      <div class="text-sm">{{ createAtDate }}</div>
      <category-chip :category="props.category" />
    </div>
    <div class="text-xl mt-1 break-all line-clamp-2">{{ props.title }}</div>
    <div class="text-md text-gray-400 mt-1 break-all line-clamp-3">
      {{ props.description }}
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import CategoryChip from "./CategoryChip.vue";
import { toDateFormat } from "../../utils/date";

const props = defineProps<{
  createdAt: string;
  image: string;
  title: string;
  description: string;
  category: string;
  slug: string;
}>();

const createAtDate = computed(() => toDateFormat(props.createdAt));
</script>
