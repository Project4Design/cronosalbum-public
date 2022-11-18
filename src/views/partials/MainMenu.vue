<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

const currentSection = ref('');

const options = [
  {
    name: 'Inicio',
    href: { name: 'home', hash: '#home' },
  },
  {
    name: 'Promociones',
    href: { name: 'home', hash: '#featured-kit' },
  },
  {
    name: 'Productos',
    href: { name: 'home', hash: '#products' },
  },
  {
    name: '11 Ideal',
    href: { name: 'home', hash: '#cronos-team' },
  },
  {
    name: 'Contacto',
    href: { name: 'home', hash: '#contact' },
  },
];
const logoUrl = '/images/isotipo-white.png';
const scrollPosition = ref(0);

const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};
const shouldShrink = computed(() => scrollPosition.value > 50);
const hashedSectionName = computed(() => `#${currentSection.value}`);

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id');
        }
      });
    },
    {
      rootMargin: '0px 0px -60% 0px',
    }
  );

  [...document.getElementsByClassName('entry-menu')].forEach((section) => {
    observer.observe(section);
  });
});
onUnmounted(() => window.removeEventListener('scroll', updateScroll));
</script>

<template>
  <header
    id="main-header"
    class="bg-cronos-light sticky top-0 z-40 w-full lg:z-50 lg:border-b-2 lg:border-slate-900/30"
  >
    <Popover class="relative max-w-8xl mx-auto">
      <div
        class="flex justify-between items-center duration-300 py-3 lg:px-8 mx-4 lg:mx-0"
        :class="{
          'md:py-4': !shouldShrink,
          'md:py-2': shouldShrink,
        }"
      >
        <RouterLink :to="{ name: 'home' }">
          <span class="sr-only">{{ $route.meta.title }}</span>
          <img
            class="w-auto h-10 transition-all"
            :class="{
              'md:h-12': !shouldShrink,
              'h-10': shouldShrink,
            }"
            :src="logoUrl"
            alt="logo"
          />
        </RouterLink>

        <nav class="hidden md:block">
          <RouterLink
            v-for="(item, index) in options"
            :key="item.name"
            :to="item.href"
            class="transition-all duration-500 p-3 hover:text-yellow-400 font-bold border-b-2 hover:border-b-2 hover:border-yellow-400"
            :class="{
              'ml-5': index > 0,
              'text-white border-transparent': hashedSectionName != item.href.hash,
              'text-yellow-400 border-yellow-400': hashedSectionName == item.href.hash,
            }"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <div class="md:hidden">
          <PopoverButton
            class="transition-all bg-cronos-dark hover:bg-cronos-darker rounded-sm p-2 text-white hover:text-yellow-400"
          >
            <span class="sr-only">Abrir menú</span>
            <FontAwesomeIcon class="h-4 w-6" icon="bars" />
          </PopoverButton>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <PopoverPanel class="shadow-lg bg-cronos py-3 px-5 absolute z-10 top-0 inset-x-0 md:hidden">
          <div class="flex items-center justify-between">
            <figure>
              <span class="sr-only">{{ $route.meta.title }}</span>
              <img class="h-12 w-auto" :src="logoUrl" alt="logo" />
            </figure>
            <PopoverButton
              class="transition-all bg-cronos-dark hover:bg-cronos-darker rounded-sm p-2 text-white hover:text-yellow-400"
            >
              <span class="sr-only">Cerrar menu</span>
              <FontAwesomeIcon class="h-4 w-6" icon="xmark" />
            </PopoverButton>
          </div>
          <nav class="mt-6">
            <RouterLink
              v-for="item in options"
              :key="item.name"
              :to="item.href"
              class="block py-2 text-white hover:text-yellow-400 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-400"
              :class="{
                'text-white border-transparent': hashedSectionName != item.href.hash,
                'text-yellow-400 border-yellow-400': hashedSectionName == item.href.hash,
              }"
            >
              {{ item.name }}
            </RouterLink>
          </nav>
        </PopoverPanel>
      </Transition>
    </Popover>
  </header>
</template>
