import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '../views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'popular',
      component: PostsView,
    },

    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
