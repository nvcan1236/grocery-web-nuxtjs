<template>
  <NuxtLink :to="cate.url" class="p-2 flex flex-col items-center hover:bg-green-50 transition-all rounded-sm">
    <img :src="cate.icon" alt="" class="w-16 h-16" />
    <p class="max-w-20 overflow-ellipsis line-clamp-2 text-xs text-center">{{ cate.name }}</p>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { SubCategory } from "~/types/category";

const { cate } = defineProps<{
  cate: SubCategory;
}>();
</script>
<style lang=""></style>
