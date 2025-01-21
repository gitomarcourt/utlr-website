import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Inscription from '../views/Inscription.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    }
  ]
})

export default router
