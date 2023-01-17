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

  watch: {},

  created() {},

  mounted() {
    console.log(this.$route, "huahuahu");
  },

  destroyed() {},

  methods: {},
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
