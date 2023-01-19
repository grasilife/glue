import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "~/common/style/base.less";
import "~/common/style/highlight.less";
import "~/common/style/markdown.less";

let app = createApp(App);
app.use(router);
app.mount("#app");
