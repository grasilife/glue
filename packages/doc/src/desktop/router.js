import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, decamelize } from "../common";
import config from "../common/config";
const { locales, defaultLang } = config.site;
console.log(locales, defaultLang, "路由");
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/desktop",
  routes: getRoutes(),
});
function getRoutes() {
  const routes = [
    // {
    //   path: "/home1",
    //   name: "Home",
    //   component: () => import("./views/home.vue"),
    // },
  ];
  Object.keys(locales).forEach((key) => {
    console.log(key, locales[key]);
    locales[key].nav.forEach((element) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(
            "./views/" + key + "/" + element2.path,
            `/${key}/${element2.path}`,
            "路径"
          );
          routes.push({
            name: element2.title,
            path: `/${key}/${element2.path}`,
            component: () => import("./views/" + key + "/" + element2.path),
          });
        });
      }
    });
  });
  console.log(routes, "routes");
  return routes;
}
export default router;
