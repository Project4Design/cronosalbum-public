import { createApp } from 'vue';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MotionPlugin } from '@vueuse/motion';
import VueTag from 'vue-gtag';
import router from './router';
import './assets/css/style.css';
import './assets/css/animation.css';
import App from './App.vue';

library.add(faBars, faXmark);

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(MotionPlugin)
  .use(router)
  .use(VueTag, {
    bootstrap: false,
    config: {
      id: import.meta.env.VITE_G_TAG_ID,
    }
  }, router)
  .mount('#app');
