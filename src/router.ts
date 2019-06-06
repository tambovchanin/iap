import Vue from 'vue';
// import { store } from './store';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

// const ifNotAuthenticated = (to: any, from: any, next: (path?: string) => void): void => {
//   if (!store.getters.isAuthenticated) {
//     return next();
//   }
//
//   next('/');
// };
//
// const ifAuthenticated = (to: any, from: any, next: (path?: string) => void): void => {
//   if (store.getters.isAuthenticated) {
//     return next();
//   }
//
//   next('/login');
// };

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
      // beforeEnter: ifNotAuthenticated
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue')
      // beforeEnter: ifAuthenticated
    }
  ]
});
