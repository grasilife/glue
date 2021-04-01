<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-row>
        <glue-image width="100" height="100" :src="image" />
      </van-row>
    </DemoBlock>

    <DemoBlock :title="fitMode">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <glue-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </DemoBlock>

    <DemoBlock :title="round">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <glue-image round :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </van-col>
      </van-row>
    </DemoBlock>
    <DemoBlock :title="lazy">
      <van-row gutter="20">
        <van-col v-for="fit in fits" span="8" :key="fit">
          <glue-image width="100" height="100" lazy-load :src="image" />
          <div class="text">{{ lazy }}</div>
        </van-col>
      </van-row>
    </DemoBlock>

    <DemoBlock :title="loading">
      <van-row gutter="20">
        <van-col span="8">
          <glue-image width="100%" height="27vw" />
          <div class="text">{{ defaultTip }}</div>
        </van-col>

        <van-col span="8">
          <glue-image width="100%" height="27vw" loading-icon="#slot">
            <div slot="loadingIcon">
              <glue-loading type="spinner" size="20" />
            </div>
          </glue-image>
          <div class="text">{{ customTip }}</div>
        </van-col>
      </van-row>
    </DemoBlock>

    <DemoBlock :title="error">
      <van-row gutter="20">
        <van-col span="8">
          <glue-image width="100%" height="27vw" src="x" />
          <div class="text">{{ defaultTip }}</div>
        </van-col>

        <van-col span="8">
          <glue-image width="100%" height="27vw" src="x" error-icon="#slot">
            <div slot="errorIcon">{{ loadFail }}</div>
          </glue-image>
          <div class="text">{{ customTip }}</div>
        </van-col>
      </van-row>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      fitMode: "填充模式",
      round: "圆形图片",
      lazy: "图片懒加载",
      loading: "加载中提示",
      error: "加载失败提示",
      defaultTip: "默认提示",
      customTip: "自定义提示",
      loadFail: "加载失败",
      image: "https://img.yzcdn.cn/vant/cat.jpeg",
      fits: ["contain", "cover", "fill", "none", "scale-down"]
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  .van-row {
    padding: 0 @padding-md;
  }

  .van-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
