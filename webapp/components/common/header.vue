<template>
  <header
    class="bg-gradient-to-r from-main-green to-light-green h-header flex flex-col justify-between fixed top-0 left-0 right-0 z-10"
  >
    <div
      class="max-w-[1200px] mx-auto pt-3 pb-1 container grid grid-cols-4 items-center"
    >
      <NuxtLink
        to="/"
        class="col-span-1 text-xl font-semibold text-main-yellow italic block"
      >
        Bách hoá <span class="font-extrabold">XANH</span>
      </NuxtLink>
      <div
        class="col-span-2 bg-background px-2 rounded-lg flex gap-3 items-center"
      >
        <UIcon name="i-lucide-search" class="w-5 h-5 text-dark-green ml-2" />
        <UInput
          v-model="value"
          size="lg"
          variant="none"
          type="text"
          placeholder="Search here..."
          class="flex-1"
        />
        <UButton color="primary" variant="ghost">
          <UChip text="2" color="red" size="xl">
            <UIcon name="i-lucide-shopping-cart" class="w-6 h-6" />
          </UChip>
        </UButton>
      </div>
      <div class="col-span-1 flex justify-end">
        <div
          class="rounded-full bg-background bg-opacity-50 py-2 px-4 flex items-center gap-2 text-dark-green text-xs"
        >
          <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
          Giao đến: 142/1/27 Nguyễn Kiệm,...
          <UIcon name="i-lucide-chevron-down" class="w-4 h-4" />
        </div>
      </div>
    </div>
    <div class="flex justify-between max-w-[1200px] mx-auto w-full">
      <div
        class="bg-dark-green text-white px-3 py-1 rounded-t-lg flex items-center gap-2 w-side"
      >
        <UIcon name="i-lucide-menu" class="w-5 h-5" /> DANH MỤC SẢN PHẨM
      </div>

      <ULink
        to="/dang-nhap"
        class="bg-dark-green text-white px-3 py-1 rounded-t-lg flex items-center gap-2 text-sm"
      >
        <UIcon name="i-lucide-user-round" class="w-5 h-5" /> Đăng nhập
      </ULink>
    </div>
  </header>
</template>

<script setup>
const value = ref("");
</script>
