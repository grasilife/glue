import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile, decamelize } from "../common";
import config from "../common/config";
import "../common/iframe-router";
const { locales, defaultLang } = config.site;
console.log(locales, defaultLang, isMobile, "路由");
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
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
      redirect: `/${defaultLang}/home`
    }
  ];
  Object.keys(locales).forEach(lang => {
    console.log(lang, locales[lang]);
    locales[lang].nav.forEach(element => {
      if (element.items) {
        element.items.forEach(element2 => {
          console.log(`/${lang}/${element2.path}`, "../docs/" + element2.path + "/" + "README." + lang + ".md");
          routes.push({
            name: element2.title,
            path: `/${lang}/${element2.path}`,
            //这个地方不能使用下面的方法
            // component: () => import(imortPath),
            component: () => import("../docs/" + element2.path + "/" + "README." + lang + ".md")
          });
        });
      }
    });
  });
  console.log(routes, "routes");
  return routes;
}
export default router;
