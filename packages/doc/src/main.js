import Vue from "vue";
import App from "~/App.vue";
import router from "~/router";
// import "~/plugins/element-ui";
// import "~/common/styles/global.less";
import "~/common/style/base.less";
import "~/common/style/highlight.less";
import "~/common/style/markdown.less";
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
