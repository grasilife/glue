<template>
  <div
    class="van-doc-container van-doc-row"
    :class="{ 'van-doc-container--with-simulator': props.hasSimulator }"
  >
    <slot />
  </div>
</template>
<script setup lang="tsx" name="DocContainer">
const props = defineProps({
  hasSimulator: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../common/style/var.less";

.van-doc-container {
  width: calc(100% - 220px - @van-doc-simulator-width);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  float: left;
}
</style>
