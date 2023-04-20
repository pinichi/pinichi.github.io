<template>
  <header class="border-b sticky top-0 bg-white">
    <div
      class="flex items-center max-w-[1440px] mx-auto h-14 px-4 sm:px-6 md:px-8 py-1"
    >
      <nuxt-link
        :to="'/'"
        class="flex items-center flex-grow text-lime-800 text-2xl"
      >
        Pinichi's Blog
      </nuxt-link>
      <div class="lg:flex hidden items-center gap-x-4">
        <div>About</div>
        <div>Mode</div>
      </div>
      <mobile-menu class="lg:hidden" />
    </div>
  </header>
</template>
<script setup>
import MobileMenu from "../base/MobileMenu.vue";
</script>
