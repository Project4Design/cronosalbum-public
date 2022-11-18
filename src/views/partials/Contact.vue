<script setup>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Diamond from '@/components/Diamond.vue';
import { whatsappLink } from '@/utils/utils';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const whatsappText = '¡Saludos! Me gustaría más información sobre el albúm';
</script>

<template>
  <div class="relative bg-white px-4 py-10">
    <div
      class="relative flex flex-col md:flex-row max-w-8xl mx-auto border-diamond divide-solid divide-x divide-gray-200"
    >
      <div
        class="relative basis-full md:basis-1/2 p-4 md:pl-10 bg-right-bottom bg-cover bg-no-repeat"
        style="background-image: url(/images/contact-background.png)"
      >
        <h2
          class="inline-flex text-5xl lg:text-6xl font-arabic mb-10 text-transparent bg-clip-text bg-waves-gradient from-cronos to-orange-500/80 drop-shadow-solid"
        >
          Contacto
        </h2>

        <ul class="list-none">
          <li class="flex mb-5">
            <FontAwesomeIcon class="w-20 text-change-colors" size="lg" :icon="faLocationDot" />
            Caracas, Venezuela
          </li>
          <li class="flex mb-5">
            <FontAwesomeIcon class="w-20 text-change-colors" size="xl" :icon="faWhatsapp" />
            <a
              class="transition-all cursor-pointer hover:text-cronos"
              :href="whatsappLink(whatsappNumber, whatsappText)"
              target="_blank"
              rel="nofollow"
            >
              +58 (412) 705-15-38
            </a>
          </li>
          <li class="flex mb-5">
            <FontAwesomeIcon class="w-20 text-change-colors" size="lg" :icon="faPhone" @click="" />
            <a
              class="transition-all cursor-pointer hover:text-cronos"
              href="tel:+584127051538"
              target="_blank"
              rel="nofollow"
            >
              +58 (412) 705-15-38
            </a>
          </li>
          <li class="flex mb-5">
            <FontAwesomeIcon class="w-20 text-change-colors" size="lg" :icon="faEnvelope" />
            <a
              class="transition-all cursor-pointer hover:text-cronos"
              href="mailto:info@cronosalbum.com"
              target="_blank"
              rel="nofollow"
            >
              info@cronosalbum.com
            </a>
          </li>
        </ul>
      </div>
      <div class="basis-full md:basis-1/2 p-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 mb-5 gap-x-5">
          <div class="mb-5 lg:mb-0">
            <div class="flex items-center mb-5">
              <Diamond class="bg-change-colors mb-1 mr-3" />
              <h3 class="text-2xl text-cronos font-bold">Entregas / Retiros</h3>
            </div>

            <div class="flex justify-center mb-3 divide-x-2">
              <div class="px-2 text-lg">Caracas</div>
              <div class="px-2 text-lg">Guarenas</div>
              <div class="px-2 text-lg">Guatire</div>
            </div>
            <p class="text-sm text-center border-t-2 pt-2">(Gratis por compras mayores a $10)</p>
          </div>

          <div>
            <div class="flex items-center mb-5">
              <Diamond class="bg-change-colors mb-1 mr-3" />
              <h3 class="text-2xl text-cronos font-bold">Envíos</h3>
            </div>
            <div class="flex justify-center mb-3">
              <div class="text-lg">Envios a nivel nacional</div>
            </div>
            <p class="text-sm text-center border-t-2 pt-2">
              (Válido para compras superiores a $15)
            </p>
          </div>
        </div>

        <img class="mx-auto" src="/images/venezuela-map.png" alt="Mapa de venezuela" />
      </div>
    </div>
  </div>
</template>
