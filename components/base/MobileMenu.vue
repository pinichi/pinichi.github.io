<template>
  <Menu as="div" class="relative inline-block">
    <MenuButton class="inline-flex w-full pa-4">
      <Icon name="ic:outline-menu" size="32px" />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <div class="text-left font-medium p-2">카테고리</div>
          <MenuItem v-slot="{ active, close }">
            <nuxt-link
              :class="[
                active ? 'bg-lime-100' : '',
                'flex w-full items-center p-2 text-sm',
              ]"
              :to="{ path: '/', query: { category: 'tech' } }"
              @mouseup="close"
            >
              tech
            </nuxt-link>
          </MenuItem>
          <MenuItem v-slot="{ active, close }">
            <nuxt-link
              :class="[
                active ? 'hover:bg-lime-100' : '',
                'flex w-full items-center p-2 text-sm',
              ]"
              :to="{ path: '/', query: { category: 'design' } }"
              @mouseup="close"
            >
              design
            </nuxt-link>
          </MenuItem>
          <MenuItem v-slot="{ active, close }">
            <nuxt-link
              :class="[
                active ? 'hover:bg-lime-100' : '',
                'flex w-full items-center p-2 text-sm',
              ]"
              :to="{ path: '/', query: { category: 'daily' } }"
              @mouseup="close"
            >
              daily
            </nuxt-link>
          </MenuItem>
        </div>
        <div class="pt-1">
          <MenuItem v-slot="{ active, close }">
            <nuxt-link
              :class="[
                active ? 'hover:bg-lime-100' : '',
                'flex w-full items-center p-2 rounded-b-md',
              ]"
              @mouseup="close"
            >
              About
            </nuxt-link>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
