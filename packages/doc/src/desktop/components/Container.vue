<template>
  <div class="van-doc-container van-doc-row" :class="{ 'van-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VanDocContainer",

  props: {
    hasSimulator: Boolean
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/style/var";

.van-doc-container {
  width: calc(100% - 220px - @van-doc-simulator-width);
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  float: left;
}
</style>
