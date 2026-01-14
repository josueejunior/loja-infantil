import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import ProductDetail from '../views/ProductDetail.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/produto/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/sobre',
    name: 'about',
    component: About
  },
  {
    path: '/contato',
    name: 'contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;


