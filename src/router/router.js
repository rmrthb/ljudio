import Vue from "vue";
import VueRouter from "vue-router";
import PlayList from "../components/PlayList";
import SearchResult from "../components/SearchResult";

Vue.use(VueRouter);

const routes = [
  {
    path: "/playlist",
    name: "PlayList",
    component: PlayList,
  },

  {
    path: "/searchresult",
    name: "SearchResult",
    component: SearchResult,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
