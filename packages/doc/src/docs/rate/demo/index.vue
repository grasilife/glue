<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-rate v-model="value1" />
    </demo-block>

    <demo-block :title="customIcon">
      <van-rate v-model="value2" icon="like" void-icon="like-o" />
    </demo-block>

    <demo-block :title="customStyle">
      <van-rate v-model="value3" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
    </demo-block>

    <demo-block :title="halfStar">
      <van-rate v-model="value4" :size="25" allow-half void-icon="star" void-color="#eee" />
    </demo-block>

    <demo-block :title="customCount">
      <van-rate v-model="value5" :count="6" />
    </demo-block>

    <demo-block :title="disabled">
      <van-rate v-model="value6" disabled />
    </demo-block>

    <demo-block :title="readonly">
      <van-rate v-model="value6" readonly />
    </demo-block>

    <demo-block :title="changeEvent">
      <van-rate v-model="value7" @change="onChange" />
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

  .van-rate {
    margin-left: @padding-md;
  }
}
</style>
