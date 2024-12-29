<template>
  <div>
    <UCarousel
      v-slot="{ item }"
      :items="carousels"
      :ui="{
        item: 'basis-full',
        container: 'relative',
      }"
      arrows
      indicators
    >
      <img
        :src="item"
        class="h-[120px] w-full object-cover"
        draggable="false"
      />
    </UCarousel>
  </div>
</template>
<script setup lang="ts">
const carousels = [
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/freecompress-pc-1800x480_202412260915377612.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/1800x480px_202412180954306548.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/freecompress-1200-x-246_202412181003438334.png",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/900x240_202412191003013309.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/hero-banner-900x240202412071219358683_202412171642100488.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/trang-chu-mb-720x147-min_202412180942384715.jpg",
];
</script>
