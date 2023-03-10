import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('../views/WelcomePage.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsPage.vue')
  },
  {
    path: '/project/:id',
    name: 'projectDetail',
    component: () => import('../views/ProjectDetailPage.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/TasksPage.vue')
  },
  {
    path: '/task/:id',
    name: 'taskDetail',
    component: () => import('../views/TaskDetailPage.vue')
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/PeoplePage.vue')
  },
  {
    path: '/person/:id',
    name: 'personDetail',
    component: () => import('../views/PersonDetailPage.vue')
  },
  {
    path: '/projectform',
    name: 'projectFormAdd',
    component: () => import('../views/ProjectFormPage.vue')
  },
  {
    path: '/projectform/:id',
    name: 'projectFormEdit',
    component: () => import('../views/ProjectFormPage.vue')
  },
  {
    path: '/taskform',
    name: 'taskFormAdd',
    component: () => import('../views/TaskFormPage.vue')
  },
  {
    path: '/taskformproject/:projectid',
    name: 'taskFormAddProject',
    component: () => import('../views/TaskFormPage.vue')
  },
  {
    path: '/taskform/:id',
    name: 'taskFormEdit',
    component: () => import('../views/TaskFormPage.vue')
  },
  {
    path: '/personform',
    name: 'personFormAdd',
    component: () => import('../views/PersonFormPage.vue')
  },
  {
    path: '/personform/:id',
    name: 'personFormEdit',
    component: () => import('../views/PersonFormPage.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import ('../views/ErrorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
