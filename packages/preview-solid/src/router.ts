import { Routes, Route, useRoutes } from "@solidjs/router";
import {
  glueConfig,
  previewRouterExternals,
  searchType,
  searchLang,
} from "@glue/glue-cli";
import { lazy } from "solid-js";

const { locales, defaultLang, defaultType, types } = glueConfig.site;
let currentType = searchType(types, defaultType);
let currentLang = searchLang(locales, defaultLang);
console.log(currentType, currentLang, "currentLang");
const type = "solid";
function getRoutes() {
  const routes: any = [];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            routes.push({
              path: `/${type}/${lang}/${element2.path}`,
              data: () => {
                return {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang,
                  type: `${type}`,
                };
              },
              component: lazy(() => import("~/components/demo-home/index")),
            });
          } else {
            routes.push({
              path: `/${type}/${lang}/${element2.path}`,
              data: () => {
                return {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang,
                  type: `${type}`,
                };
              },
              component: lazy(
                () => import("./pages/" + element2.path + "/index")
              ),
            });
          }
        });
      }
    });
  });

  console.log(routes, "routes2");
  return routes;
}
const routes: any = [
  {
    path: "",
    data: () => {
      return {
        name: `home`,
        path: "home",
        lang: currentLang,
        type: currentType,
      };
    },
    component: lazy(() => import("./components/home/index")),
    children: getRoutes(),
  },
];
console.log(routes, "routes");
export default routes;
