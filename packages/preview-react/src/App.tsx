import { useState, useEffect, useMemo, useCallback } from "react";
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
    console.log(name, "pathpathpath");
    return !previewRouterExternals.includes(name);
  }, [name]);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data?.type !== "replacePath") {
        return;
      }

      const path = event.data?.value || "";
      console.log(event.data, path, "event.data");
      navigate(path);
    });
  }, []);
  useEffect(() => {
    //为啥会触发多次,很奇怪
    console.log(location, "1111111111");
    // syncPathToParent();
  }, [location]);

  const onBack = useCallback(() => {
    if (history.length > 1) {
      history.back();
    } else {
      navigate("/");
    }
  }, []);
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
        <GlueDocNav gtitle={title} onGlueBack={onBack}></GlueDocNav>
      ) : null}
      <Outlet />
    </div>
  );
}
