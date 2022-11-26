<template>
  <section class="van-doc-demo-section" :class="demoName">
    <slot />
  </section>
</template>

<script>
import { decamelize } from "../../common";

export default {
  name: "DemoSection",

  computed: {
    demoName() {
      const { meta } = this.$route || {};
      console.log(meta, "metameta");
      if (meta && meta.path) {
        return `demo-${decamelize(meta.path)}`;
      }

      return "";
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.van-doc-demo-section {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  overflow: auto;
}
</style>
