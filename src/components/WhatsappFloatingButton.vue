<script setup>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { openWhatsapp } from '@/utils/utils.js';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
</script>

<template>
  <div
    v-if="whatsappNumber"
    class="fixed z-50 bottom-2 right-2 md:bottom-5 md:right-5 h-14 w-14 md:h-16 md:w-16 transition-all flex justify-center items-center text-white shadow-lg text-4xl rounded-full cursor-pointer bg-gradient-to-b from-green-500 to-green-700"
    @click="openWhatsapp(whatsappNumber)"
  >
    <FontAwesomeIcon :icon="faWhatsapp" />
  </div>
</template>
