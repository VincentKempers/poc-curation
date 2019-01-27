import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Alfred from "./views/Chatboard.vue";
import Dashboard from "./views/Dashboard.vue";
import Promo from "./views/Promo.vue";
import Promodashboard from "./views/Promodashboard.vue";

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/alfred",
      name: "Alfred",
      component: Alfred
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/promo",
      name: "Promo",
      component: Promo
    },
    {
      path: "/promodashboard",
      name: "PromoDash",
      component: Promodashboard
    }
  ]
});
