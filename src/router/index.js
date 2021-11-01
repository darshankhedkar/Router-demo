import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Job from '../views/jobs/Job.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props:true
  },

  //catchall
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
