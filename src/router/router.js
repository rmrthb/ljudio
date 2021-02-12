import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login'
import Main from '../components/Main'
import Register from '../components/Register'

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
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
