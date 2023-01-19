<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-progress :percentage="50" show-pivot />
    </DemoBlock>

    <DemoBlock :title="strokeWidth">
      <glue-progress :percentage="50" :stroke-width="8" show-pivot />
    </DemoBlock>

    <DemoBlock :title="title2">
      <glue-progress inactive :percentage="50" show-pivot />
    </DemoBlock>

    <DemoBlock :title="title3">
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
    </DemoBlock>
  </DemoSection>
</template>

<script>
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
