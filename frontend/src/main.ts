import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { clickOutside } from '@/directives';
import './assets/scss/common.scss';

const app = createApp(App);
app.use(createPinia());
app.directive('click-outside', clickOutside);
app.use(router);
app.mount('#app');
