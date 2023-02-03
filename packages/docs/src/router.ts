
import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
// import {
//   glueConfig,
//   previewRouterExternals,
//   isMobile,
//   initIframe,
// } from "@glue/glue-cli";
import {
  glueConfig,
  previewRouterExternals,
  // isMobile,
  // initIframe,
  // listenToSyncPath,
  // syncPathToChild,
} from "@glue/glue-cli";

console.log(glueConfig, previewRouterExternals, "previewRouterExternals");
// initIframe();
const { locales, defaultLang, defaultType, types }: any = glueConfig.site;
console.log(locales, "locales");
// if (isMobile) {
//   location.replace("mobile.html" + location.hash);
// }
function searchValueFn(list: any[]) {
  let current = "";
  list.map((item: any) => {
    console.log(location.href, item, "typetypetype");
    if (location.href.includes(item.label)) {
      current = item.label;
    }
  });
  return current;
}
let currentType = searchValueFn(types)?searchValueFn(types):defaultType;
console.log(currentType, "currentType");
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: getRoutes(), // `routes: routes` 的缩写
});
window.vueRouter = router;
function getRoutes() {
  const routes: any = [
    {
      path: "/",
      name: "home",
      redirect: `/${currentType}/${defaultLang}/home`,
      meta: {
        path: "home",
        lang: defaultLang,
        type: currentType ?? defaultType,
      },
    },
  ];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2.path, "element2.path");
          types.forEach((type: { label: any }) => {
            // let comPath = `~/docs/${element2.path}/doc/${type.label}/README.${lang}.md`;
            // let comPath = `../docs/${element2.path}/demo/index.vue`;
            // console.log(comPath, "comPath");
            routes.push({
              name: `/${type.label}/${lang}/${element2.title}`,
              path: `/${type.label}/${lang}/${element2.path}`,
              //这个地方不能使用下面的方法
              // component: () => import(imortPath),
              component: () =>
                import(
                  `./pages/${element2.path}/${type.label}/README.${lang}.md`
                ),
              meta: {
                path: element2.path,
                lang,
                type: type.label,
              },
            });
          });
        });
      }
    });
  });
  return routes;
}
// router.afterEach(() => {
//   nextTick(() => {
//     let path = router.currentRoute.value.path;
//     console.log(path, "router21212");
//     syncPathToChild(path);
//   });
// });

// if (glueConfig.site.simulator?.syncPathFromSimulator !== false) {
//   listenToSyncPath(router);
// }

window.parentVueRouter = router;
export default router;
