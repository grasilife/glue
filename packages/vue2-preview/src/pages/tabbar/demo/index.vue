<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-tabbar :model-value.prop="active">
        <glue-tabbar-item icon="home-o" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="search" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="friends-o" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="setting-o" :gtitle="tab"></glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock>

    <DemoBlock :title="matchByName">
      <glue-tabbar :model-value.prop="activeName">
        <glue-tabbar-item name="home" icon="home-o" :gtitle="tab"> </glue-tabbar-item>
        <glue-tabbar-item name="search" icon="search" :gtitle="tab"> </glue-tabbar-item>
        <glue-tabbar-item name="friends" icon="friends-o" :gtitle="tab"> </glue-tabbar-item>
        <glue-tabbar-item name="setting" icon="setting-o" :gtitle="tab"> </glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock>

    <DemoBlock :title="badge">
      <glue-tabbar :model-value.prop="active2">
        <glue-tabbar-item icon="home-o" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="search" dot :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="friends-o" badge="5" :gtitle="tab"> </glue-tabbar-item>
        <glue-tabbar-item icon="setting-o" badge="20" :gtitle="tab"> </glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock>

    <!-- <DemoBlock :title="customIcon">
      <glue-tabbar :model-value.prop="active3">
        <glue-tabbar-item badge="3">
          <span>{{ custom }}</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </glue-tabbar-item>
        <glue-tabbar-item icon="search" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="setting-o" :gtitle="tab"></glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock> -->

    <DemoBlock :title="customColor">
      <glue-tabbar :model-value.prop="active4" active-color="#ee0a24" inactive-color="#000">
        <glue-tabbar-item icon="home-o" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="search" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="friends-o" :gtitle="tab"></glue-tabbar-item>
        <glue-tabbar-item icon="setting-o" :gtitle="tab"></glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock>

    <DemoBlock :title="switchEvent">
      <glue-tabbar :model-value.prop="active5" @change="onChange">
        <glue-tabbar-item icon="home-o" :gtitle="tab + 1"></glue-tabbar-item>
        <glue-tabbar-item icon="search" :gtitle="tab + 2"></glue-tabbar-item>
        <glue-tabbar-item icon="friends-o" :gtitle="tab + 3"></glue-tabbar-item>
        <glue-tabbar-item icon="setting-o" :gtitle="tab + 4"></glue-tabbar-item>
      </glue-tabbar>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      custom: "自定义",
      tab: "标签",
      basicUsage: "基础用法",
      badge: "徽标提示",
      customIcon: "自定义图标",
      customColor: "自定义颜色",
      matchByName: "通过名称匹配",
      switchEvent: "监听切换事件",
      selectTip: "你切换到了",
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      activeName: "home",
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: "primary",
        message: `${this.selectTip} ${this.tab}${index + 1}`
      });
    }
  }
};
</script>

<style lang="less">
.demo-tabbar {
  .glue-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
