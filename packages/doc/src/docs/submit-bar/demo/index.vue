<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-submit-bar :price="3050" :button-text="submit" @submit="onClickButton" />
    </demo-block>

    <demo-block :title="disabled">
      <van-submit-bar
        disabled
        :price="3050"
        :button-text="submit"
        :tip="tip1"
        tip-icon="info-o"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="loadingStatus">
      <van-submit-bar loading :price="3050" :button-text="submit" @submit="onClickButton" />
    </demo-block>

    <demo-block :title="advancedUsage">
      <van-submit-bar :price="3050" :button-text="submit" @submit="onClickButton">
        <van-checkbox v-model="checked">{{ check }}</van-checkbox>
        <template #tip>
          {{ tip2 }}
          <span class="edit-address" @click="onClickLink">
            {{ tip3 }}
          </span>
        </template>
      </van-submit-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      advancedUsage: "高级用法",
      disabled: "禁用",
      loadingStatus: "加载状态",
      basicUsage: "基础用法",
      submit: "提交订单",
      tip1: "你的收货地址不支持同城送, 我们已为你推荐快递",
      tip2: "你的收货地址不支持同城送, ",
      tip3: "修改地址",
      check: "全选",
      clickButton: "点击按钮",
      clickLink: "修改地址",
      checked: true
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.clickButton);
    },
    onClickLink() {
      this.$toast(this.clickLink);
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-submit-bar {
  .van-submit-bar {
    position: relative;
    padding-bottom: 0;
  }

  .edit-address {
    color: @blue;
  }

  .van-checkbox {
    margin-right: @padding-sm;
  }
}
</style>
