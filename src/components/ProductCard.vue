<script setup>
import { ref, computed } from 'vue';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import DiamondButton from '@/components/DiamondButton.vue';
import { openWhatsapp } from '@/utils/utils.js';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const whatsappTemplateText = 'Hola! Estoy interesado en *:title*';
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const defaultImage = '/images/default.png';
const image = ref(null);
const loadDefaultImage = () => {
  image.value.src = defaultImage;
};
const whatsappText = computed(() => whatsappTemplateText.replace(':title', props.product.title));
</script>
<template>
  <div class="product-card bg-bone-300 p-4 rounded-sm">
    <figure class="bg-white rounded-sm overflow-hidden mb-3 p-4">
      <img
        ref="image"
        class="object-contain max-h-48 mx-auto"
        :src="product.photo || defaultImage"
        loading="lazy"
        alt="Foto"
        @error="loadDefaultImage"
      />
    </figure>
    <h2
      class="font-arabic text-center font-bold text-3xl text-bone-700 truncate"
      :title="product.title"
    >
      {{ product.title }}
    </h2>
    <p class="font-arabic text-cronos font-bold text-4xl text-center">${{ product.price }}</p>

    <DiamondButton
      class="block w-full font-arabic text-xl"
      @click="openWhatsapp(whatsappNumber, whatsappText)"
    >
      Escríbenos
      <FontAwesomeIcon :icon="faWhatsapp" />
    </DiamondButton>
  </div>
</template>

<style lang="css" scoped>
.product-card {
  transition: transform 0.3s ease-in-out;
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.product-card:hover {
  transform: scale(1.05);
}
.product-card::before,
.product-card::after {
  content: '';
  border: 0 solid transparent;
  box-sizing: border-box;
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
  border-radius: 0.125rem;
  transition: border-color 0s, width 0.2s, height 0.2s;
  animation-timing-function: ease-in-out;
}
.product-card::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
  transition-delay: 0s, 0s, 0.2s;
}
.product-card::after {
  border-top-width: 4px;
  border-right-width: 4px;
  transition-delay: 0s, 0.2s, 0s;
}
.product-card:hover::before,
.product-card:hover::after {
  border-color: #8a1538;
  width: 100%;
  height: 100%;
}
</style>
