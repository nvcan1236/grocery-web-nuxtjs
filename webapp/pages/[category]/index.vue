<template>
  <div class="py-2 space-y-2">
    <div class="py-1 bg-background rounded-md flex items-center">
      <UButton variant="ghost" class="px-4 text-main-green" @click="back()">
        <UIcon name="i-lucide-chevron-left" size="20" /> </UButton
      ><span class="font-semibold">{{ router.params.category }} cat</span>
    </div>
    <div class="py-1 bg-background rounded-md flex items-center">
      Sub-Category
    </div>

    <div class="p-1 bg-background rounded-md grid grid-cols-6 gap-3">
      <div class="col-span-1" v-for="(item, index) in Array(17).fill(0)">
        <NuxtLink :to="`/cat/pro${index}`" class="p-6 border block">
          Product {{ index }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const { back } = useRouter();
const router = useRoute();
</script>
