<template>
  <DemoSection>
    <DemoBlock :title="type">
      <glue-button type="primary">{{ primary }}</glue-button>
      <glue-button type="success">{{ success }}</glue-button>
      <glue-button type="default">{{ defaultType }}</glue-button>
      <glue-button type="warning">{{ warning }}</glue-button>
      <glue-button type="danger">{{ danger }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="plain">
      <glue-button plain type="primary">{{ plain }}</glue-button>
      <glue-button plain type="success">{{ plain }}</glue-button>
      <!-- <van-button plain type="primary" :text="plain" />
      <van-button plain type="info" :text="plain" /> -->
    </DemoBlock>

    <DemoBlock :title="hairline">
      <glue-button plain hairline type="primary">{{ hairlineButton }}</glue-button>
      <glue-button plain hairline type="success">{{ hairlineButton }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-button disabled type="primary" :text="disabled"></glue-button>
      <glue-button disabled type="success" :text="disabled"></glue-button>
    </DemoBlock>

    <DemoBlock :title="loadingStatus">
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading :loading-text="loadingText" type="info" />
    </DemoBlock>

    <DemoBlock :title="shape">
      <van-button type="primary" square :text="square" />
      <van-button type="info" round :text="round" />
    </DemoBlock>

    <DemoBlock :title="icon">
      <van-button type="primary" icon="plus" />
      <van-button type="primary" icon="plus" :text="button" />
      <van-button plain type="info" icon="https://img.yzcdn.cn/vant/user-active.png" :text="button" />
    </DemoBlock>

    <DemoBlock :title="size">
      <van-button type="primary" size="large">{{ large }}</van-button>
      <van-button type="primary" size="normal">{{ normal }}</van-button>
      <van-button type="primary" size="small">{{ small }}</van-button>
      <van-button type="primary" size="mini">{{ mini }}</van-button>
    </DemoBlock>

    <DemoBlock :title="blockElement">
      <van-button type="primary" block>{{ blockElement }}</van-button>
    </DemoBlock>

    <DemoBlock :title="router">
      <van-button :text="urlRoute" type="primary" url="/vant/mobile.html" />
      <van-button :text="vueRoute" type="primary" to="index" />
    </DemoBlock>

    <DemoBlock :title="customColor">
      <van-button color="#7232dd" :text="pure" />
      <van-button plain color="#7232dd" :text="pure" />
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" :text="gradient" />
    </DemoBlock>
  </DemoSection>
</template>

<script>
import DemoBlock from "../../../mobile//components/DemoBlock";
import DemoSection from "../../../mobile//components/DemoSection";
export default {
  components: {
    DemoBlock,
    DemoSection
  },
  data() {
    return {
      loadingStatus: "加载状态",
      button: "按钮",
      disabled: "禁用",
      type: "按钮类型",
      size: "按钮尺寸",
      icon: "图标按钮",
      loading: "加载状态",
      shape: "按钮形状",
      defaultType: "默认按钮",
      primary: "主要按钮",
      success: "成功按钮",
      danger: "危险按钮",
      warning: "警告按钮",
      large: "大号按钮",
      normal: "普通按钮",
      small: "小型按钮",
      mini: "迷你按钮",
      plain: "朴素按钮",
      square: "方形按钮",
      round: "圆形按钮",
      hairline: "细边框",
      hairlineButton: "细边框按钮",
      loadingText: "加载中...",
      router: "页面导航",
      urlRoute: "URL 跳转",
      vueRoute: "路由跳转",
      customColor: "自定义颜色",
      pure: "单色按钮",
      gradient: "渐变色按钮",
      blockElement: "块级元素"
    };
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../../common/style/var2.less";
.glue-button {
  margin-bottom: @padding-md;
  margin-right: @padding-md;
}
.van-doc-demo-block {
  padding: 0 @padding-md;
}
</style>
