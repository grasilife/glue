<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-notice-bar :text="text" scrollable left-icon="volume-o" />
    </demo-block>

    <demo-block :title="scrollable">
      <van-notice-bar scrollable :text="shortText" />
      <van-notice-bar :scrollable="false" :text="text" />
    </demo-block>

    <demo-block :title="wrapable">
      <van-notice-bar wrapable :scrollable="false" :text="text" />
    </demo-block>

    <demo-block :title="mode">
      <van-notice-bar mode="closeable" :text="shortText" />
      <van-notice-bar mode="link" :text="shortText" />
    </demo-block>

    <demo-block :title="customStyle">
      <van-notice-bar :text="shortText" color="#1989fa" background="#ecf9ff" left-icon="info-o" />
    </demo-block>

    <demo-block :title="verticalScroll">
      <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>{{ content }} 1</van-swipe-item>
          <van-swipe-item>{{ content }} 2</van-swipe-item>
          <van-swipe-item>{{ content }} 3</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </demo-block>
  </demo-section>
</template>

<script>
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
      verticalScroll: "垂直滚动"
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-notice-bar {
  background: @white;

  .van-notice-bar:not(:first-of-type) {
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
