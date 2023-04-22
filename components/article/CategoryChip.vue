<template>
  <div
    :class="[color, props.textSize]"
    class="flex items-center w-max rounded text-white px-1 py-0.25"
  >
    {{ props.category }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { ArticleCategoryType } from "../../domain/article";

const props = withDefaults(
  defineProps<{ category?: string; textSize?: string }>(),
  {
    category: "",
    textSize: "text-xs",
  }
);

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
