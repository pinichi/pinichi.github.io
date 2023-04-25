<template>
  <div class="sticky top-20 max-w-[240px]">
    <li
      v-for="link in props.contents.links"
      :key="link.id"
      class="flex flex-col"
    >
      <nuxt-link
        :class="link.id === activeId ? 'text-lime-800 font-bold' : ''"
        :to="`#${link.id}`"
        class="break-words text-lg"
      >
        {{ link.text }}
      </nuxt-link>
      <ul v-if="link.children && link.children.length > 0" class="border-l">
        <li v-for="child in link.children" :key="child.id" class="pl-2">
          <nuxt-link
            :class="
              child.id === activeId
                ? 'text-lime-800 font-bold border-lime-800'
                : ''
            "
            :to="`#${child.id}`"
            class="break-words"
          >
            {{ child.text }}
          </nuxt-link>
        </li>
      </ul>
    </li>
  </div>
</template>

<script setup lang="ts">
import type { Toc } from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  contents: Toc;
  activeId: string;
}>();
</script>
