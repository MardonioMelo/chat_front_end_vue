import { createRouter, createWebHistory } from 'vue-router'
import Attendant from '../views/Attendant.vue'
import Client from '../views/Client.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Attendant',
    component: Attendant 
  },
  {
    path: '/client',
    name: 'Client',
    component: Client 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login    
  },  
  {
    path: '/register',
    name: 'Register',
    component: Register    
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
