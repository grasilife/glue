<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-empty :description="description" />
    </demo-block>

    <demo-block :title="imageType">
      <van-tabs v-model="active">
        <van-tab name="error" :title="error">
          <van-empty image="error" :description="description" />
        </van-tab>
        <van-tab name="network" :title="network">
          <van-empty image="network" :description="description" />
        </van-tab>
        <van-tab name="search" :title="search">
          <van-empty image="search" :description="description" />
        </van-tab>
      </van-tabs>
    </demo-block>

    <demo-block :title="customImage">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="description"
      />
    </demo-block>

    <demo-block :title="bottomContent">
      <van-empty :description="description">
        <van-button round type="danger" class="bottom-button">
          {{ button }}
        </van-button>
      </van-empty>
    </demo-block>
  </demo-section>
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
@import "../../../common/style/var2.less";

.demo-empty {
  background: @white;

  .custom-image {
    .van-empty__image {
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
