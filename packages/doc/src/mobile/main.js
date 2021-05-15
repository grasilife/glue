import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./plugins/element-ui";
import "./plugins/vant";
import "../common/style/base.less";
import "@glue/touch-emulator";
import DemoBlock from "./components/DemoBlock.vue";
import DemoSection from "./components/DemoSection.vue";
import "glue-components/dist/glue-components/glue-components.css";
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
