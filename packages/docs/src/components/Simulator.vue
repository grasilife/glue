<template>
  <div :class="['van-doc-simulator']" :style="simulatorStyle">
    <iframe
      ref="iframe"
      :src="props.src"
      :style="simulatorStyle"
      frameborder="0"
    />
  </div>
</template>
<script setup lang="tsx" name="VanDocSimulator">
import { onMounted, computed, ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});
const scrollTop = ref(window.scrollY);
const windowHeight = ref(window.innerHeight);
const simulatorStyle: any = computed(() => {
  const height = Math.min(640, windowHeight.value - 90);
  return {
    height: height + "px",
  };
});
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
  window.addEventListener("resize", () => {
    windowHeight.value = window.innerHeight;
  });
});
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../common/style/var";

.van-doc-simulator {
  float: left;
  position: relative;
  top: @van-doc-padding;
  z-index: 1;
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
