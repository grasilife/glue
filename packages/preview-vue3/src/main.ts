import { createApp } from "vue";
import "@glue/glue-cli/src/common/style/base.less";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
import App from "./App.vue";
applyPolyfills().then(() => {
  defineCustomElements();
});
let app = createApp(App);
app.mount("#app");
