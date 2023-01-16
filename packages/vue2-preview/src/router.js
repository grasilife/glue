import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, decamelize } from "../common";
import "../common/iframe-router";
// import DemoHome from "./components/DemoHome";
import config from "../common/config";
const { locales, defaultLang, defaultType, types } = config.site;
console.log(locales, defaultLang, "路由");
const list = [
  "home",
  "quickstart",
  "advanced-usage",
  "changelog",
  "rfc",
  "theme",
  "contribution",
  "design",
  "style-guide",
  "locale"
];
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: "/mobile",
  routes: getRoutes()
});
router.afterEach(() => {
  Vue.nextTick(() => window.syncPath());
});

window.vueRouter = router;
function getRoutes() {
  const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("./components/DemoHome.vue")
      //   component: () => import("../docs/button/demo/index.vue"),
    }
  ];
  Object.keys(locales).forEach(lang => {
    // console.log(lang, locales[lang]);
    locales[lang].nav.forEach(element => {
      if (element.items) {
        element.items.forEach(element2 => {
          console.log(element2, "element2");
          if (list.includes(element2.path)) {
            // console.log(`/${lang}/${element2.path}`, "../docs/" + element2.path + "/demo/index.vue", "移动端路径");
            types.forEach(type => {
              routes.push({
                name: `/${type.label}/${lang}/${element2.title}`,
                path: `/${type.label}/${type.label}/${lang}/${element2.path}`,
                meta: {
                  path: element2.path,
                  lang,
                  type: type.label
                },
                //这个地方不能使用下面的方法
                // component: () => import(imortPath),
                component: () => import("./components/DemoHome.vue")
              });
            });
          } else {
            types.forEach(type => {
              //   console.log(
              //     `/${type.label}/${lang}/${element2.path}`,
              //     "../docs/" + element2.path + "/demo/index.vue",
              //     "移动端路径"
              //   );
              routes.push({
                name: `/${type.label}/${lang}/${element2.title}`,

                path: `/${type.label}/${lang}/${element2.path}`,
                meta: {
                  path: element2.path,
                  lang,
                  type: type.label
                },
                //这个地方不能使用下面的方法
                // component: () => import(imortPath),
                component: () =>
                  import("@/docs/" + element2.path + "/demo/index.vue")
              });
            });
          }
        });
      }
    });
  });
  routes.push({
    path: "*",
    component: () => import("./components/DemoHome.vue")
  });
  console.log(routes, "routes2");
  return routes;
}
export default router;
