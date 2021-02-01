import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, decamelize } from "../common";
// import DemoHome from "./components/DemoHome";
import config from "../common/config";
const { locales, defaultLang } = config.site;
console.log(locales, defaultLang, "路由");
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: "/mobile",
  routes: getRoutes(),
});
function getRoutes() {
  const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("./components/DemoHome.vue"),
      //   component: () => import("../docs/button/demo/index.vue"),
    },
  ];
  Object.keys(locales).forEach((lang) => {
    console.log(lang, locales[lang]);
    locales[lang].nav.forEach((element) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(
            `/${lang}/${element2.path}`,
            "../docs/" + element2.path + "/demo/index.vue",
            "移动端路径"
          );
          routes.push({
            name: element2.title,
            path: `/${lang}/${element2.path}`,
            meta: {
              name: element2.title,
            },
            //这个地方不能使用下面的方法
            // component: () => import(imortPath),
            component: () =>
              import("../docs/" + element2.path + "/demo/index.vue"),
          });
        });
      }
    });
  });
  console.log(routes, "routes");
  return routes;
}
export default router;
