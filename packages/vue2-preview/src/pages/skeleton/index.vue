<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-skeleton title-state :row="3" loading animate-state></glue-skeleton>
    </glue-doc-block>

    <glue-doc-block :gtitle="showAvatar">
      <glue-skeleton title-state avatar :row="3" loading animate-state />
    </glue-doc-block>

    <glue-doc-block :gtitle="showChildren">
      <glue-switch :value="show" size="24px" @glueChange="show = !show" />
      <glue-skeleton title-state avatar :row="3" :loading="!show" animate-state>
        <div class="demo-preview">
          <img src="https://grasilife.github.io/material/logo.svg" />
          <div class="demo-content">
            <h3>{{ title }}</h3>
            <p>{{ desc }}</p>
          </div>
        </div>
      </glue-skeleton>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      basicUsage: "基础用法",
      showAvatar: "显示头像",
      showChildren: "显示子组件",
      title: "关于 Glue",
      desc: "Glue是一个基于web components的组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。",
      show: false,
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-skeleton {
  background-color: @white;

  glue-switch {
    margin: 0 @padding-md @padding-xs;
  }

  .demo-preview {
    display: flex;
    padding: 0 @padding-md;

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: @padding-md;
    }
  }
}
</style>
