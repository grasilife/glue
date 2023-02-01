<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block card :gtitle="basicUsage">
      <glue-cell is-link :gtitle="basicUsage" @click="show.basic = true" />
      <glue-cell is-link :gtitle="showCancel" @click="show.cancel = true" />
      <glue-cell
        is-link
        :gtitle="showDescription"
        @click="show.description = true"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="optionStatus">
      <glue-cell is-link :gtitle="optionStatus" @click="show.status = true" />
    </glue-doc-block>

    <glue-doc-block card :gtitle="customPanel">
      <glue-cell is-link :gtitle="customPanel" @click="show.title = true" />
    </glue-doc-block>

    <glue-action-sheet
      :show="show.basic"
      :actions.prop="simpleActions"
      @glueSelect="onSelect"
      @glueClose="glueClose"
    />

    <glue-action-sheet
      :show="show.cancel"
      :actions.prop="simpleActions"
      close-on-click-action
      :cancel-text="cancel"
      @glueClose="glueClose"
    />

    <glue-action-sheet
      :show="show.description"
      :actions.prop="actionsWithDescription"
      close-on-click-action
      :cancel-text="cancel"
      :description="description"
    />

    <glue-action-sheet
      :show="show.status"
      close-on-click-action
      :actions.prop="statusActions"
      :cancel-text="cancel"
    />

    <glue-action-sheet :show="show.title" :gtitle="title">
      <div class="demo-action-sheet-content">{{ content }}</div>
    </glue-action-sheet>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
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
      simpleActions: [
        { name: "选项一" },
        { name: "选项二" },
        { name: "选项三" },
      ],
      statusActions: [
        { name: "选项一", color: "#ee0a24" },
        { name: "选项二", disabled: true },
        { name: "选项三", subname: "描述信息", loading: true },
      ],
      actionsWithDescription: [
        { name: "选项一" },
        { name: "选项二" },
        { name: "选项三", subname: "描述信息" },
      ],
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
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },
    glueClose() {
      this.show.basic = false;
      console.log(this.show.basic, "this.show.basic");
      this.$toast(this.cancel);
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-action-sheet {
  &-content {
    padding: @padding-md @padding-md @padding-md * 10;
  }
}
</style>
