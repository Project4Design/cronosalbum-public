import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const importView = (view) => import(`@/views/${view}.vue`);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return { top: 0 };
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => importView('Home'),
      meta: {
        title: 'Inicio',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => importView('Error'),
      meta: {
        title: 'Página no encontrada',
      },
    },
  ],
});

router.afterEach((to) => {
  nextTick(() => {
    if (to.meta.title) {
      document.title = `${to.meta.title} - ${document.title}`;
    }
  });
});

export default router;
