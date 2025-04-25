import {Block, Boiler, Turbine} from '@/pages/block'
import { RouteLocationGeneric, RouteRecordRaw  } from 'vue-router';


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/block1'
  },
  {
    path: '/:block(block1)',
    name: 'Block',
    component: Block,
    redirect: (to: RouteLocationGeneric) => `${to.path}/turbine`,
    children: [
      {
        path: 'boiler',
        name: 'Boiler',
        component: Boiler
      },
      {
        path: 'turbine',
        name: 'Turbine',
        component: Turbine
      }
    ]
  }
]
