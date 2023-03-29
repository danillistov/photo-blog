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
      path: '/photos/:id',
      name: 'post',
      component: () => import('../views/PhotoView.vue'),
    },

    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/AlbumsView.vue'),
    },

    {
      path: '/albums/:slag',
      name: 'album',
      component: () => import('../views/AlbumView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
