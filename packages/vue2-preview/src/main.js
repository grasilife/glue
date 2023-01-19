import Vue from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./plugins/vant";
import "@glue/glue-cli/src/common/style/base.less";
import DemoBlock from "~/components/DemoBlock.vue";
import DemoSection from "~/components/DemoSection.vue";
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^glue-/];
applyPolyfills().then(() => {
  defineCustomElements();
});
Vue.component("DemoBlock", DemoBlock);
Vue.component("DemoSection", DemoSection);
// defineCustomElements();
new Vue({
  // store,
  router,
  render: (h) => h(App),
}).$mount("#app");
