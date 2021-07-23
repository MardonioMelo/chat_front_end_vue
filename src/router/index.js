import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TplLogin from '../views/TplLogin.vue'
import TplLogout from '../views/TplLogout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/login',
    name: 'TplLogin',
    component: TplLogin    
  },  
  {
    path: '/logout',
    name: 'TplLogout',
    component: TplLogout    
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
