<template>
  <div class="root">
    <DemoNav />
    <router-view>
      <keep-alive>
        <DemoSection> </DemoSection>
      </keep-alive>
    </router-view>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
// import { listenParentPathChange } from "@glue/glue-cli";
import DemoNav from "./components/DemoNav.vue";
import DemoSection from "./components/DemoSection.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",

  props: {},

  mixins: [],

  components: { DemoNav, DemoSection, HelloWorld },

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
      this.$router.replace(path).catch(() => {});
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
