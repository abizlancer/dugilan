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
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/logReg',
    name: 'logReg',
    component: () => import('../views/LoginAndRegister.vue')
  },
  {
    path: '/shoppingCard',
    name: 'shoppingCard',
    component: () => import('../views/ShoppingCard.vue')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('../views/ResetPassword.vue')
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
