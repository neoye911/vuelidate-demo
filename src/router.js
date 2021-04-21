import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/basic"
  },
  {
    path: "/basic",
    name: "Basic",
    component: () => import("@/Basics")
  },
  {
    path: "/errors",
    name: "Display Errors",
    component: () => import("@/DisplayErrors")
  },
  {
    path: "/delayed",
    name: "Delayed Errors",
    component: () => import("@/DelayedErrors")
  },
  {
    path: "/loops",
    name: "Loops",
    component: () => import("@/Loops")
  }
];

const router = new Router({
  routes
});

export default router;
