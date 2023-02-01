import { useState } from "react";
import DemoHome from "~/components/demo-home/index";
import NoMatch from "~/components/no-match/index";
import { lazy, Suspense } from "react";

import type { RouteObject } from "react-router-dom";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router-dom";
import {
  Await,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Form,
  Route,
  RouterProvider,
  useAsyncError,
  useAsyncValue,
  useFetcher,
  useFetchers,
  useLoaderData,
  useNavigation,
  useRevalidator,
  useRouteError,
  Outlet,
  Link,
  useRoutes,
  useParams,
} from "react-router-dom";
import {
  glueConfig,
  previewRouterExternals,
  // isMobile,
  // listenParentPathChange,
  // initIframe,
  // listenToSyncPath,
  // syncPathToParent,
} from "@glue/glue-cli";
function getRoutes() {
  const { locales, defaultLang, types } = glueConfig.site;
  let routes: RouteObject[] = [];
  Object.keys(locales).forEach((lang) => {
    locales[lang].nav.forEach((element: { items: any[] }) => {
      if (element.items) {
        element.items.forEach((element2) => {
          console.log(element2, "element2");
          if (previewRouterExternals.includes(element2.path)) {
            routes.push({
              path: `/react/${lang}/${element2.path}`,
              // meta: {
              //   name: `${element2.title}`,
              //   path: element2.path,
              //   lang,
              //   type: type.label,
              // },
              element: <DemoHome />,
            });
          } else {
            const LazyCom = lazy(
              () => import(`./pages/${element2.path}/index`)
            );
            routes.push({
              path: `/react/${lang}/${element2.path}`,
              // meta: {
              //   name: `${element2.title}`,
              //   path: element2.path,
              //   lang,
              //   type: type.label,
              // },

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
  console.log(routes, "routesroutes");
  return routes;
}

export default function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <DemoHome />,
      children: getRoutes(),
    },
    { path: "*", element: <NoMatch /> },
  ];

  let element = useRoutes(routes);

  return <>{element}</>;
}
