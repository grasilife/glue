<template>
  <DemoSection>
    <van-grid :column-num="2" :border="false">
      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ basicUsage }}</h3>
        <van-sidebar v-model="activeKey1">
          <van-sidebar-item :title="title" />
          <van-sidebar-item :title="title" />
          <van-sidebar-item :title="title" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ showBadge }}</h3>
        <van-sidebar v-model="activeKey2">
          <van-sidebar-item :title="title" dot />
          <van-sidebar-item :title="title" badge="5" />
          <van-sidebar-item :title="title" badge="99+" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ disabled }}</h3>
        <van-sidebar v-model="activeKey3">
          <van-sidebar-item :title="title" />
          <van-sidebar-item :title="title" disabled />
          <van-sidebar-item :title="title" />
        </van-sidebar>
      </van-grid-item>

      <van-grid-item>
        <h3 class="demo-sidebar-title">{{ changeEvent }}</h3>
        <van-sidebar v-model="activeKey4" @change="onChange">
          <van-sidebar-item :title="title + 1" />
          <van-sidebar-item :title="title + 2" />
          <van-sidebar-item :title="title + 3" />
        </van-sidebar>
      </van-grid-item>
    </van-grid>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      title: "标签名",
      showBadge: "徽标提示",
      disabled: "禁用选项",
      changeEvent: "监听切换事件",
      selectTip: "你切换到了",
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0,
      activeKey4: 0
    };
  },

  methods: {
    onChange(index) {
      this.$notify({
        type: "primary",
        message: `${this.selectTip} ${this.title}${index + 1}`
      });
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-sidebar {
  background-color: @white;

  .van-sidebar {
    margin-left: @padding-md;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-6;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
