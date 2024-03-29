import Vue from "vue";
import VueRouter from "vue-router";
import {
  glueConfig,
  previewRouterExternals,
  // isMobile,
  // listenParentPathChange,
  // initIframe,
  // listenToSyncPath,
  // syncPathToParent,
} from "@glue/glue-cli";
// console.log(glueConfig, previewRouterExternals, "previewRouterExternals");
// initIframe();
const { locales, defaultLang, types } = glueConfig.site;
// if (isMobile) {
//   location.replace("mobile.html" + location.hash);
// }
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes: getRoutes(),
});

// window.vueRouter = router;
function getRoutes() {
  const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("~/components/DemoHome.vue"),
    },
  ];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            types.forEach((type) => {
              routes.push({
                name: `/${type.label}/${lang}/${element2.title}`,
                path: `/${type.label}/${lang}/${element2.path}`,
                meta: {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang,
                  type: type.label,
                },
                component: () => import("~/components/DemoHome.vue"),
              });
            });
          } else {
            types.forEach((type) => {
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
  //   component: () => import("~/components/DemoHome.vue"),
  // });
  console.log(routes, "routes2");
  return routes;
}

// /vue2/zh-CN/icon
// router.push("/vue2/zh-CN/icon");
// router.afterEach(() => {
//   // router.push("/vue2/zh-CN/icon");
// });
// console.log(Vue.$router, "router1111");
// Vue.$router.push("/vue2/zh-CN/button");
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };
// Vue.nextTick(() => {
//   listenParentPathChange(router);
// });

// window.vueRouter = router;
export default router;
