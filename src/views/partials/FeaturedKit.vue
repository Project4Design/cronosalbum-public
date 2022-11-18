<script setup>
import DiamondButton from '@/components/DiamondButton.vue';
import Diamond from '@/components/Diamond.vue';
import { openWhatsapp } from '@/utils/utils';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const whatsappText = '¡Hola! ¡Estoy interesado en el *Kit Commpleto* del Album Cronos!';
const features = ['1 Álbum', '749 barajitas', 'Llavero de regalo', '11 ideal personalizado'];
</script>

<template>
  <div
    class="relative px-4 bg-no-repeat bg-cover pt-5 sm:pt-10 pb-3 bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(/images/shapes-horizontal.jpg)] overflow-hidden"
  >
    <div class="max-w-8xl mx-auto mt-5 mb-3">
      <div class="flex flex-col lg:flex-row mb-3 lg:items-end items-center justify-center">
        <h1
          v-motion-slide-visible-once-left
          :delay="350"
          class="w-full lg:w-auto font-arabic text-6xl md:text-8xl mb-5 lg:mb-0 text-transparent bg-clip-text bg-waves-gradient from-cronos to-orange-500/80 drop-shadow-solid"
        >
          Kit<br />Completo
        </h1>
        <div class="basis-full flex flex-col">
          <div v-motion-slide-top :delay="1000" class="grid grid-cols-4 place-items-center mb-5">
            <img
              id="p-album"
              class="flex-1 w-24 md:w-28 lg:w-40 hover:scale-125 hover:-rotate-12 transition-transform duration-500"
              src="/images/productos/album2.png"
              alt="Albúm"
            />
            <img
              id="p-balon"
              class="flex-1 w-24 md:w-28 lg:w-40 hover:scale-125 hover:rotate-180 transition-transform duration-500"
              src="/images/productos/balon.png"
              alt="Balon"
            />
            <img
              id="p-llavero"
              class="flex-1 w-24 md:w-28 lg:w-40 hover:scale-125 hover:rotate-45 transition-transform duration-500"
              src="/images/productos/llavero.png"
              alt="Llavero"
            />
            <div id="p-sobres" class="flex items-center justify-center w-24 md:w-28 lg:w-40">
              <img
                id="sobre-1"
                class="w-8 md:w-14 lg:w-14 xl:w-20 -mr-4 md:-mr-6 -rotate-12 transition-transform duration-500 z-[1]"
                src="/images/productos/sobre.png"
                alt="Sobres"
              />
              <img
                id="sobre-2"
                class="w-8 md:w-14 lg:w-14 xl:w-20 -mt-2 md:-mt-5 transition-transform duration-500 z-[2]"
                src="/images/productos/sobre.png"
                alt="Sobres"
              />
              <img
                id="sobre-3"
                class="w-8 md:w-14 lg:w-14 xl:w-20 -ml-4 md:-ml-6 rotate-12 transition-transform duration-500 z-[1]"
                src="/images/productos/sobre.png"
                alt="Sobres"
              />
            </div>
          </div>
          <div class="text-center lg:text-right">
            <DiamondButton @click="openWhatsapp(whatsappNumber, whatsappText)">
              <span class="font-arabic text-normal sm:text-3xl">Adquierelo</span>
            </DiamondButton>
          </div>
        </div>
      </div>
      <div class="h-1 bg-cronos mb-3 bg-change-colors"></div>
      <div class="flex flex-col sm:flex-row justify-center flex-wrap gap-1 sm:gap-x-4">
        <div v-for="(feature, index) in features" :key="index" class="flex items-center">
          <Diamond />
          <p class="ml-2 font-arabic text-normal text-2xl text-cronos">{{ feature }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#p-sobres:hover #sobre-1 {
  transform: translate(-30px, -10px) rotate(-30deg) scale(1.2);
}
#p-sobres:hover #sobre-2 {
  transform: translateY(-20px) scale(1.2);
}
#p-sobres:hover #sobre-3 {
  transform: translate(30px, -10px) rotate(30deg) scale(1.2);
}
</style>
