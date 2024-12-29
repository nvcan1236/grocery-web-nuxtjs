<script setup lang="ts">
import type { Category } from '~/types/category';


const {data, open} = defineProps<{
  data: Category;
  open: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="data.url"
    class="py-4 border-y text-sm font-semibold block"
    >{{ data.name?.toUpperCase() }}</NuxtLink
  >
  <ul v-if="open">
    <li v-for="sub in data.childrens">
      {{ sub.name }}
    </li>
  </ul>
</template>
