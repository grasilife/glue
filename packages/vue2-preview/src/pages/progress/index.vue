<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-progress :percentage="50" show-pivot />
    </glue-doc-block>

    <glue-doc-block :gtitle="strokeWidth">
      <glue-progress :percentage="50" :stroke-width="8" show-pivot />
    </glue-doc-block>

    <glue-doc-block :gtitle="title2">
      <glue-progress inactive :percentage="50" show-pivot />
    </glue-doc-block>

    <glue-doc-block :gtitle="title3">
      <glue-progress
        color="#f2826a"
        :percentage="25"
        :pivot-text="orange"
        show-pivot
      />
      <glue-progress
        color="#ee0a24"
        :percentage="50"
        :pivot-text="red"
        show-pivot
      />
      <glue-progress
        :percentage="75"
        :pivot-text="purple"
        pivot-color="#7232dd"
        show-pivot
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      orange: "橘黄",
      red: "红色",
      purple: "紫色",
      basicUsage: "基础用法",
      title2: "置灰",
      title3: "样式定制",
      strokeWidth: "线条粗细",
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-progress {
  background: @white;

  .glue-progress {
    margin: 20px;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}
</style>
