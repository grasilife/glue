import { useState } from "react";
import DemoHome from "~/components/demo-home/index";
import NoMatch from "~/components/no-match/index";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { glueConfig, previewRouterExternals } from "@glue/glue-cli";
const type = "react";
const { locales } = glueConfig.site;
function searchCurrentLang() {
  let current = "";
  Object.keys(locales).map((item: any) => {
    if (location.href.includes(item)) {
      current = item;
    }
  });
  return current;
}
let currentLang = searchCurrentLang();
console.log(currentLang, "currentLang");
function getRoutes() {
  let routes: any[] = [];
  console.log(Object.keys(locales), "locales");
  locales[currentLang].nav.forEach((element: { items: any[] }) => {
    if (element.items) {
      element.items.forEach((element2) => {
        console.log(element2, "element2");
        if (previewRouterExternals.includes(element2.path)) {
          routes.push({
            path: `/${type}/${currentLang}/${element2.path}`,
            loader: () => {
              return {
                name: `${element2.title}`,
                path: element2.path,
                lang: currentLang,
                type: `${type}`,
              };
            },
            element: <DemoHome />,
          });
        } else {
          const LazyCom = lazy(() => import(`./pages/${element2.path}/index`));
          routes.push({
            path: `/${type}/${currentLang}/${element2.path}`,
            loader: () => {
              return {
                name: `${element2.title}`,
                path: element2.path,
                lang: currentLang,
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
  console.log(routes, "routesroutes");
  return routes;
}

export default function App() {
  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <DemoHome />,
        loader: () => {
          return {
            name: `home`,
            path: "/",
            lang: currentLang,
            type: `${type}`,
          };
        },
      },
      ...getRoutes(),
      { path: "*", element: <NoMatch /> },
    ],
    { basename: "/react-preview" }
  );

  return <RouterProvider router={router} />;
}
