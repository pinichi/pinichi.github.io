<template>
  <div class="w-full h-full flex flex-col">
    <CommonHeader />
    <div class="max-w-[1440px] mx-auto w-full grow">
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>
<!--absolute top-0 bottom-0  -->
