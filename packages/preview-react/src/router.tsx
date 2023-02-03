import { useState, useEffect } from "react";
import DemoHome from "~/components/demo-home/index";
import App from "~/App";
import NoMatch from "~/components/no-match/index";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  useNavigate,
  useLocation,
  RouteObject,
} from "react-router-dom";
import {
  glueConfig,
  previewRouterExternals,
  searchType,
  searchLang,
} from "@glue/glue-cli";
const type = "react";

const { locales, defaultLang, defaultType, types } = glueConfig.site;
let currentType = searchType(types, defaultType);
let currentLang = searchLang(locales, defaultLang);
console.log(currentType, currentLang, "current3");
function getRoutes() {
  let routes: RouteObject[] = [];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            routes.push({
              path: `/${type}/${lang}/${element2.path}`,
              loader: () => {
                return {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang: lang,
                  type: `${type}`,
                };
              },
              element: <DemoHome />,
            });
          } else {
            const LazyCom = lazy(
              () => import(`./pages/${element2.path}/index`)
            );
            routes.push({
              path: `/${type}/${lang}/${element2.path}`,
              loader: () => {
                return {
                  name: `${element2.title}`,
                  path: element2.path,
                  lang: lang,
                  type: `${type}`,
                };
              },

              element: (
                <Suspense fallback={<>...</>}>
                  <LazyCom />
                </Suspense>
              ),
            });
          }
        });
      }
    });
  });
  console.log(Object.keys(locales), "locales");

  console.log(routes, "routesroutes");
  return routes;
}

export default function Router() {
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        loader: () => {
          return {
            name: `home`,
            path: "/",
            lang: currentLang,
            type: currentType,
          };
        },
        children: getRoutes(),
      },
      { path: "*", element: <NoMatch /> },
    ],
    { basename: "/preview-react" }
  );

  return <RouterProvider router={router} />;
}
