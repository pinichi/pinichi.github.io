<template>
  <div class="sticky top-16 max-w-[240px]">
    <li
      v-for="link in props.contents.links"
      class="flex flex-col"
      :key="link.id"
    >
      <nuxt-link
        :class="link.id === activeId ? 'text-lime-800 font-bold' : ''"
        :to="`#${link.id}`"
        class="break-words text-lg"
      >
        {{ link.text }}
      </nuxt-link>
      <ul v-if="link.children.length > 0" class="border-l">
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

<script setup>
const props = defineProps({
  contents: Object,
  activeId: String,
});
</script>
