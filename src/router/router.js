import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login'
import Main from '../components/Main'
import Register from '../components/Register'
import PlayList from '../components/PlayList'

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
  },
  {
    path: '/playlist',
    name: 'PlayList',
    component: PlayList
  }
];

const router = new VueRouter({
  routes
});

export default router;
