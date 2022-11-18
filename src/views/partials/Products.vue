<script setup>
import ProductCard from '@/components/ProductCard.vue';
import products from '@/utils/products.js';
</script>

<template>
  <div
    class="px-4 py-10 pb-20 relative slide-in-bottom"
    style="background-image: url(/images/grass.jpg)"
  >
    <div
      class="absolute inset-0 bg-black/50 bg-center bg-no-repeat opacity-40 hidden md:block"
      style="background-image: url(/images/field-lines.png)"
    ></div>
    <div
      class="relative max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-content-center z-10"
    >
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>
