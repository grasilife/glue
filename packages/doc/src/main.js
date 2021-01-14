import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { defineCustomElements as glueComponents } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/glue-\w*/];
glueComponents(window);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
