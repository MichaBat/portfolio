import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cvView from '../views/CV/CVView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About Us' },},
    { path: '/cv', name: 'cv', component: cvView, meta: { title: 'Curriculum Vitae' } },
    { path: '/contact', name: 'Contact', component: ContactView, meta: { title: 'Contact' } },
  ],
})

export default router
