import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage'


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    name: 'memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    name:'Detail',
    component: ()=> import('../pages/MemoriesDetailsPage.vue')
  },
  {
    path: '/memories/add',
    name:'add',
    component: ()=> import('../pages/AddMemoryPage.vue')
  }
  
  
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
