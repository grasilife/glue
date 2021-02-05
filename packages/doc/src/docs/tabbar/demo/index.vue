<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ tab }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="matchByName">
      <van-tabbar v-model="activeName">
        <van-tabbar-item name="home" icon="home-o">
          {{ tab }}
        </van-tabbar-item>
        <van-tabbar-item name="search" icon="search">
          {{ tab }}
        </van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o">
          {{ tab }}
        </van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o">
          {{ tab }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="badge">
      <van-tabbar v-model="active2">
        <van-tabbar-item icon="home-o">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="search" dot>{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">
          {{ tab }}
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">
          {{ tab }}
        </van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="customIcon">
      <van-tabbar v-model="active3">
        <van-tabbar-item badge="3">
          <span>{{ custom }}</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ tab }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="customColor">
      <van-tabbar
        v-model="active4"
        active-color="#ee0a24"
        inactive-color="#000"
      >
        <van-tabbar-item icon="home-o">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ tab }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ tab }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>

    <demo-block :title="switchEvent">
      <van-tabbar v-model="active5" @change="onChange">
        <van-tabbar-item icon="home-o">{{ tab + 1 }}</van-tabbar-item>
        <van-tabbar-item icon="search">{{ tab + 2 }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o">{{ tab + 3 }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o">{{ tab + 4 }}</van-tabbar-item>
      </van-tabbar>
    </demo-block>
  </demo-section>
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
  .van-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
