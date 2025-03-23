import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Catalog from '@/components/Catalog.vue';
import Contact from '@/components/Contact.vue';
import Cart from '@/components/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Login', component: Login },
  { path: '/Cart', component: Cart },
  { path: '/SignUp', component: Signup },
  { path: '/Catalog', component: Catalog },
  { path: '/Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
