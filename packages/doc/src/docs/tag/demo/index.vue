<template>
  <demo-section>
    <demo-block card :title="basicUsage">
      <van-cell :title="`primary ${type}`">
        <van-tag type="primary">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="`success ${type}`">
        <van-tag type="success">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="`danger ${type}`">
        <van-tag type="danger">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="`warning ${type}`">
        <van-tag type="warning">{{ tag }}</van-tag>
      </van-cell>
    </demo-block>

    <demo-block card :title="tagStyle">
      <van-cell :title="plain">
        <van-tag plain type="primary">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="round">
        <van-tag round type="primary">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="mark">
        <van-tag mark type="primary">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="closeable">
        <van-tag
          v-if="show"
          size="medium"
          closeable
          type="primary"
          @close="close"
        >
          {{ tag }}
        </van-tag>
      </van-cell>
    </demo-block>

    <demo-block card :title="customSize">
      <van-cell :title="smallSize">
        <van-tag type="primary">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="mediumSize">
        <van-tag type="primary" size="medium">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="largeSize">
        <van-tag type="primary" size="large">{{ tag }}</van-tag>
      </van-cell>
    </demo-block>

    <demo-block card :title="customColor">
      <van-cell :title="customBgColor">
        <van-tag color="#7232dd">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="customTextColor">
        <van-tag color="#ffe1e1" text-color="#ad0000">{{ tag }}</van-tag>
      </van-cell>
      <van-cell :title="customPlainColor">
        <van-tag color="#7232dd" plain>{{ tag }}</van-tag>
      </van-cell>
    </demo-block>
  </demo-section>
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
      show: true,
    };
  },

  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-tag {
  .van-tag + .van-tag {
    margin-left: @padding-xs;
  }
}
</style>
