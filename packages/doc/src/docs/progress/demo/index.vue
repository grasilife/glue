<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <glue-progress :percentage="50" />
    </demo-block>

    <demo-block :title="strokeWidth">
      <glue-progress :percentage="50" stroke-width="8" />
    </demo-block>

    <demo-block :title="title2">
      <glue-progress inactive :percentage="50" />
    </demo-block>

    <demo-block :title="title3">
      <glue-progress color="#f2826a" :percentage="25" :pivot-text="orange" />
      <glue-progress color="#ee0a24" :percentage="50" :pivot-text="red" />
      <glue-progress
        :percentage="75"
        :pivot-text="purple"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </demo-block>
  </demo-section>
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
      strokeWidth: "线条粗细"
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

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
