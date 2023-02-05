import App from "./App.svelte";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
applyPolyfills().then(() => {
  defineCustomElements();
});
const app = new App({
  target: document.getElementById("app"),
});

export default app;
