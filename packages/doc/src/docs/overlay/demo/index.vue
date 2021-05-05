<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-button type="primary" style="margin-left: 16px;" @click="show = true">{{ showOverlay }}</glue-button>
      <glue-overlay :show="show" @click="show = false" />
    </DemoBlock>

    <DemoBlock :title="embeddedContent">
      <glue-button type="primary" style="margin-left: 16px;" @click="showEmbedded = true">
        {{ embeddedContent }}
      </glue-button>
      <glue-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </glue-overlay>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      showOverlay: "显示遮罩层",
      embeddedContent: "嵌入内容",
      show: false,
      showEmbedded: false
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-overlay {
  background: @white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: @white;
  }
}
</style>
