<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell is-link :title="title1" @click="$toast(text)" />
      <van-cell is-link :title="title2" @click="showLoadingToast()" />
      <van-cell is-link :title="success" @click="showSuccessToast" />
      <van-cell is-link :title="fail" @click="showFailToast" />
    </DemoBlock>

    <DemoBlock card :title="customIcon">
      <van-cell is-link :title="customIcon" @click="showIconToast" />
      <van-cell is-link :title="customImage" @click="showImageToast" />
      <van-cell is-link :title="loadingType" @click="showLoadingToast('spinner')" />
    </DemoBlock>

    <DemoBlock card :title="customPosition">
      <van-cell is-link :title="positionTop" @click="showTopToast" />
      <van-cell is-link :title="positionBottom" @click="showBottomToast" />
    </DemoBlock>

    <DemoBlock card :title="updateMessage">
      <van-cell is-link :title="updateMessage" @click="showCustomizedToast" />
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      fail: "失败提示",
      text: "提示内容",
      text2: "成功文案",
      text3: "失败文案",
      text4: second => `倒计时 ${second} 秒`,
      title1: "文字提示",
      title2: "加载提示",
      title3: "成功/失败提示",
      success: "成功提示",
      customIcon: "自定义图标",
      customImage: "自定义图片",
      loadingType: "自定义加载图标",
      positionTop: "顶部展示",
      updateMessage: "动态更新提示",
      positionBottom: "底部展示",
      customPosition: "自定义位置"
    };
  },
  methods: {
    showLoadingToast(loadingType) {
      this.$toast.loading({
        forbidClick: true,
        message: this.loading,
        loadingType
      });
    },

    showSuccessToast() {
      this.$toast.success(this.text2);
    },

    showFailToast() {
      this.$toast.fail(this.text3);
    },

    showTopToast() {
      this.$toast({
        message: this.positionTop,
        position: "top"
      });
    },

    showBottomToast() {
      this.$toast({
        message: this.positionBottom,
        position: "bottom"
      });
    },

    showIconToast() {
      this.$toast({
        message: this.customIcon,
        icon: "like-o"
      });
    },

    showImageToast() {
      this.$toast({
        message: this.customImage,
        icon: "https://img.yzcdn.cn/vant/logo.png"
      });
    },

    showCustomizedToast() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: this.text4(3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = this.text4(second);
        } else {
          clearInterval(timer);
          this.$toast.clear();
        }
      }, 1000);
    }
  }
};
</script>
