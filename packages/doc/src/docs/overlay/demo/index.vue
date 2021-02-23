<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-button type="primary" :text="showOverlay" style="margin-left: 16px;" @click="show = true" />

      <glue-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block :title="embeddedContent">
      <van-button type="primary" :text="embeddedContent" style="margin-left: 16px;" @click="showEmbedded = true" />

      <g lue-overlay :show="showEmbedded" @click="showEmbedded = false">
        <div class="wrapper">
          <div class="block" />
        </div>
      </g>
    </demo-block>
  </demo-section>
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
