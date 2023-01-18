<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-rate :vlaue="value1"></glue-rate>
    </DemoBlock>

    <DemoBlock :title="customIcon">
      <glue-rate :vlaue="value2" icon="like" void-icon="like-o" />
    </DemoBlock>

    <DemoBlock :title="customStyle">
      <glue-rate :vlaue="value3" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
    </DemoBlock>

    <DemoBlock :title="halfStar">
      <glue-rate :vlaue="value4" :size="25" allow-half void-icon="star" void-color="#eee" />
    </DemoBlock>

    <DemoBlock :title="customCount">
      <glue-rate :vlaue="value5" :count="6" />
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-rate :vlaue="value6" disabled />
    </DemoBlock>

    <DemoBlock :title="readonly">
      <glue-rate :vlaue="value6" readonly />
    </DemoBlock>

    <DemoBlock :title="changeEvent">
      <glue-rate :vlaue="value7" @glueChange="onChange" />
    </DemoBlock>
  </DemoSection>
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
      console.log(value.detail, "value");
      this.value7 = value.detail;
      this.$toast(this.toastContent(this.value7));
    }
  }
};
</script>

<style lang="less">
@import "~/common/style/var2.less";

.demo-rate {
  padding-bottom: 20px;
  background-color: #fff;

  glue-rate {
    margin-left: @padding-md;
  }
}
</style>
