<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-sticky>
        <van-button type="primary" style="margin-left: 15px;">
          {{ basicUsage }}
        </van-button>
      </van-sticky>
    </DemoBlock>

    <DemoBlock :title="offsetTop">
      <van-sticky :offset-top="50">
        <van-button type="info" style="margin-left: 115px;">
          {{ offsetTop }}
        </van-button>
      </van-sticky>
    </DemoBlock>

    <DemoBlock :title="setContainer">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <van-sticky :container="container">
          <van-button type="warning" style="margin-left: 215px;">
            {{ setContainer }}
          </van-button>
        </van-sticky>
      </div>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      offsetTop: "吸顶距离",
      setContainer: "指定容器",
      container: null
    };
  },

  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-sticky {
  height: 200vh;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
