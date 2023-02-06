import { previewRouterExternals } from "@glue/glue-cli";
import { useRouteData, useNavigate } from "@solidjs/router";
import { Outlet } from "@solidjs/router";
import type { Component } from "solid-js";

import { lazy } from "solid-js";
import { clearDelegatedEvents } from "solid-js/web";

const Home: Component = () => {
  interface IMeta {
    name: string;
    path: string;
    lang: string;
    type: string;
  }
  const { path, lang, name }: IMeta = useRouteData();
  console.log(path, lang, name, "routeData");

  const navigate = useNavigate();
  const title = name ? name.replace(/-/g, "") : "";
  const showDocNav = !previewRouterExternals.includes(name);
  console.log(showDocNav, title, name, "showDocNav");
  window.addEventListener("message", (event) => {
    if (event.data?.type !== "replacePath") {
      return;
    }

    const path = event.data?.value || "";
    console.log(event.data, path, "event.data");
    navigate(path);
  });
  // useEffect(() => {
  //   //为啥会触发多次,很奇怪
  //   console.log(location, "1111111111");
  //   // syncPathToParent();
  // }, [location]);

  const onBack = () => {
    if (history.length > 1) {
      history.back();
    } else {
      navigate("/");
    }
  };
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
    <div>
      <div>11111</div>
      {showDocNav ? (
        <glue-doc-nav gtitle={title} onGlueBack={onBack}></glue-doc-nav>
      ) : null}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
