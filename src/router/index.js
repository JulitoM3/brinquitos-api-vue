import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import ServicesShow from '../views/ServicesShow.vue'
/***
 * rutas autorizacion
 */
import Login from '../views/auth/Login.vue'

/**
 * rutas admin
 */

import AdminHome from '../views/admin/Home.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/services/:name',
    name: 'Services-Show',
    component: ServicesShow,
    props: true
  },
  {
    path:'/administracion',
    name:'AdminHome',
    component : AdminHome
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
