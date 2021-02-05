import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./plugins/element-ui";
import "./plugins/vant";
import "../common/style/base.less";
import "@vant/touch-emulator";
import DemoBlock from "./components/DemoBlock.vue";
import DemoSection from "./components/DemoSection.vue";
Vue.component("DemoBlock", DemoBlock);
Vue.component("DemoSection", DemoSection);
import { applyPolyfills, defineCustomElements } from "glue-components/loader";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^glue-/];
applyPolyfills().then(() => {
  defineCustomElements();
});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
