/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router } from "@solidjs/router";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
applyPolyfills().then(() => {
  defineCustomElements();
});
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router base="/preview-solid">
      <App />
    </Router>
  ),
  root!
);
