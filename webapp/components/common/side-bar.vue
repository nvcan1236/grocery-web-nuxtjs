<script setup lang="ts">
import { menus } from "../category/menu";
const currentShowCate = ref("");
const setCurrent = (id: string) => {
  currentShowCate.value === id
    ? (currentShowCate.value = "")
    : (currentShowCate.value = id);
};
</script>

<template>
  <aside class="w-side">
    <ul class="w-side bg-white px-3 max-h-side overflow-y-auto fixed">
      <li v-for="item in menus" @click="setCurrent(item.id || '')">
        <CategoryItem :data="item" :open="currentShowCate === item.id" />
      </li>
    </ul>
  </aside>
</template>
