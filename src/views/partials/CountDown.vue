<script setup>
import { onMounted, ref } from 'vue';
import Diamond from '@/components/Diamond.vue';
import { CountDownTimer } from '@/utils/utils';

const props = defineProps({
  date: {
    type: Number,
    required: true,
  },
});

const timer = new CountDownTimer(props.date);
const timerIsOver = ref(false);
const countdown = ref(null);
const tick = (timeLeft) => {
  timerIsOver.value = timer.expired();
  countdown.value = timeLeft;
};
onMounted(() => {
  timer.onTick(tick).start();
});
</script>
<template>
  <div class="relative bg-black p-6 text-center">
    <video
      class="absolute center left-0 top-0 object-cover h-full lg:h-auto"
      autoplay
      loop
      muted
      poster="/images/galaxy-poster.jpg"
    >
      <source src="/images/galaxy.mp4" type="video/mp4" />
    </video>
    <div class="bg-black absolute inset-0 opacity-60"></div>

    <div class="relative max-w-8xl mx-auto z-10">
      <h2 class="text-white font-arabic text-2xl md:text-3xl mb-3">El torneo comienza en</h2>
      <div class="flex items-center justify-center gap-x-4">
        <svg
          class="text-change-colors text-orange-500 hidden md:block"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="250px"
          height="68px"
          viewBox="0 0 250 68"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,68.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M275 629 c-124 -31 -215 -149 -215 -280 0 -81 15 -126 59 -185 70
              -93 199 -133 316 -99 83 24 166 107 191 190 42 146 -26 296 -159 355 -57 25
              -136 33 -192 19z m35 -91 c0 -7 -9 -28 -20 -45 -21 -35 -55 -49 -95 -39 -34 9
              -23 32 33 67 48 31 82 37 82 17z m162 -21 c52 -40 55 -61 10 -65 -25 -3 -39 3
              -62 27 -35 34 -40 71 -11 71 11 0 39 -15 63 -33z m-79 -114 c41 -29 43 -40 18
              -105 -10 -26 -15 -28 -65 -28 l-55 0 -15 48 -14 47 36 32 c20 18 41 33 46 33
              6 0 27 -12 49 -27z m-187 -94 c19 -38 18 -62 -5 -90 l-19 -23 -20 39 c-23 47
              -36 100 -27 114 9 16 55 -10 71 -40z m354 19 c0 -36 -31 -111 -49 -122 -7 -5
              -17 6 -26 27 -18 45 -4 91 34 112 37 20 41 19 41 -17z m-155 -143 c14 -13 25
              -28 25 -33 0 -13 -36 -22 -87 -22 -77 0 -94 22 -47 59 36 28 79 27 109 -4z"
            />
            <path
              d="M867 447 l-97 -92 97 -91 98 -91 97 91 98 92 -58 54 c-31 31 -75 72 -97 92 l-40 37 -98 -92z"
            />
            <path
              d="M1328 432 l-80 -78 86 -79 87 -78 80 79 79 79 -77 77 c-43 43 -81 78 -86 78 -4 0 -44 -35 -89 -78z"
            />
            <path
              d="M1732 417 l-63 -64 67 -62 68 -62 63 63 63 62 -62 63 c-34 35 -65 63 -68 63 -3 0 -34 -29 -68 -63z"
            />
            <path
              d="M2076 409 c-25 -22 -46 -46 -46 -52 1 -7 22 -31 49 -54 l48 -42 52 46 52 46 -47 48 c-27 27 -51 49 -55 49 -3 0 -27 -18 -53 -41z"
            />
            <path d="M2356 384 l-29 -26 32 -31 31 -32 32 32 32 32 -24 26 c-29 31 -38 31 -74 -1z" />
          </g>
        </svg>

        <div class="flex items-center text-white text-center gap-x-3">
          <div class="uppercase">
            <p class="font-arabic text-4xl md:text-6xl">{{ countdown?.days }}</p>
            <p class="text-sm">Días</p>
          </div>
          <Diamond />
          <div class="uppercase">
            <p class="font-arabic text-4xl md:text-6xl">{{ countdown?.hours }}</p>
            <p class="text-sm">Horas</p>
          </div>
          <Diamond />
          <div class="uppercase">
            <p class="font-arabic text-4xl md:text-6xl">{{ countdown?.minutes }}</p>
            <p class="text-sm">Minutos</p>
          </div>
        </div>

        <svg
          class="text-change-colors text-orange-500 scale-x-[-1] hidden md:block"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="250px"
          height="68px"
          viewBox="0 0 250 68"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,68.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M275 629 c-124 -31 -215 -149 -215 -280 0 -81 15 -126 59 -185 70
              -93 199 -133 316 -99 83 24 166 107 191 190 42 146 -26 296 -159 355 -57 25
              -136 33 -192 19z m35 -91 c0 -7 -9 -28 -20 -45 -21 -35 -55 -49 -95 -39 -34 9
              -23 32 33 67 48 31 82 37 82 17z m162 -21 c52 -40 55 -61 10 -65 -25 -3 -39 3
              -62 27 -35 34 -40 71 -11 71 11 0 39 -15 63 -33z m-79 -114 c41 -29 43 -40 18
              -105 -10 -26 -15 -28 -65 -28 l-55 0 -15 48 -14 47 36 32 c20 18 41 33 46 33
              6 0 27 -12 49 -27z m-187 -94 c19 -38 18 -62 -5 -90 l-19 -23 -20 39 c-23 47
              -36 100 -27 114 9 16 55 -10 71 -40z m354 19 c0 -36 -31 -111 -49 -122 -7 -5
              -17 6 -26 27 -18 45 -4 91 34 112 37 20 41 19 41 -17z m-155 -143 c14 -13 25
              -28 25 -33 0 -13 -36 -22 -87 -22 -77 0 -94 22 -47 59 36 28 79 27 109 -4z"
            />
            <path
              d="M867 447 l-97 -92 97 -91 98 -91 97 91 98 92 -58 54 c-31 31 -75 72 -97 92 l-40 37 -98 -92z"
            />
            <path
              d="M1328 432 l-80 -78 86 -79 87 -78 80 79 79 79 -77 77 c-43 43 -81 78 -86 78 -4 0 -44 -35 -89 -78z"
            />
            <path
              d="M1732 417 l-63 -64 67 -62 68 -62 63 63 63 62 -62 63 c-34 35 -65 63 -68 63 -3 0 -34 -29 -68 -63z"
            />
            <path
              d="M2076 409 c-25 -22 -46 -46 -46 -52 1 -7 22 -31 49 -54 l48 -42 52 46 52 46 -47 48 c-27 27 -51 49 -55 49 -3 0 -27 -18 -53 -41z"
            />
            <path d="M2356 384 l-29 -26 32 -31 31 -32 32 32 32 32 -24 26 c-29 31 -38 31 -74 -1z" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
