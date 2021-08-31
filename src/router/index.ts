import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Layout,
    meta: { title: '首页', icon: 'excel' },
    children: [
      {
        path: '/home',
        meta: { title: '首页', icon: 'guide' },
        component: () => import('@/views/About.vue'),
      }
    ],
  },
  {
    path: '/milk',
    meta: { title: '奶量' },
    component: Layout,
    children: [
      {
        path: '/milk',
        meta: { title: '奶量六围面板', icon: 'user' },
        component: () => import('@/views/MilkSixDim.vue'),
      },
    ],
  },
  {
    path: '/ozmarandom',
    meta: { title: '奥兹玛' },
    component: Layout,
    children: [
      {
        path: '/ozmarandom',
        meta: { title: '奥兹玛配队速算', icon: 'link' },
        component: () => import('@/views/OzmaRandom.vue'),
      },
    ],
  },
  {
    path: '/music',
    meta: { title: '音乐会' },
    component: Layout,
    children: [
      {
        path: '/music',
        meta: { title: '芭芭拉音乐会', icon: 'like' },
        component: () => import('@/views/Music.vue'),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

export const router = new VueRouter({
  routes,
  mode: 'history',
  // base: process.env.BASE_URL,
})
