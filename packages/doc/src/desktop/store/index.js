import Vue from "vue";
import Vuex from "vuex";
//vuex持久化插件
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
import app from "./modules/views/app";
export default new Vuex.Store({
  strict: false,
  plugins: [createPersistedState()],
  modules: {
    components: {
      namespaced: true,
      modules: {}
    },
    views: {
      namespaced: true,
      modules: {
        app: app
      }
    }
  }
});
