<template>
  <div class="w-full min-h-full flex flex-col">
    <CommonHeader />
    <div class="max-w-[1440px] mx-auto w-full grow flex flex-col">
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>
