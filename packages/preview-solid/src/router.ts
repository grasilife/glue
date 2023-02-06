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
const routes: any = [
  // {
  //   path: "/users",
  //   component: lazy(() => import("/pages/users.js")),
  // },
  // {
  //   path: "/users/:id",
  //   component: lazy(() => import("/pages/users/[id].js")),
  //   children: [
  //     {
  //       path: "/",
  //       component: lazy(() => import("/pages/users/[id]/index.js")),
  //     },
  //     {
  //       path: "/settings",
  //       component: lazy(() => import("/pages/users/[id]/settings.js")),
  //     },
  //     {
  //       path: "/*all",
  //       component: lazy(() => import("/pages/users/[id]/[...all].js")),
  //     },
  //   ],
  // },
  {
    path: "/",
    data: () => {
      return {
        name: `home`,
        path: "home",
        lang: currentLang,
        type: currentType,
      };
    },
    component: lazy(() => import("./components/home/index")),
  },
  // {
  //   path: "/*all",
  //   component: lazy(() => import("/pages/[...all].js")),
  // },
];
export default routes;
