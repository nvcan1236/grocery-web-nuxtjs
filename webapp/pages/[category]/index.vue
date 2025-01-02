<template>
  <div class="py-2 space-y-2">
    <div class="py-1 bg-background rounded-md flex items-center">
      <UButton variant="ghost" class="px-4 text-main-green" @click="back()">
        <UIcon name="i-lucide-chevron-left" size="20" /> </UButton
      ><span class="font-semibold">{{ router.params.category }} cat</span>
    </div>

    <div class="py-1 px-2 bg-background rounded-md flex items-center gap-3">
      <NuxtLink
        :to="`/${item.url}`"
        v-for="item in cates.childrens"
        class="p-2 rounded-md hover:bg-green-100 transition-all flex flex-col items-center first:bg-green-100 first:border first:border-main-green"
      >
        <img :src="item.icon" alt="" class="size-12" />
        <p class="max-w-16 line-clamp-1 overflow-ellipsis text-xs">
          {{ item.name }}
        </p>
      </NuxtLink>
    </div>

    <Banner />

    <div class="p-1 bg-background rounded-md grid grid-cols-5 gap-3">
      <div class="col-span-1" v-for="(item, index) in Array(17).fill(0)">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { menus } from "~/components/category/menu";
import Banner from "~/components/common/banner.vue";
const { back } = useRouter();
const router = useRoute();
const cates = menus[0];
</script>
