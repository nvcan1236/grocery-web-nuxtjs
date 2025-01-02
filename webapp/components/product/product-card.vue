<template>
  <NuxtLink
    :to="product.url"
    class="bg-background border h-full flex flex-col block"
  >
    <div class="rounded-t-sm bg-background overflow-hidden">
      <img :src="product.avatar" alt="kmimage" class="w-full aspect-square" />
    </div>
    <div class="p-1 text-gray-500 flex-1">
      <p
        class="line-clamp-2 h-12 overflow-ellipsis leading-tight py-1.5 font-light text-sm"
      >
        {{ product.name }}
      </p>
      <div class="flex gap-2">
        <div class="flex-1">
          <span class="font-semibold text-black">59.000đ</span>
          <span class="text-xs font-light"> /{{ product.unit }} </span>
          <p class="text-xs line-through font-light">103.000đ</p>
        </div>
      </div>
    </div>
    <UButton
      class="px-5 text-dark-green w-full justify-center rounded-none"
      variant="soft"
    >
      MUA
    </UButton>
  </NuxtLink>
</template>
<script setup lang="ts">
import { getRandomProduct } from "./data";

const product = getRandomProduct();
</script>
