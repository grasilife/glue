<template>
  <DemoSection class="demo-col">
    <DemoBlock :title="basicUsage">
      <glue-row>
        <glue-col span="8">span: 8</glue-col>
        <glue-col span="8">span: 8</glue-col>
        <glue-col span="8">span: 8</glue-col>
      </glue-row>

      <glue-row>
        <glue-col span="4">span: 4</glue-col>
        <glue-col span="10" offset="4">
          offset: 4, span: 10
        </glue-col>
      </glue-row>

      <glue-row>
        <glue-col offset="12" span="12">
          offset: 12, span: 12
        </glue-col>
      </glue-row>
    </DemoBlock>

    <DemoBlock :title="title2">
      <glue-row gutter="20">
        <glue-col span="8">span: 8</glue-col>
        <glue-col span="8">span: 8</glue-col>
        <glue-col span="8">span: 8</glue-col>
      </glue-row>
    </DemoBlock>

    <DemoBlock :title="title3">
      <glue-row type="flex">
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
      </glue-row>

      <glue-row type="flex" justify="center">
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
      </glue-row>

      <glue-row type="flex" justify="end">
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
      </glue-row>

      <glue-row type="flex" justify="space-between">
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
      </glue-row>

      <glue-row type="flex" justify="space-around">
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
        <glue-col span="6">span: 6</glue-col>
      </glue-row>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      title2: "在列元素之间增加间距",
      title3: "Flex 布局"
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-col {
  background: @white;

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  .glue-col {
    margin-bottom: 10px;
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
