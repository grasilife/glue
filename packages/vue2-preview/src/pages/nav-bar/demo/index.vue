<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-nav-bar
        :title="title"
        :left-text="back"
        :right-text="button"
        left-arrow
        @glueLeft="glueLeft"
        @glueRight="glueRight"
      ></glue-nav-bar>
    </DemoBlock>

    <DemoBlock :title="useSlot">
      <glue-nav-bar
        :title="title"
        :left-text="back"
        left-arrow
        right-text="#slot"
      >
        <div slot="right-text" class="icon">
          <glue-icon name="search" size="18" />
        </div>
      </glue-nav-bar>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      button: "按钮",
      title: "标题",
      basicUsage: "基础用法",
      useSlot: "使用插槽",
      back: "返回",
    };
  },
  methods: {
    glueLeft() {},
    glueRight() {},
  },
};
</script>
<style lang="less">
@import "@glue/glue-cli/src/common/style/var2.less";

.demo-nav-bar {
  .icon {
    position: relative;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
