<script setup>
import { ref, onMounted } from 'vue';
import { bootstrap } from 'vue-gtag';
import { init } from '@/utils/fbpixel.js';

defineProps({
  message: {
    type: String,
    required: true,
  },
});

const PIXEL_CODE = import.meta.env.VITE_FB_PIXEL;
const cookiesAcceptance = localStorage.getItem('cookies-acceptance');
const isVisible = ref(false);
const show = () => (isVisible.value = true);
const close = () => (isVisible.value = false);
const enableCookies = () => {
  localStorage.setItem('cookies-acceptance', Date.now());
  bootstrap().then((gtag) => {});
  if (PIXEL_CODE) {
    init(PIXEL_CODE);
  }
  close();
};
const isValidAcceptance = function () {
  if (!cookiesAcceptance) {
    return false;
  }

  const hours = Math.abs(cookiesAcceptance - Date.now()) / (60 * 60 * 1000);
  return hours < 48;
};
onMounted(() => {
  if (!isValidAcceptance()) {
    setTimeout(show, 800);
  } else {
    enableCookies();
  }
});
</script>

<template>
  <transition name="slide">
    <div
      v-show="isVisible"
      class="fixed transition-all duration-1000 bottom-0 left-0 mx-2 mb-2 z-50 flex justify-center w-full"
    >
      <div
        class="px-4 py-2 border-2 shadow border-yellow-500 bg-gradient-to-l from-cronos-light to-cronos-darker text-white rounded-lg max-w-8xl"
      >
        <div class="flex justify-between gap-x-6">
          <div>
            <span class="text-sm">{{ message }}</span>
          </div>
          <button
            class="text-white border-yellow-500 border px-3 hover:bg-yellow-500 hover:text-cronos transitions-colors duration-300 font-bold cursor-pointer"
            type="button"
            title="Pertimir el uso de cookies"
            @click="enableCookies"
          >
            Permitir
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="css" scoped>
.slide-enter-active,
.slide-leave-active {
  bottom: -100%;
}
</style>
