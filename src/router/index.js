import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatClint from '../views/ChatClient'
import LoginView from '../views/LoginView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat-client',
    name: 'ChatClint',
    component: ChatClint
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
