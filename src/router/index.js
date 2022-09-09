import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/destination',
    name: 'destination',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'crew',
    component: () => import('../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/Technology.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
