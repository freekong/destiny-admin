import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const login = () => import('@/views/login/index.vue') 
const errorPage = () => import('@/views/error-page/404.vue')

const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
    meta: {
      title: 'login',
      hidden: true,
      isLeaf: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    meta: {
      title: 'home',
      hidden: false,
      isLeaf: false
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
          title: 'home',
          hidden: false,
          isLeaf: true
        }
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: errorPage,
    meta: {
      title: '404',
      hidden: true,
      isLeaf: false
    }
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})