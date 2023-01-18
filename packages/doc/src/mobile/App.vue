<template>
  <div class="root">
    <DemoNav />
    <router-view>
      <keep-alive>
        <DemoSection></DemoSection>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import DemoNav from "./components/DemoNav";
import DemoSection from "./components/DemoSection";
export default {
  name: "App",

  props: {},

  mixins: [],

  components: { DemoNav, DemoSection },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    console.log(this.$route, "huahuahu");
  },

  destroyed() {},

  methods: {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
