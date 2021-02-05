import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true
});
