import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/webShop',
    name: 'webShop',
    component: () => import('../views/WebShop.vue')
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
