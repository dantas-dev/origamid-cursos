import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Produto from "./views/Produto.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true
    }
  ],
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});
