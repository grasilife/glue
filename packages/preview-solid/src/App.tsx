import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import styles from "./App.module.css";
const Home = lazy(() => import("./components/home/index"));
const App: Component = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={Home} />
        {/* <Route path="/users" component={Users} /> */}
      </Routes>
    </div>
  );
};
export default App;
