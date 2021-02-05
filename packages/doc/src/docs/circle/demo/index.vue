<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-circle
        v-model="currentRate1"
        :rate="rate"
        :speed="100"
        :text="currentRate1.toFixed(0) + '%'"
      />
    </demo-block>

    <demo-block :title="customStyle">
      <van-circle
        v-model="currentRate3"
        :rate="rate"
        :speed="100"
        :stroke-width="60"
        :text="customWidth"
      />

      <van-circle
        v-model="currentRate3"
        color="#ee0a24"
        :rate="rate"
        layer-color="#ebedf0"
        :speed="100"
        :text="customColor"
      />

      <van-circle
        v-model="currentRate2"
        :rate="rate"
        :speed="100"
        :color="gradientColor"
        :text="gradient"
      />

      <van-circle
        v-model="currentRate4"
        color="#07c160"
        :rate="rate"
        :speed="100"
        :clockwise="false"
        :text="counterClockwise"
        style="margin-top: 15px;"
      />

      <van-circle
        v-model="currentRate4"
        color="#7232dd"
        :rate="rate"
        :speed="100"
        size="120px"
        :clockwise="false"
        :text="customSize"
        style="margin-top: 15px;"
      />
    </demo-block>

    <div style="margin-top: 15px;">
      <van-button :text="addText" type="primary" size="small" @click="add" />
      <van-button
        :text="decreaseText"
        type="danger"
        size="small"
        @click="reduce"
      />
    </div>
  </demo-section>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);

export default {
  data() {
    return {
      addText: "增加",
      decreaseText: "减少",
      basicUsage: "基础用法",
      gradient: "渐变色",
      customSize: "大小定制",
      customStyle: "样式定制",
      customColor: "颜色定制",
      customWidth: "宽度定制",
      counterClockwise: "逆时针",
      rate: 70,
      currentRate1: 70,
      currentRate2: 70,
      currentRate3: 70,
      currentRate4: 70,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  },

  methods: {
    add() {
      this.rate = format(this.rate + 20);
    },

    reduce() {
      this.rate = format(this.rate - 20);
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-circle {
  .van-circle {
    margin-left: @padding-md;
  }

  .van-button {
    margin: @padding-md 0 0 10px;

    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
