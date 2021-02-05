<template>
  <demo-section>
    <demo-block card :title="basicUsage">
      <van-cell is-link :title="basicUsage" @click="showNotify" />
    </demo-block>

    <demo-block card :title="notifyType">
      <van-cell is-link :title="primary" @click="showType('primary')" />
      <van-cell is-link :title="success" @click="showType('success')" />
      <van-cell is-link :title="danger" @click="showType('danger')" />
      <van-cell is-link :title="warning" @click="showType('warning')" />
    </demo-block>

    <demo-block card :title="customNotify">
      <van-cell is-link :title="customColor" @click="showCustomColor" />
      <van-cell is-link :title="customDuration" @click="showCustomDuration" />
    </demo-block>

    <demo-block card :title="componentCall">
      <van-cell is-link :title="componentCall" @click="showComponentCall" />

      <van-notify v-model="show" type="success">
        <van-icon name="bell" style="margin-right: 4px;" />
        <span>{{ content }}</span>
      </van-notify>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      primary: "主要通知",
      success: "成功通知",
      danger: "危险通知",
      warning: "警告通知",
      content: "通知内容",
      notifyType: "通知类型",
      customColor: "自定义颜色",
      customNotify: "自定义配置",
      componentCall: "组件调用",
      customDuration: "自定义时长",
      show: false
    };
  },

  methods: {
    showNotify() {
      this.$notify(this.content);
    },

    showCustomColor() {
      this.$notify({
        message: this.customColor,
        color: "#ad0000",
        background: "#ffe1e1"
      });
    },

    showCustomDuration() {
      this.$notify({
        message: this.customDuration,
        duration: 1000
      });
    },

    showType(type) {
      this.$notify({
        message: this.content,
        type
      });
    },

    showComponentCall() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    }
  }
};
</script>
