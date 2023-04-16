<template>
  <div
    :class="color"
    class="flex items-center w-max rounded text-xs text-white px-1 py-0.25"
  >
    {{ props.category }}
  </div>
</template>

<script setup>
import { computed } from "vue";
// import { ArticleCategoryType } from "../../domain/article";

const props = defineProps({
  category: String,
});

const color = computed(() => {
  switch (props.category) {
    case "daily":
      return "bg-lime-800";
    case "design":
      return "bg-green-800";
    case "tech":
      return "bg-emerald-800";
    default:
      return "bg-teal-800";
  }
});
</script>
