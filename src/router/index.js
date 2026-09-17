import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/portfolio.vue')
  },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: () => import('../views/ProjectsView.vue')
  // },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})
export default router
