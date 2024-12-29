<script setup lang="ts">
import type { Category } from "~/types/category";

const { data, open } = defineProps<{
  data: Partial<Category>;
  open: boolean;
}>();
</script>

<template>
  <p class="py-4 border-y text-sm font-semibold cursor-pointer select-none">
    {{ data.name?.toUpperCase() }}
  </p>
  <ul
    :class="{
      'h-0 overflow-y-hidden': !open,
      'h-full': open,
    }"
    class="transition-all"
  >
    <li v-for="sub in data.childrens">
      <NuxtLink :to="sub.url" class="p-2 block">{{ sub.name }}</NuxtLink>
    </li>
  </ul>
</template>
