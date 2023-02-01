import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/vant";
import "@glue/glue-cli/src/common/style/base.less";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^glue-/];
applyPolyfills().then(() => {
  defineCustomElements();
});
new Vue({
  // store,
  router,
  render: (h) => h(App),
}).$mount("#app");
