import Vue from "vue";
import VueRouter from "vue-router";
import { glueConfig, previewRouterExternals } from "@glue/glue-cli";
const { locales, defaultLang, types } = glueConfig.site;
Vue.use(VueRouter);
const type = "vue2";
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: getRoutes(),
});

function getRoutes() {
  const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("~/components/demo-home/index.vue"),
    },
  ];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            routes.push({
              name: `/${type}]/${lang}/${element2.title}`,
              path: `/${type}/${lang}/${element2.path}`,
              meta: {
                name: `${element2.title}`,
                path: element2.path,
                lang,
                type: `${type}`,
              },
              component: () => import("~/components/demo-home/index.vue"),
            });
          } else {
            routes.push({
              name: `/${type}/${lang}/${element2.title}`,

              path: `/${type}/${lang}/${element2.path}`,
              meta: {
                name: `${element2.title}`,
                path: element2.path,
                lang,
                type: `${type}`,
              },
              component: () =>
                import("./pages/" + element2.path + "/index.vue"),
            });
          }
        });
      }
    });
  });

  console.log(routes, "routes2");
  return routes;
}

export default router;
