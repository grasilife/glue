<template>
  <demo-section>
    <demo-block :title="type">
      <van-loading />
      <van-loading type="spinner" />
    </demo-block>

    <demo-block :title="color">
      <van-loading color="#1989fa" />
      <van-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block :title="size">
      <van-loading size="24" />
      <van-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="text">
      <van-loading size="24px">
        {{ loading }}
      </van-loading>
    </demo-block>

    <demo-block :title="vertical">
      <van-loading size="24px" vertical>
        {{ loading }}
      </van-loading>
    </demo-block>

    <demo-block :title="textColor">
      <van-loading size="24px" vertical color="#0094ff">
        {{ loading }}
      </van-loading>
      <van-loading size="24px" vertical text-color="#0094ff">
        {{ loading }}
      </van-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      loading: "加载中",
      type: "加载类型",
      text: "加载文案",
      size: "自定义大小",
      color: "自定义颜色",
      vertical: "垂直排列",
      textColor: "自定义文本颜色",
    };
  },
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-loading {
  background: @white;

  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
