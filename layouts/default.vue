<template>
  <div class="w-full min-h-full flex flex-col">
    <CommonHeader />
    <div
      class="max-w-[1440px] mx-auto w-full grow px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8"
    >
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>
<!--absolute top-0 bottom-0  -->
