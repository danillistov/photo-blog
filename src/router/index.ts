import { createRouter, createWebHistory } from 'vue-router';
import PhotosView from '../views/PhotosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'popular',
      component: PhotosView,
    },

    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('../views/PhotoView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
