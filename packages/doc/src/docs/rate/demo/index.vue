<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-rate :model-value="value1"></glue-rate>
    </demo-block>

    <DemoBlock :title="customIcon">
      <glue-rate :model-value="value2" icon="like" void-icon="like-o" />
    </demo-block>

    <DemoBlock :title="customStyle">
      <glue-rate :model-value="value3" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
    </demo-block>

    <DemoBlock :title="halfStar">
      <glue-rate :model-value="value4" :size="25" allow-half void-icon="star" void-color="#eee" />
    </demo-block>

    <DemoBlock :title="customCount">
      <glue-rate :model-value="value5" :count="6" />
    </demo-block>

    <DemoBlock :title="disabled">
      <glue-rate :model-value="value6" disabled />
    </demo-block>

    <DemoBlock :title="readonly">
      <glue-rate :model-value="value6" readonly />
    </demo-block>

    <DemoBlock :title="changeEvent">
      <glue-rate :model-value="value7" @change="onChange" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      halfStar: "半星",
      disabled: "禁用状态",
      customIcon: "自定义图标",
      customStyle: "自定义样式",
      customCount: "自定义数量",
      readonly: "只读状态",
      changeEvent: "监听 change 事件",
      toastContent: value => `当前值：${value}`,
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 3,
      value7: 2
    };
  },

  methods: {
    onChange(value) {
      this.value7 = value;
      this.$toast(this.toastContent(value));
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-rate {
  padding-bottom: 20px;
  background-color: #fff;

  glue-rate {
    margin-left: @padding-md;
  }
}
</style>
