<script setup lang="ts">
import Footer from "~/components/common/footer.vue";
import Header from "~/components/common/header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1">
      <div class="container"><slot /></div>
    </div>
    <Footer />
  </div>
</template>
