<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-circle
        :current-rate="currentRate1"
        :rate="rate"
        :speed="100"
        @glueChange="change"
        :text="currentRate1.toFixed(0) + '%'"
      ></glue-circle>
    </glue-doc-block>

    <glue-doc-block :gtitle="customStyle">
      <glue-circle
        :current-rate="currentRate3"
        :rate="rate"
        :speed="100"
        :stroke-width="60"
        :text="customWidth"
      ></glue-circle>

      <glue-circle
        :current-rate="currentRate3"
        line-color="#ee0a24"
        :rate="rate"
        layer-color="#ebedf0"
        :speed="100"
        :text="customColor"
      />

      <glue-circle
        :current-rate="currentRate2"
        :rate="rate"
        :speed="100"
        :line-color="gradientColor"
        :text="gradient"
      ></glue-circle>

      <glue-circle
        :current-rate="currentRate4"
        line-color="#07c160"
        :rate="rate"
        :speed="100"
        :clockwise="true"
        :text="counterClockwise"
        style="margin-top: 15px"
      />

      <glue-circle
        :current-rate="currentRate4"
        line-color="#7232dd"
        :rate="rate"
        :speed="100"
        size="120px"
        :clockwise="true"
        :text="customSize"
        style="margin-top: 15px"
      ></glue-circle>
    </glue-doc-block>

    <div style="margin-top: 15px">
      <glue-button type="primary" size="small" @click="add">{{
        addText
      }}</glue-button>
      <glue-button type="danger" size="small" @click="reduce">{{
        decreaseText
      }}</glue-button>
    </div>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
const format = (rate) => Math.min(Math.max(rate, 0), 100);

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
        "100%": "#6149f6",
      },
    };
  },

  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    add() {
      this.rate = format(this.rate + 20);
    },
    change(value) {
      console.log(value, "value");
      this.currentRate1 = value.detail;
    },
    reduce() {
      this.rate = format(this.rate - 20);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-circle {
  .glue-circle {
    margin-left: @padding-md;
  }

  .glue-button {
    margin: @padding-md 0 0 10px;

    &:first-of-type {
      margin-left: @padding-md;
    }
  }
}
</style>
