<template>
  <DemoSection>
    <glue-grid :column-num="2" :border="false">
      <glue-grid-item custom="#slot">
        <h3 class="demo-sidebar-gtitle">{{ basicUsage }}</h3>
        <glue-sidebar :modelValue.prop="activeKey1">
          <glue-sidebar-item :gtitle="gtitle" />
          <glue-sidebar-item :gtitle="gtitle" />
          <glue-sidebar-item :gtitle="gtitle" />
        </glue-sidebar>
      </glue-grid-item>

      <glue-grid-item custom="#slot">
        <h3 class="demo-sidebar-gtitle">{{ showBadge }}</h3>
        <glue-sidebar :modelValue.prop="activeKey2">
          <glue-sidebar-item :gtitle="gtitle" dot />
          <glue-sidebar-item :gtitle="gtitle" badge="5" />
          <glue-sidebar-item :gtitle="gtitle" badge="99+" />
        </glue-sidebar>
      </glue-grid-item>

      <glue-grid-item custom="#slot">
        <h3 class="demo-sidebar-gtitle">{{ disabled }}</h3>
        <glue-sidebar :modelValue.prop="activeKey3">
          <glue-sidebar-item :gtitle="gtitle" />
          <glue-sidebar-item :gtitle="gtitle" disabled />
          <glue-sidebar-item :gtitle="gtitle" />
        </glue-sidebar>
      </glue-grid-item>

      <glue-grid-item custom="#slot">
        <h3 class="demo-sidebar-gtitle">{{ changeEvent }}</h3>
        <glue-sidebar :modelValue.prop="activeKey4" @glueChange="onChange">
          <glue-sidebar-item :gtitle="gtitle + 1" />
          <glue-sidebar-item :gtitle="gtitle + 2" />
          <glue-sidebar-item :gtitle="gtitle + 3" />
        </glue-sidebar>
      </glue-grid-item>
    </glue-grid>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      gtitle: "标签名",
      showBadge: "徽标提示",
      disabled: "禁用选项",
      changeEvent: "监听切换事件",
      selectTip: "你切换到了",
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0,
    };
  },

  methods: {
    onChange(e) {
      console.log(e, "jiajiaji");
      this.$notify({
        type: "primary",
        message: `${this.selectTip} ${this.gtitle}${e.detail + 1}`,
      });
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var2.less";

.demo-sidebar {
  background-color: @white;

  .glue-sidebar {
    margin-left: @padding-md;
  }

  &-gtitle {
    margin-bottom: 16px;
    color: @gray-6;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
