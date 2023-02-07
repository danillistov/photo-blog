import { createRouter, createWebHistory } from 'vue-router';
import PopularPageView from '../views/PopularPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'popular',
      component: PopularPageView,
    },

    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewPageView.vue'),
    },

    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('../views/PostPageView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
