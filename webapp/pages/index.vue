<template>
  <div>
    <div>
      <div class="flex gap-2 p-1 bg-background">
        <CategoryCard v-for="cate in suggests" :cate="cate" />
      </div>
    </div>

    <div class="mt-1">
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
          class="h-[200px] w-full object-cover"
          draggable="false"
        />
      </UCarousel>
    </div>

    <div class="bg-background p-4">
      <h3 class="font-semibold">ƯU ĐÃI ĐẶC BIỆT</h3>
      <div class="flex gap-2 mt-3">
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
      </div>
    </div>

    <div class="bg-green-50 p-4 mt-3">
      <div class="flex justify-between items-center">
        <h3 class="text-dark-green font-bold text-lg">KHUYẾN MÃI SỐC</h3>
        <UButton
          variant="link"
          class="text-xs text-blue-400 hover:text-blue-500"
        >
          Xem thêm khuyến mãi
          <UIcon name="i-lucide-chevron-right" class="size-4" />
        </UButton>
      </div>
      <div class="mt-3">
        <UButton class="bg-gradient-to-b from-light-green to-main-green">
          Flash Sale
        </UButton>

        <UButton
          variant="outline"
          class="ml-2 bg-background text-gray-700 font-light border text-sm"
        >
          Tất cả khuyến mãi
        </UButton>
      </div>

      <div class="mt-3 flex gap-2">
        <ProductSaleCard />
        <ProductSaleCard />
        <ProductSaleCard />
        <ProductSaleCard />
        <ProductSaleCard />
      </div>
    </div>

    <div class="mt-2">
      <Banner />
      <CategorySection />
    </div>
    <div class="mt-2">
      <Banner />
      <CategorySection />
    </div>
    <div class="mt-2">
      <Banner />
      <CategorySection />
    </div>
    <div class="mt-2">
      <Banner />
      <CategorySection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { menus } from "~/components/category/menu";
import type { SubCategory } from "~/types/category";
// import CategorySection from "~/components/category/category-section.vue";
import Banner from "~/components/common/banner.vue";
// import VoucherCard from "~/components/common/voucher-card.vue";
// import ProductSaleCard from "~/components/product/product-sale-card.vue";

const suggests: SubCategory[] = [
  menus[1].childrens[1],
  menus[1].childrens[3],
  menus[1].childrens[6],
  menus[2].childrens[1],
  menus[2].childrens[2],
  menus[3].childrens[1],
  menus[4].childrens[1],
  menus[5].childrens[1],
  menus[5].childrens[3],
  menus[6].childrens[1],
];

const carousels = [
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/freecompress-pc-1800x480_202412260915377612.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/1800x480px_202412180954306548.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/freecompress-1200-x-246_202412181003438334.png",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/900x240_202412191003013309.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/hero-banner-900x240202412071219358683_202412171642100488.jpg",
  "https://cdnv2.tgdd.vn/bhx-static/bhx/5599/trang-chu-mb-720x147-min_202412180942384715.jpg",
];
</script>
