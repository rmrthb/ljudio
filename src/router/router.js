import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login'
import Main from '../components/Main'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
];

const router = new VueRouter({
  routes
});

export default router;
