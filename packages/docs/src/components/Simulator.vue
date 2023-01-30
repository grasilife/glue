<template>
  <div :class="['van-doc-simulator']" :style="simulatorStyle">
    <iframe
      ref="iframe"
      :src="props.src"
      :style="simulatorStyle"
      frameborder="0"
      :key="props.src"
      @load="iframeLoad"
    />
  </div>
</template>
<script setup lang="tsx" name="VanDocSimulator">
import { onMounted, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
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
let loaded = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollTop.value = window.scrollY;
  });
  window.addEventListener("resize", () => {
    windowHeight.value = window.innerHeight;
  });
});
function syncPathToChild(path: string) {
  const iframe: any = document.querySelector("iframe");
  console.log(iframe, "iframeiframeiframe");
  if (iframe) {
    iframe.contentWindow.postMessage(
      {
        type: "replacePath",
        value: path,
      },
      "*"
    );
  }
}
function iframeLoad() {
  console.log(route.path, "iframeLoad");
  loaded.value = true;
  syncPathToChild(route.path);
}

watch(
  () => route.path,
  () => {
    if (loaded.value) {
      syncPathToChild(route.path);
    }
  }
);
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
