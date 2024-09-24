import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aves-table',
    name: 'avesTable',
    component: () => import('../components/AvesTable.vue'),
    children:[
      {
        path: 'aves-details',
        component: () => import('../components/AvesDetails.vue')
      },
      {
        path: 'not-aves-details',
        component: () => import('../components/NotAvesDetails.vue')
      }
    ]
  },
  {
    path: '/not-aves-table',
    name: 'notAvesTable',
    component: () => import('../components/NotAvesTable.vue'),
    children:[
      {
        path: 'aves-details',
        component: () => import('../components/AvesDetails.vue')
      },
      {
        path: 'not-aves-details',
        component: () => import('../components/NotAvesDetails.vue')
      }
    ]
  },
  {
    path: '/aves-details',
    name: 'avesDetails',
    component: () => import('../components/AvesDetails.vue')
  },
  {
    path: '/not-aves-details',
    name: 'notAvesDetails',
    component: () => import('../components/NotAvesDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
