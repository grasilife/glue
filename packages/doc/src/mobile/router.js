import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "登录",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: "/mobile",
  routes,
});
console.log(router, "router");
export default router;
