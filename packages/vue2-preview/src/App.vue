<template>
  <div class="root">
    <DemoNav />
    <router-view>
      <keep-alive>
        <glue-doc-section> </glue-doc-section>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import DemoNav from "./components/DemoNav.vue";
export default {
  name: "App",

  props: {},

  mixins: [],

  components: { DemoNav },

  data() {
    return {};
  },

  computed: {},

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
