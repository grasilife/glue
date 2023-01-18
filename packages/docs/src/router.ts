import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  glueConfig,
  previewRouterExternals,
  isMobile,
  initIframe,
} from "@glue/glue-cli";
console.log(glueConfig, previewRouterExternals, "previewRouterExternals");
initIframe();
const { locales, defaultLang, types }: any = glueConfig.site;
if (isMobile) {
  location.replace("mobile.html" + location.hash);
}

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: getRoutes(), // `routes: routes` 的缩写
});
// router.afterEach(() => {
//   Vue.nextTick(() => window.syncPath());
// });

window.vueRouter = router;
function getRoutes() {
  const routes: any = [
    {
      path: "/",
      name: "home",
      // component: defineAsyncComponent(
      //   () => import("~/components/DemoHome.vue")
      // ),
      component: () => import("~/components/DemoHome.vue"),
    },
  ];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            types.forEach((type: { label: any }) => {
              console.log(type.label, "type.label");
              routes.push({
                name: `/${type.label}/${lang}/${element2.title}`,
                path: `/${type.label}/${type.label}/${lang}/${element2.path}`,
                meta: {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang,
                  type: type.label,
                },
                component: defineAsyncComponent(
                  () => import("~/components/DemoHome.vue")
                ),
              });
            });
          } else {
            types.forEach((type: { label: any }) => {
              routes.push({
                name: `/${type.label}/${lang}/${element2.title}`,

                path: `/${type.label}/${lang}/${element2.path}`,
                meta: {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang,
                  type: type.label,
                },
                component: () =>
                  import("./pages/" + element2.path + "/demo/index.vue"),
              });
            });
          }
        });
      }
    });
  });
  // routes.push({
  //   path: "*",
  //   component: defineAsyncComponent(() => import("~/components/DemoHome.vue")),
  // });
  // console.log(routes, "routes2");
  return routes;
}
export default router;
