<template>
  <div class="root">
    <glue-doc-nav @glueBack="onBack" :gtitle="title"></glue-doc-nav>
    <router-view>
      <keep-alive>
        <glue-doc-section> </glue-doc-section>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
// import DemoNav from "./components/DemoNav.vue";
export default {
  name: "App",

  props: {},

  mixins: [],

  components: {},

  data() {
    return {};
  },

  computed: {
    title() {
      const { name } = this.$route.meta || {};
      console.log(this.$route, "this.$route");
      console.log(name, this.$route, "name11");
      return name ? name.replace(/-/g, "") : "";
    },
  },

  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log("111112212211");
      this.syncPathToParent();
    },
  },

  created() {},

  mounted() {
    window.addEventListener("message", (event) => {
      if (event.data?.type !== "replacePath") {
        return;
      }
      console.log(event.data, "event.data");
      const path = event.data?.value || "";
      this.$router.replace(path);
    });
  },

  destroyed() {},

  methods: {
    onBack() {
      if (history.length > 1) {
        history.back();
      } else {
        this.$router.replace("/");
      }
    },
    syncPathToParent() {
      console.log(window.top, "window.top");
      if (window) {
        window.top.postMessage(
          {
            type: "replacePath",
            value: this.$route.path,
          },
          "*"
        );
      }
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
