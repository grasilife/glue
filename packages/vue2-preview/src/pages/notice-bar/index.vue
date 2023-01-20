<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-notice-bar :text="text" scrollable left-icon="volume-o" />
    </glue-doc-block>

    <glue-doc-block :gtitle="scrollable">
      <glue-notice-bar scrollable :text="shortText" />
      <glue-notice-bar :scrollable="false" :text="text" />
    </glue-doc-block>

    <glue-doc-block :gtitle="wrapable">
      <glue-notice-bar wrapable :scrollable="false" :text="text" />
    </glue-doc-block>

    <glue-doc-block :gtitle="mode">
      <glue-notice-bar mode="closeable" :text="shortText" />
      <glue-notice-bar mode="link" :text="shortText" />
    </glue-doc-block>

    <glue-doc-block :gtitle="customStyle">
      <glue-notice-bar
        :text="shortText"
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
      />
    </glue-doc-block>

    <!-- <glue-doc-block :gtitle="verticalScroll">
      <glue-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>{{ content }} 1</van-swipe-item>
          <van-swipe-item>{{ content }} 2</van-swipe-item>
          <van-swipe-item>{{ content }} 3</van-swipe-item>
        </van-swipe>
      </glue-notice-bar>
    </glue-doc-block> -->
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      basicUsage: "基础用法",
      text: "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",
      mode: "通知栏模式",
      content: "内容",
      wrapable: "多行展示",
      shortText: "技术是开发它的人的共同灵魂。",
      scrollable: "滚动播放",
      customStyle: "自定义样式",
      verticalScroll: "垂直滚动",
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-notice-bar {
  background: @white;

  .glue-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .van-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
