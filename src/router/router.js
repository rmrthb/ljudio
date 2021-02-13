import Vue from "vue";
import VueRouter from "vue-router";
import PlayList from '../components/PlayList'

Vue.use(VueRouter);

const routes = [
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
