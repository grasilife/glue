import Vue from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^glue-/];
applyPolyfills().then(() => {
  defineCustomElements();
});
// defineCustomElements();
new Vue({
  // store,
  router,
  render: (h) => h(App),
}).$mount("#app");
