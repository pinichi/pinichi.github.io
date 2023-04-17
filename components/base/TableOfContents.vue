<template>
  <div class="sticky top-16">
    <li v-for="link in props.contents.links" :key="link.id">
      <nuxt-link :to="`#${link.id}`">{{ link.text }} </nuxt-link>
      <template v-if="link.children.length > 0">
        <ul>
          <div v-for="child in link.children" :key="child.id">
            <li>
              ><nuxt-link :to="`#${child.id}`">{{ child.text }}</nuxt-link>
            </li>
          </div>
        </ul>
      </template>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  contents: Object,
});
</script>
