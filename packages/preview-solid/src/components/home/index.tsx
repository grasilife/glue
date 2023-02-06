import { useRouteData } from "@solidjs/router";
import type { Component } from "solid-js";

import { lazy } from "solid-js";

const Home: Component = () => {
  const routeData: () => any = useRouteData();
  console.log(routeData, "routeData");
  return <div>home</div>;
};

export default Home;
