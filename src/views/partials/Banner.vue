<script setup>
const animationDelay = 300;
</script>

<template>
  <div
    class="bg-cronos-dark py-8 px-4 lg:px-0 bg-right-top"
    style="background-image: url(/images/home-background.jpg)"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-2 justify-items-center content-center mx-auto max-w-8xl"
    >
      <figure
        v-motion
        :initial="{
          opacity: 0,
          x: '-100%',
        }"
        :enter="{
          opacity: 1,
          x: 0,
        }"
        :delay="animationDelay"
      >
        <img src="/images/album.png" alt="Album" />
      </figure>
      <div
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
        }"
        class="flex flex-col justify-center items-center text-white font-arabic text-center"
        :delay="animationDelay"
      >
        <h1 class="text-6xl lg:text-8xl drop-shadow-solid-lg mb-3">Creando Recuerdos</h1>
        <p class="text-2xl sm:text-3xl drop-shadow-solid mb-3">Un álbum creado por fanáticos</p>
        <p class="text-2xl sm:text-3xl uppercase drop-shadow-solid mb-3">¡para fanáticos!</p>
        <p class="opacity-90">
          Cronos es un álbum creado para vivir momentos en familia, unidos por la pasión del máximo
          deporte del planeta.
        </p>
      </div>
    </div>
  </div>
</template>
