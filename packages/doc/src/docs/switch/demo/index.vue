<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-switch v-model="checked" />
    </demo-block>

    <demo-block :title="disabled">
      <van-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="loadingStatus">
      <van-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="customSize">
      <van-switch v-model="checked2" size="24px" />
    </demo-block>

    <demo-block :title="customColor">
      <van-switch v-model="checked3" active-color="#ee0a24" inactive-color="#dcdee0" />
    </demo-block>

    <demo-block :title="asyncControl">
      <van-switch :value="checked4" @input="onInput" />
    </demo-block>

    <demo-block :title="withCell">
      <van-cell center :title="title">
        <template #right-icon>
          <van-switch v-model="checked5" size="24" />
        </template>
      </van-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      disabled: "禁用",
      loadingStatus: "加载状态",
      basicUsage: "基础用法",
      title: "标题",
      confirm: "提醒",
      message: "是否切换开关？",
      withCell: "搭配单元格使用",
      customSize: "自定义大小",
      customColor: "自定义颜色",
      asyncControl: "异步控制",
      checked: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: false
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog
        .confirm({
          title: this.title,
          message: this.message
        })
        .then(() => {
          this.checked4 = checked;
        });
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-switch {
  .van-switch {
    margin-left: @padding-md;
  }
}
</style>
