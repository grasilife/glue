import { useState, useEffect, useMemo } from "react";
import DemoHome from "~/components/demo-home/index";
import NoMatch from "~/components/no-match/index";
import { lazy, Suspense } from "react";
import { GlueDocNav } from "@glue/glue-react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import {
  glueConfig,
  previewRouterExternals,
  searchType,
  searchLang,
} from "@glue/glue-cli";

export default function App() {
  interface IMeta {
    name: string;
    path: string;
    lang: string;
    type: string;
  }
  const navigate = useNavigate();
  const location = useLocation();
  const { path, lang, name } = useLoaderData() as IMeta;
  const title = useMemo(() => {
    return name ? name.replace(/-/g, "") : "";
  }, [name]);
  const showDocNav = useMemo(() => {
    return !previewRouterExternals.includes(path);
  }, [path]);
  useEffect(() => {
    console.log(location, "location");
    syncPathToParent();
  }, [location]);
  window.addEventListener("message", (event) => {
    if (event.data?.type !== "replacePath") {
      return;
    }
    console.log(event.data, "event.data");
    const path = event.data?.value || "";
    navigate(path);
  });
  function onBack() {
    if (history.length > 1) {
      history.back();
    } else {
      navigate("/");
    }
  }
  function syncPathToParent() {
    console.log(window.top, "window.top");
    if (window.top) {
      window.top.postMessage(
        {
          type: "replacePath",
          value: path,
        },
        "*"
      );
    }
  }

  return (
    <div className="root">
      {showDocNav ? (
        <GlueDocNav
          gtitle={title}
          onGlueBack={() => {
            onBack();
          }}
        ></GlueDocNav>
      ) : null}
      <Outlet />
    </div>
  );
}
