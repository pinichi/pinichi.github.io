<template>
  <div class="flex items-center justify-center grow">
    <div class="flex flex-col items-center">
      <div class="text-9xl">404</div>
      <div class="text-xl">Page Not Found</div>
      <nuxt-link
        class="mt-6 bg-lime-800 py-4 px-6 text-white rounded-sm"
        :to="{ path: '/' }"
      >
        go to home!
      </nuxt-link>
    </div>
  </div>
</template>
