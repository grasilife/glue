import type { Component } from "solid-js";
import { Routes, Route, useRoutes, useRouteData } from "@solidjs/router";
import routes from "./router";
import styles from "./App.module.css";

const App: Component = () => {
  const Routes = useRoutes(routes);

  // interface IMeta {
  //   name: string;
  //   path: string;
  //   lang: string;
  //   type: string;
  // }
  // // const navigate = useNavigate();
  // // const location = useLocation();
  // // const { path, lang, name } = useLoaderData() as IMeta;
  // const title = () => (name ? name.replace(/-/g, "") : "");
  // const showDocNav = useMemo(() => {
  //   console.log(name, "pathpathpath");
  //   return !previewRouterExternals.includes(name);
  // }, [name]);
  // useEffect(() => {
  //   window.addEventListener("message", (event) => {
  //     if (event.data?.type !== "replacePath") {
  //       return;
  //     }

  //     const path = event.data?.value || "";
  //     console.log(event.data, path, "event.data");
  //     navigate(path);
  //   });
  // }, []);
  // useEffect(() => {
  //   //为啥会触发多次,很奇怪
  //   console.log(location, "1111111111");
  //   // syncPathToParent();
  // }, [location]);

  // const onBack = useCallback(() => {
  //   if (history.length > 1) {
  //     history.back();
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  // function syncPathToParent() {
  //   console.log(window.top, "window.top");
  //   if (window.top) {
  //     window.top.postMessage(
  //       {
  //         type: "replacePath",
  //         value: path,
  //       },
  //       "*"
  //     );
  //   }
  // }
  return (
    <div class={styles.App}>
      {/* {showDocNav ? (
        <glue-doc-nav gtitle={title} onGlueBack={onBack}></glue-doc-nav>
      ) : null} */}
      <Routes />
    </div>
  );
};
export default App;
