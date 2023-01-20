<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <glue-divider></glue-divider>
    </glue-doc-block>

    <glue-doc-block :gtitle="withText">
      <glue-divider :text="text">
        <!-- {{ text }} -->
      </glue-divider>
    </glue-doc-block>

    <glue-doc-block :gtitle="contentPosition">
      <glue-divider content-position="left" :text="text">
        <!-- {{ text }} -->
      </glue-divider>

      <glue-divider content-position="right" :text="text">
        <!-- {{ text }} -->
      </glue-divider>
    </glue-doc-block>

    <glue-doc-block :gtitle="dashed">
      <glue-divider dashed :hairline="false" :text="text">
        <!-- {{ text }} -->
      </glue-divider>
    </glue-doc-block>

    <glue-doc-block :gtitle="customStyle">
      <glue-divider
        :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
        :text="text"
      >
        <!-- {{ text }} -->
      </glue-divider>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      text: "文本",
      dashed: "虚线",
      withText: "展示文本",
      contentPosition: "内容位置",
      customStyle: "自定义样式",
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-divider {
  background-color: @white;

  .van-doc-demo-block__title {
    padding-top: @padding-md;
  }
}
</style>
