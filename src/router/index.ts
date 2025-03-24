import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/block1'
    },
    {
      path: '/:block(block1)',
      name: 'Block',
      component: () => import('../views/TheBlock.vue'),
      redirect: to => `${to.path}/turbine`,
      children: [
        {
          path: 'boiler',
          name: 'Boiler',
          component: () => import('../views/block/TheBoiler.vue')
        },
        {
          path: 'turbine',
          name: 'Turbine',
          component: () => import('../views/block/TheTurbine.vue')
        }
      ]
    }
  ]
})

export default router
