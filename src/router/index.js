import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addvlog',
      name: 'addvlog',
      component: () => import('../views/AddVlogView.vue')
    },
    {
      path: '/updatevlog/:id',
      name: 'updatevlog',
      component: () => import('../views/UpdateVlogView.vue')
    }
  ]
})

export default router
