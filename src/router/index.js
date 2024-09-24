import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aves-table',
    name: 'avesTable',
    component: () => import('../components/AvesTable.vue'),
    children:[
      {
        path: 'aves-details',
        name: 'avesTableChildAvesDetails',
        component: () => import('../components/AvesDetails.vue')
      },
      {
        path: 'not-aves-details',
        name: 'avesTableChildNotAvesDetails',
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
        name: 'notAvesTableChildAvesDetails',
        component: () => import('../components/AvesDetails.vue')
      },
      {
        path: 'not-aves-details',
        name: 'notAvesTableChildNotAvesDetails',
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
