import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Alfred from "./views/Chatboard.vue";
import Dashboard from "./views/Dashboard.vue";
import Promo from "./views/Promo.vue";
import Promodashboard from "./views/Promodashboard.vue";
import Portemonnee from "./views/Portemonnee.vue";

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
      path: "/Portemonnee",
      name: "Portemonnee",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Portemonnee
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
