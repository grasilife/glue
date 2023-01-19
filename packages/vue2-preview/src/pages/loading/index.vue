<template>
  <DemoSection>
    <DemoBlock :title="type">
      <glue-loading />
      <glue-loading type="spinner" />
    </DemoBlock>

    <DemoBlock :title="color">
      <glue-loading color="#1989fa" />
      <glue-loading type="spinner" color="#1989fa" />
    </DemoBlock>

    <DemoBlock :title="size">
      <glue-loading size="24" />
      <glue-loading type="spinner" size="24" />
    </DemoBlock>

    <DemoBlock :title="text">
      <glue-loading size="24px" :text="loading"> </glue-loading>
    </DemoBlock>

    <DemoBlock :title="vertical">
      <glue-loading size="24px" vertical :text="loading"> </glue-loading>
    </DemoBlock>

    <DemoBlock :title="textColor">
      <glue-loading size="24px" vertical color="#0094ff" :text="loading">
      </glue-loading>
      <glue-loading size="24px" vertical text-color="#0094ff" :text="loading">
      </glue-loading>
    </DemoBlock>
  </DemoSection>
</template>

<script>
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
