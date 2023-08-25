import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/orders.vue'
import webpayplustest from '../views/webpayplustest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/:category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/webpayplustest',
    component: webpayplustest,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
