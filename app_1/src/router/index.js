import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    component: Layout,
    children: [{
      path: '/app1/form',
      name: 'form',
      component: () => import('@/pages/form'),
      meta: { title: 'form', icon: 'form' }
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router