import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RGPD from '../views/RGPD.vue'
import MentionsLegales from '../views/MentionsLegales.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/rgpd',
      name: 'rgpd',
      component: RGPD
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegales
    }
  ]
})

router.beforeEach((to, _, next) => {
  const isAuthenticated = localStorage.getItem('utlr_auth') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
