<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-switch :value="checked" @glueChange="checked = !checked" />
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-switch :value="checked" disabled @glueChange="checked = !checked" />
    </DemoBlock>

    <DemoBlock :title="loadingStatus">
      <glue-switch :value="checked" loading @glueChange="checked = !checked" />
    </DemoBlock>

    <DemoBlock :title="customSize">
      <glue-switch
        :value="checked2"
        size="24px"
        @glueChange="checked2 = !checked2"
      />
    </DemoBlock>

    <DemoBlock :title="customColor">
      <glue-switch
        :value="checked3"
        active-color="#ee0a24"
        inactive-color="#dcdee0"
        @glueChange="checked3 = !checked3"
      />
    </DemoBlock>

    <DemoBlock :title="withCell">
      <glue-cell center :title="title" right-icon="#slot">
        <div slot="rightIcon">
          <glue-switch
            :value="checked5"
            size="24"
            @glueChange="checked5 = !checked5"
          />
        </div>
      </glue-cell>
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
      checked6: false,
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog
        .confirm({
          title: this.title,
          message: this.message,
        })
        .then(() => {
          this.checked4 = checked;
        });
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var2.less";

.demo-switch {
  .glue-switch {
    margin-left: @padding-md;
  }
}
</style>
