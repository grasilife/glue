import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import {
  glueConfig,
  previewRouterExternals,
  searchType,
  searchLang,
} from "@glue/glue-cli";
console.log(glueConfig, previewRouterExternals, "previewRouterExternals");
const { locales, defaultLang, defaultType, types }: any = glueConfig.site;
console.log(locales, "locales");

let currentType = searchType(types, defaultType);
let currentLang = searchLang(locales, defaultLang);
console.log(currentType, currentLang, "current");
const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes(),
});
function getRoutes() {
  const routes: any = [
    {
      path: "/",
      name: "home",
      redirect: `/${currentType}/${currentLang}/home`,
      meta: {
        name: "home",
        path: "home",
        lang: currentLang,
        type: currentType,
      },
    },
  ];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          types.forEach((type: { label: any }) => {
            routes.push({
              name: `/${type.label}/${lang}/${element2.title}`,
              path: `/${type.label}/${lang}/${element2.path}`,
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
export default router;
