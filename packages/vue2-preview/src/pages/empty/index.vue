<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-empty :description="description" />
    </DemoBlock>

    <DemoBlock :title="imageType">
      <van-tabs v-model="active">
        <van-tab name="error" :title="error">
          <glue-empty image="error" :description="description" />
        </van-tab>
        <van-tab name="network" :title="network">
          <glue-empty image="network" :description="description" />
        </van-tab>
        <van-tab name="search" :title="search">
          <glue-empty image="search" :description="description" />
        </van-tab>
      </van-tabs>
    </DemoBlock>

    <DemoBlock :title="customImage">
      <glue-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="description"
      />
    </DemoBlock>

    <DemoBlock :title="bottomContent">
      <glue-empty :description="description">
        <glue-button round type="danger" class="bottom-button">
          {{ button }}
        </glue-button>
      </glue-empty>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      button: "按钮",
      basicUsage: "基础用法",
      error: "通用错误",
      search: "搜索提示",
      network: "网络错误",
      imageType: "图片类型",
      description: "描述文字",
      customImage: "自定义图片",
      bottomContent: "底部内容",
      active: "error",
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-empty {
  background: @white;

  .custom-image {
    .glue-empty__image {
      width: 90px;
      height: 90px;
    }
  }

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
