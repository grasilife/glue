import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./plugins/element-ui";
import "./common/styles//global.less";
import "../common/style/base.less";
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
