import Vue from "vue";
import VueRouter from "vue-router";
import { isMobile } from "../common";
import config from "../common/config";
import "../common/iframe-router";
const { locales, defaultLang, defaultType, types } = config.site;
console.log(locales, defaultLang, defaultType, isMobile, config.site, types, "路由");
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: getRoutes()
});
router.afterEach(() => {
  Vue.nextTick(() => window.syncPath());
});
console.log(defaultType, defaultLang, "defaultLang");
window.vueRouter = router;
function getRoutes() {
  const routes = [
    {
      path: "/",
      name: "home",
      redirect: `/${defaultType}/${defaultLang}/home`,
      meta: {
        path: "home",
        lang: defaultLang,
        type: defaultType
      }
    }
  ];
  Object.keys(locales).forEach(lang => {
    locales[lang].nav.forEach(element => {
      if (element.items) {
        element.items.forEach(element2 => {
          console.log(element2.path, "element2.path");
          types.forEach(type => {
            console.log(type.label, lang, element2.title, "element2.title");
            // let comPath = `@/docs/${element2.path}/doc/${type.label}/README.${lang}.md`;
            // let comPath = `../docs/${element2.path}/demo/index.vue`;
            // console.log(comPath, "comPath");
            routes.push({
              name: `/${type.label}/${lang}/${element2.title}`,
              path: `/${type.label}/${lang}/${element2.path}`,
              //这个地方不能使用下面的方法
              // component: () => import(imortPath),
              component: () => import(`@/docs/${element2.path}/doc/${type.label}/README.${lang}.md`),
              meta: {
                path: element2.path,
                lang,
                type: type.label
              }
            });
          });
        });
      }
    });
  });
  console.log(routes, "routes");
  return routes;
}
export default router;
