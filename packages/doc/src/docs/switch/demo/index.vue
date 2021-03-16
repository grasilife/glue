<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-switch v-model="checked" />
    </DemoBlock>

    <DemoBlock :title="disabled">
      <van-switch v-model="checked" disabled />
    </DemoBlock>

    <DemoBlock :title="loadingStatus">
      <van-switch v-model="checked" loading />
    </DemoBlock>

    <DemoBlock :title="customSize">
      <van-switch v-model="checked2" size="24px" />
    </DemoBlock>

    <DemoBlock :title="customColor">
      <van-switch v-model="checked3" active-color="#ee0a24" inactive-color="#dcdee0" />
    </DemoBlock>

    <DemoBlock :title="asyncControl">
      <van-switch :value="checked4" @input="onInput" />
    </DemoBlock>

    <DemoBlock :title="withCell">
      <van-cell center :title="title">
        <template #right-icon>
          <van-switch v-model="checked5" size="24" />
        </template>
      </van-cell>
    </DemoBlock>
  </DemoSection>
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
