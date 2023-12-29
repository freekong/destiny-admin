import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const login = () => import('@/views/login/index.vue') 
const errorPage = () => import('@/views/error-page/404.vue')

const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home/index.vue')
const chart = () => import('@/views/application/chart/index.vue')
const list = () => import('@/views/application/list/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: 'login',
      hidden: true,
      menu: false
    }
  },
  {
    path: '/home',
    name: 'main',
    component: layout,
    meta: {
      title: 'home',
      icon: 'home',
      hidden: false,
      menu: false
    },
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'home',
        component: home,
        meta: {
          title: 'home',
          keepAlive: true,
          hidden: false,
          menu: false
        }
      }
    ]
  },
  {
    path: '/application',
    name: 'application',
    component: layout,
    meta: {
      title: 'application',
      icon: 'app',
      hidden: false,
      menu: true
    },
    redirect: '/application/chart',
    children: [
      {
        path: '/application/chart',
        name: 'chart',
        component: chart,
        meta: {
          title: 'chart',
          keepAlive: true,
          hidden: false,
          menu: false
        }
      },
      {
        path: '/application/list',
        name: 'list',
        component: list,
        meta: {
          title: 'list',
          keepAlive: true,
          hidden: false,
          menu: false
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
      menu: false
    }
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})