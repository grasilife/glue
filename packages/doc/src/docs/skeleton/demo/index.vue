<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-skeleton titleState :row="3"></glue-skeleton>
    </DemoBlock>

    <DemoBlock :title="showAvatar">
      <glue-skeleton titleState avatar :row="3" />
    </DemoBlock>

    <DemoBlock :title="showChildren">
      <glue-switch v-model="show" size="24px" />
      <glue-skeleton titleState avatar :row="3" :loading="!show">
        <div class="demo-preview">
          <img src="https://img.yzcdn.cn/vant/logo.png" />
          <div class="demo-content">
            <h3>{{ title }}</h3>
            <p>{{ desc }}</p>
          </div>
        </div>
      </glue-skeleton>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      showAvatar: "显示头像",
      showChildren: "显示子组件",
      title: "关于 Vant",
      desc: "Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。",
      show: false
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-skeleton {
  background-color: @white;

  .van-switch {
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
