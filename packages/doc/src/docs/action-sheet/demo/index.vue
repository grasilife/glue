<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell is-link :title="basicUsage" @click="show.basic = true" />
      <van-cell is-link :title="showCancel" @click="show.cancel = true" />
      <van-cell
        is-link
        :title="showDescription"
        @click="show.description = true"
      />
    </DemoBlock>

    <DemoBlock card :title="optionStatus">
      <van-cell is-link :title="optionStatus" @click="show.status = true" />
    </DemoBlock>

    <DemoBlock card :title="customPanel">
      <van-cell is-link :title="customPanel" @click="show.title = true" />
    </DemoBlock>

    <van-action-sheet
      v-model="show.basic"
      :actions="simpleActions"
      @select="onSelect"
    />

    <van-action-sheet
      v-model="show.cancel"
      :actions="simpleActions"
      close-on-click-action
      :cancel-text="cancel"
      @cancel="onCancel"
    />

    <van-action-sheet
      v-model="show.description"
      :actions="actionsWithDescription"
      close-on-click-action
      :cancel-text="cancel"
      :description="description"
    />

    <van-action-sheet
      v-model="show.status"
      close-on-click-action
      :actions="statusActions"
      :cancel-text="cancel"
    />

    <van-action-sheet v-model="show.title" :title="title">
      <div class="demo-action-sheet-content">{{ content }}</div>
    </van-action-sheet>
  </DemoSection>
</template>

<script>
import { RED } from "../../../common/constant";

export default {
  data() {
    return {
      basicUsage: "基础用法",
      cancel: "取消",
      title: "自定义面板",
      content: "内容",
      option1: "选项一",
      option2: "选项二",
      option3: "选项三",
      subname: "描述信息",
      showCancel: "展示取消按钮",
      buttonText: "弹出菜单",
      customPanel: "自定义面板",
      description: "这是一段描述信息",
      optionStatus: "选项状态",
      coloredOption: "着色选项",
      disabledOption: "禁用选项",
      showDescription: "展示描述信息",
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false,
      },
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.option1 },
        { name: this.option2 },
        { name: this.option3 },
      ];
    },

    actionsWithDescription() {
      return [
        { name: this.option1 },
        { name: this.option2 },
        { name: this.option3, subname: this.subname },
      ];
    },

    statusActions() {
      return [
        { name: this.coloredOption, color: RED },
        { name: this.disabledOption, disabled: true },
        { loading: true },
      ];
    },
  },

  methods: {
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast(this.cancel);
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../../../common/style/var2.less";

.demo-action-sheet {
  &-content {
    padding: @padding-md @padding-md @padding-md * 10;
  }
}
</style>
