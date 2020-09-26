import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    component: Layout,
    children: [{
      path: '/app2/table',
      name: 'table',
      component: () => import('@/pages/table'),
      meta: { title: 'table', icon: 'table' }
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router