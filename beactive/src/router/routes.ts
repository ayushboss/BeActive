import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path:'/myevents',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MyEventsPage.vue') }],
  },
  {
    path: '/formpage',
    component: () => import('layouts/MainLayout.vue'),
    children : [{ path: '', component: () => import('pages/FormTestPage.vue') }],
  },
  {
    path: '/event/t21t523434',
    component: () => import('layouts/MainLayout.vue'),
    children : [{ path: '', component: () => import('pages/FormTestPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
