import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomePage.vue'),
      name: 'HomePage'
    },
    {
      path: '/projectDetail/:id',
      component: () => import('@/views/Project.vue'),
      name: 'Project'
    }
  ]
})

export default router
