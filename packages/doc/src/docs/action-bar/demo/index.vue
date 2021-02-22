<template>
  <DemoSection>
    <demo-block :title="basicUsage">
      <glue-action-bar>
        <glue-action-bar-icon icon="chat-o" :text="icon1" @click="onClickIcon">{{ icon1 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="cart-o" :text="icon2" @click="onClickIcon">{{ icon2 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="shop-o" :text="icon3" @click="onClickIcon">{{ icon3 }}</glue-action-bar-icon>
        <glue-action-bar-button type="danger" :text="button2" @click="onClickButton">{{
          button2
        }}</glue-action-bar-button>
      </glue-action-bar>
    </demo-block>

    <demo-block :title="iconBadge">
      <glue-action-bar>
        <glue-action-bar-icon icon="chat-o" dot :text="icon1">{{ icon1 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="cart-o" badge="5" :text="icon2">{{ icon2 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="shop-o" badge="12" :text="icon3">{{ icon3 }}</glue-action-bar-icon>
        <glue-action-bar-button type="warning" :text="button1">{{ button1 }}</glue-action-bar-button>
        <glue-action-bar-button type="danger" :text="button2">{{ button2 }}</glue-action-bar-button>
      </glue-action-bar>
    </demo-block>

    <demo-block :title="customIconColor">
      <glue-action-bar>
        <glue-action-bar-icon icon="chat-o" :text="icon1" color="#ee0a24">{{ icon1 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="cart-o" :text="icon2">{{ icon2 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="star" :text="collected" color="#ff5000">{{ collected }}</glue-action-bar-icon>
        <glue-action-bar-button type="warning" :text="button1">{{ button1 }}</glue-action-bar-button>
        <glue-action-bar-button type="danger" :text="button2">{{ button2 }}</glue-action-bar-button>
      </glue-action-bar>
    </demo-block>

    <demo-block :title="customButtonColor">
      <glue-action-bar>
        <glue-action-bar-icon icon="chat-o" :text="icon1">{{ icon1 }}</glue-action-bar-icon>
        <glue-action-bar-icon icon="cart-o" :text="icon2">{{ icon2 }}</glue-action-bar-icon>
        <glue-action-bar-button color="#be99ff" type="warning" :text="button1">{{ button1 }}</glue-action-bar-button>
        <glue-action-bar-button color="#7232dd" type="danger" :text="button2">{{ button2 }}</glue-action-bar-button>
      </glue-action-bar>
    </demo-block>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      icon1: "客服",
      icon2: "购物车",
      icon3: "店铺",
      button1: "加入购物车",
      button2: "立即购买",
      iconBadge: "徽标提示",
      collected: "已收藏",
      clickIcon: "点击图标",
      clickButton: "点击按钮",
      customIconColor: "自定义图标颜色",
      customButtonColor: "自定义按钮颜色"
    };
  },
  methods: {
    onClickIcon() {},
    onClickButton() {}
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.demo-action-bar {
  .glue-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
