import type { Component } from "solid-js";
import {
  Routes,
  Route,
  useRoutes,
  useRouteData,
  Outlet,
} from "@solidjs/router";
import routes from "./router";
import styles from "./App.module.css";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div class={styles.App}>
      <Routes />
    </div>
  );
};
export default App;
