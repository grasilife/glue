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
    //   component: () => import("./views/zh-CN/README.zh-CN.md"),
    // },
  ];
  Object.keys(locales).forEach((lang) => {
    console.log(lang, locales[lang]);
    locales[lang].nav.forEach((element) => {
      if (element.items) {
        element.items.forEach((element2) => {
          let imortPath = `./views/${lang}/${element2.path}/README.${lang}.md`;
          console.log(
            "./views/" + lang + "/" + element2.path,
            `/${lang}/${element2.path}`,
            imortPath,
            "路径"
          );

          routes.push({
            name: element2.title,
            path: `/${lang}/${element2.path}`,
            //这个地方不能使用下面的方法
            // component: () => import(imortPath),
            component: () =>
              import(
                "./views/" +
                  lang +
                  "/" +
                  element2.path +
                  "/" +
                  "README." +
                  lang +
                  ".md"
              ),
          });
        });
      }
    });
  });
  console.log(routes, "routes");
  return routes;
}
export default router;
