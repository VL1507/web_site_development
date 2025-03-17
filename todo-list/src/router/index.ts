import { createRouter, createWebHistory } from 'vue-router'
import ToDoListView from '@/views/ToDoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDoListView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    //   // component: AboutView,
    // },
    {
      path: '/todo',
      name: 'To-Do-List',
      component: ToDoListView,
    },
  ],
})

export default router
