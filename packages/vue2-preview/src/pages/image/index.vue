<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <glue-row>
        <glue-image width="100" height="100" :src="image" />
      </glue-row>
    </glue-doc-block>

    <glue-doc-block :gtitle="fitMode">
      <glue-row gutter="10">
        <glue-col v-for="fit in fits" span="8" :key="fit">
          <glue-image :fit="fit" width="100%" height="27vw" :src="image" />
          <div class="text">{{ fit }}</div>
        </glue-col>
      </glue-row>
    </glue-doc-block>

    <glue-doc-block :gtitle="round">
      <glue-row gutter="10">
        <glue-col v-for="fit in fits" span="8" :key="fit">
          <glue-image
            round
            :fit="fit"
            width="100%"
            height="27vw"
            :src="image"
          />
          <div class="text">{{ fit }}</div>
        </glue-col>
      </glue-row>
    </glue-doc-block>
    <glue-doc-block :gtitle="lazy">
      <glue-row gutter="10">
        <glue-col v-for="fit in fits" span="8" :key="fit">
          <glue-image width="100" height="100" lazy-load :src="image" />
          <div class="text">{{ lazy }}</div>
        </glue-col>
      </glue-row>
    </glue-doc-block>

    <glue-doc-block :gtitle="loading">
      <glue-row gutter="10">
        <glue-col span="8">
          <glue-image width="100%" height="27vw" />
          <div class="text">{{ defaultTip }}</div>
        </glue-col>

        <glue-col span="8">
          <glue-image width="100%" height="27vw" loading-icon="#slot">
            <div slot="loadingIcon">
              <glue-loading type="spinner" size="20" />
            </div>
          </glue-image>
          <div class="text">{{ customTip }}</div>
        </glue-col>
      </glue-row>
    </glue-doc-block>

    <glue-doc-block :gtitle="error">
      <glue-row gutter="10">
        <glue-col span="8">
          <glue-image width="100%" height="27vw" src="x" />
          <div class="text">{{ defaultTip }}</div>
        </glue-col>

        <glue-col span="8">
          <glue-image width="100%" height="27vw" src="x" error-icon="#slot">
            <div slot="errorIcon">{{ loadFail }}</div>
          </glue-image>
          <div class="text">{{ customTip }}</div>
        </glue-col>
      </glue-row>
    </glue-doc-block>
  </glue-doc-section>
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
      fits: ["contain", "cover", "fill", "none", "scale-down"],
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-image {
  overflow-x: hidden;
  background-color: @white;

  glue-row {
    padding: 0 @padding-md;
  }

  glue-col {
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
