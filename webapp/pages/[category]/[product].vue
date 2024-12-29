<template>
  <div class="py-2 space-y-2">
    <div class="py-1 bg-background rounded-md flex items-center">
      <UButton variant="ghost" class="px-4 text-main-green" @click="back()">
        <UIcon name="i-lucide-chevron-left" size="20" /> </UButton
      ><span class="font-semibold">{{ router.params.product }} pro</span>
    </div>
    <div class="py-1 bg-background rounded-md flex items-center">
      Sub-Category
    </div>

    <div class="py-1 bg-background rounded-md flex items-center h-[200px]">
      {{ router.params.product }}
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const { back } = useRouter();
</script>
