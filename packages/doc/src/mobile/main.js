import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/element-ui";
// import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
// Vue.config.ignoredElements = [/^glue-/];
// applyPolyfills().then(() => {
//   defineCustomElements();
// });
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
