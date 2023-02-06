import type { Component } from "solid-js";
import {
  Routes,
  Route,
  useRoutes,
  useRouteData,
  Outlet,
} from "@solidjs/router";
import routes from "./router";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return <Routes />;
};
export default App;
