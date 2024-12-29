<script setup lang="ts">
import Footer from "~/components/common/footer.vue";
import Header from "~/components/common/header.vue";
import Sidebar from "~/components/common/side-bar.vue";
</script>

<template>
  <main class="min-h-screen flex flex-col justify-center font-sans">
    <Header />
    <div class="flex-1 bg-gray-200 flex mt-[var(--header-height)]">
      <div class="container max-w-[1200px] mx-auto flex gap-2 relative">
        <Sidebar />

        <div class="flex-1">
          <slot />
          <Footer />
        </div>
      </div>
    </div>
  </main>
</template>
