import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/home-index.vue';
import About from '@/views/about/about-index.vue';
import jobs from '@/views/jobs/jobs-index.vue';
import jobDetails from '@/views/jobs/job-details.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs,
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
