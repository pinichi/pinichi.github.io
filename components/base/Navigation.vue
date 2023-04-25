<template>
  <div class="w-full px-4 sticky top-20">
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure v-slot="{ open }" :default-open="true">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-lime-100 px-4 py-2 text-left text-sm font-medium text-lime-900 hover:bg-lime-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>카테고리</span>
        </DisclosureButton>
        <template v-if="open">
          <DisclosurePanel
            v-for="name in categoryNameList"
            :key="name"
            class="flex flex-col px-4 pt-4 pb-2 text-sm"
            :class="
              props.category === name ? 'text-green-500' : 'text-gray-500'
            "
          >
            <nuxt-link :key="name" :to="{ query: { category: `${name}` } }">{{
              name
            }}</nuxt-link>
          </DisclosurePanel>
        </template>
      </Disclosure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = withDefaults(defineProps<{ category?: string; tag?: string }>(), {
  category: "",
  tag: "",
});

const categoryNameList = ["tech", "design", "daily"];
</script>
