import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^glue-/];
applyPolyfills().then(() => {
  defineCustomElements();
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
