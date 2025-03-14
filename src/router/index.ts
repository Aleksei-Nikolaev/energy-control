import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to, from, next) => {
        next('/boiler');
      }
    },
    {
      path: '/boiler',
      name: 'Boiler',
      component: () => import('../views/TheBoiler.vue'),
    },
    {
      path: '/turbine',
      name: 'Turbine',
      component: () => import('../views/TheTurbine.vue'),
    },
  ],
})

export default router
