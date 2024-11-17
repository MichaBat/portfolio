import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import skillsView from '../views/SkillsView.vue'
import cvView from '../views/CVView.vue'
import workView from '../views/WorkExperienceView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), },
    { path: '/skills', name: 'skills', component: skillsView, },
    { path: '/cv', name: 'cv', component: cvView },
    { path: '/work', name: 'work experience', component: workView },
  ],
})

export default router
