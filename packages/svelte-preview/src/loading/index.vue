<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="type">
      <glue-loading />
      <glue-loading type="spinner" />
    </glue-doc-block>

    <glue-doc-block :gtitle="color">
      <glue-loading color="#1989fa" />
      <glue-loading type="spinner" color="#1989fa" />
    </glue-doc-block>

    <glue-doc-block :gtitle="size">
      <glue-loading size="24" />
      <glue-loading type="spinner" size="24" />
    </glue-doc-block>

    <glue-doc-block :gtitle="text">
      <glue-loading size="24px" :text="loading"> </glue-loading>
    </glue-doc-block>

    <glue-doc-block :gtitle="vertical">
      <glue-loading size="24px" vertical :text="loading"> </glue-loading>
    </glue-doc-block>

    <glue-doc-block :gtitle="textColor">
      <glue-loading size="24px" vertical color="#0094ff" :text="loading">
      </glue-loading>
      <glue-loading size="24px" vertical text-color="#0094ff" :text="loading">
      </glue-loading>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      loading: "加载中",
      type: "加载类型",
      text: "加载文案",
      size: "自定义大小",
      color: "自定义颜色",
      vertical: "垂直排列",
      textColor: "自定义文本颜色",
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

.demo-loading {
  background: @white;

  .glue-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
