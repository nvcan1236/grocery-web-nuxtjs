<script setup lang="ts">
const {} = defineProps<{
  type: "light" | "dark";
}>();
</script>

<template>
  <div
    class="mt-6 border-t relative border-main-green"
    :class="{
      'bg-background': type === 'light',
      'bg-green-100': type === 'dark',
    }"
  >
    <div
      :class="{
        'bg-green-100 text-main-green': type === 'light',
        'bg-green-500 text-white': type === 'dark',
      }"
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 px-10 py-1 rounded-b-lg border border-main-green font-bold"
    >
      <span
        class="absolute top-0 left-0 transform -translate-x-full border-[6px] border-t-transparent border-l-transparent border-r-main-green border-b-main-green"
      ></span>
      <span
        class="absolute top-0 right-0 transform translate-x-full border-[6px] border-t-transparent border-r-transparent border-l-main-green border-b-main-green"
      ></span>
      DANH MỤC SẢN PHẨM
    </div>
    <div class="mt-8">
      <ProductCarousel />
    </div>
    <div class="flex justify-center hover:underline-none">
      <UButton variant="link" class="text-black px-10 py-3"
        >Xem thêm <span class="font-semibold">trong danh mục</span>
        <UIcon name="i-lucide-chevron-right"
      /></UButton>
    </div>
  </div>
</template>
