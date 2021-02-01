<template>
  <div :class="['van-doc-simulator']">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: "VanDocSimulator",

  props: {
    src: String,
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
    };
  },

  computed: {
    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + "px",
      };
    },
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/style/var";

.van-doc-simulator {
  position: relative;
  top: @van-doc-padding;
  z-index: 1;
  width: 385px;
  height: 582px;
  float: left;
  box-sizing: border-box;
  width: @van-doc-simulator-width;
  min-width: @van-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: @van-doc-border-radius;
  box-shadow: 0 8px 12px #ebedf0;

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
