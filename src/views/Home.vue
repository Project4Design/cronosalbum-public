<script setup>
import MainMenu from './partials/MainMenu.vue';
import Banner from '@/views/partials/Banner.vue';
import FeaturedKit from './partials/FeaturedKit.vue';
import Products from './partials/Products.vue';
import CountDown from './partials/CountDown.vue';
import CronosTeam from './partials/CronosTeam.vue';
import Contact from './partials/Contact.vue';
import Footer from './partials/Footer.vue';
import WhatsappFloatingButton from '@/components/WhatsappFloatingButton.vue';
import CookieNotification from '@/components/CookieNotification.vue';

const countDownToDate = new Date('2022-11-20T19:00:00+03:00').getTime();
const delayAnimation = 300;
const coockieText = import.meta.env.VITE_COOKIE_TEXT;
</script>

<template>
  <MainMenu />
  <Banner id="home" class="entry-menu" />
  <FeaturedKit id="featured-kit" class="entry-menu" v-motion-fade-visible :delay="delayAnimation" />
  <CountDown
    id="countdown"
    class="entry-menu"
    v-motion-fade-visible
    :delay="delayAnimation"
    :date="countDownToDate"
  />
  <Products id="products" class="entry-menu" />
  <CronosTeam
    id="cronos-team"
    class="entry-menu"
    v-motion-fade-visible-once
    :delay="delayAnimation"
  />
  <Contact id="contact" class="entry-menu" v-motion-fade-visible-once :delay="delayAnimation" />
  <Footer v-motion-fade-visible-once :delay="delayAnimation" />
  <WhatsappFloatingButton />
  <CookieNotification v-if="coockieText" :message="coockieText" />
</template>
