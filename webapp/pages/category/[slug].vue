<template>
  <div>Category: {{ router.params.slug }}</div>
</template>

<script setup lang="ts">
  const router = useRoute()
</script>