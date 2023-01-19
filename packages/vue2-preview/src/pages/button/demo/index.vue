<template>
  <DemoSection>
    <DemoBlock :title="type">
      <div class="demo-button-row">
        <glue-button type="primary">{{ primary }}</glue-button>
        <glue-button type="success">{{ success }}</glue-button>
        <glue-button type="default">{{ defaultType }}</glue-button>
      </div>

      <glue-button type="warning">{{ warning }}</glue-button>
      <glue-button type="danger">{{ danger }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="plain">
      <glue-button plain type="primary">{{ plain }}</glue-button>
      <glue-button plain type="success">{{ plain }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="hairline">
      <glue-button plain hairline type="primary">{{
        hairlineButton
      }}</glue-button>
      <glue-button plain hairline type="success">{{
        hairlineButton
      }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-button disabled type="primary">{{ disabled }}</glue-button>
      <glue-button disabled type="success">{{ disabled }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="loadingStatus">
      <glue-button loading type="primary" />
      <glue-button loading type="primary" loading-type="spinner" />
      <glue-button loading :loading-text="loadingText" type="info" />
    </DemoBlock>

    <DemoBlock :title="shape">
      <glue-button type="primary" square>{{ square }}</glue-button>
      <glue-button type="info" round :text="round">{{ round }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="icon">
      <glue-button type="primary" icon="plus" />
      <glue-button type="primary" icon="plus">{{ button }}</glue-button>
      <glue-button
        plain
        type="info"
        icon="https://img.yzcdn.cn/vant/user-active.png"
        :text="button"
      />
    </DemoBlock>

    <DemoBlock :title="size">
      <div class="demo-button-row">
        <glue-button type="primary" size="large">{{ large }}</glue-button>
      </div>

      <glue-button type="primary" size="normal">{{ normal }}</glue-button>
      <glue-button type="primary" size="small">{{ small }}</glue-button>
      <glue-button type="primary" size="mini">{{ mini }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="blockElement">
      <glue-button type="primary" block>{{ blockElement }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="customColor">
      <glue-button color="#7232dd">{{ pure }}</glue-button>
      <glue-button plain color="#7232dd">{{ pure }}</glue-button>
      <glue-button color="linear-gradient(to right, #ff6034, #ee0a24)">{{
        gradient
      }}</glue-button>
    </DemoBlock>
  </DemoSection>
</template>

<script>
import DemoBlock from "~/components/DemoBlock.vue";
import DemoSection from "~/components/DemoSection.vue";
export default {
  components: {
    DemoBlock,
    DemoSection,
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
      blockElement: "块级元素",
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "@glue/glue-cli/src/common/style/var2.less";
.glue-button {
  margin-right: @padding-md;
}
.van-doc-demo-block {
  padding: 0 @padding-md;
}
.demo-button-row {
  margin-bottom: 12px;
}
</style>
