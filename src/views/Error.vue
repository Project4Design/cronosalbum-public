<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div
    class="relative bg-no-repeat bg-left-bottom bg-cronos-darker h-screen bg-cover"
    style="background-image: url(/images/shapes-background.jpg)"
  >
    <div
      class="absolute inset-0 bg-gradient-to-tr from-cronos-darker to-cronos-light mix-blend-multiply z-10"
    ></div>
    <div class="relative container mx-auto h-screen flex flex-col items-center justify-center z-20">
      <h1 class="text-white text-6xl uppercase font-arabic">
        error
        <span class="text-qatar">404</span>
      </h1>
      <p class="text-white opacity-50">Página no encontrada</p>
      <RouterLink class="mt-5 text-xl" to="/">
        <span class="hover:text-qatar text-white duration-500"> Volver a la página de inicio </span>
      </RouterLink>
    </div>
  </div>
</template>
