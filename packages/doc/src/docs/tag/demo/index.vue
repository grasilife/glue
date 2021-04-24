<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <glue-cell :title="`primary ${type}`">
        <glue-tag type="primary">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="`success ${type}`">
        <glue-tag type="success">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="`danger ${type}`">
        <glue-tag type="danger">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="`warning ${type}`">
        <glue-tag type="warning">{{ tag }}</glue-tag>
      </glue-cell>
    </DemoBlock>

    <DemoBlock card :title="tagStyle">
      <glue-cell :title="plain">
        <glue-tag plain type="primary">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="round">
        <glue-tag round type="primary">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="mark">
        <glue-tag mark type="primary">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="closeable">
        <glue-tag v-if="show" size="medium" closeable type="primary" @glueIconClick="close">
          {{ tag }}
        </glue-tag>
      </glue-cell>
    </DemoBlock>

    <DemoBlock card :title="customSize">
      <glue-cell :title="smallSize">
        <glue-tag type="primary">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="mediumSize">
        <glue-tag type="primary" size="medium">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="largeSize">
        <glue-tag type="primary" size="large">{{ tag }}</glue-tag>
      </glue-cell>
    </DemoBlock>

    <DemoBlock card :title="customColor">
      <glue-cell :title="customBgColor">
        <glue-tag color="#7232dd">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="customTextColor">
        <glue-tag color="#ffe1e1" text-color="#ad0000">{{ tag }}</glue-tag>
      </glue-cell>
      <glue-cell :title="customPlainColor">
        <glue-tag color="#7232dd" plain>{{ tag }}</glue-tag>
      </glue-cell>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      type: "类型",
      tag: "标签",
      mark: "标记样式",
      plain: "空心样式",
      round: "圆角样式",
      tagStyle: "样式风格",
      closeable: "可关闭标签",
      smallSize: "小号标签",
      largeSize: "大号标签",
      mediumSize: "中号标签",
      customSize: "标签大小",
      customColor: "自定义颜色",
      customBgColor: "背景颜色",
      customTextColor: "文字颜色",
      customPlainColor: "空心颜色",
      show: true
    };
  },

  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-tag {
  glue-tag {
    margin-left: @padding-xs;
  }
}
</style>
