import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import ServicesShow from '../views/ServicesShow.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/servicios',
    name: 'Services',
    component: Services,
  },
  {
    path: '/servicios/:name',
    name: 'Services-Show',
    component: ServicesShow,
    props: true
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
