<template>
  <li class="docsearch" id="docsearch">111</li>
</template>
<script setup lang="tsx" name="VanDocSearch">
import { watch, onMounted, computed } from "vue";
import "@docsearch/css";
const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  searchConfig: {
    type: Object,
    required: true,
  },
});
watch(
  () => props.lang,
  () => {
    initDocsearch();
  }
);
function initDocsearch() {
  if (props.searchConfig) {
    // docsearch({
    //   ...this.searchConfig,
    //   container: "#docsearch",
    // });
  }
}
onMounted(() => {
  initDocsearch();
});
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../common/style/var";

.docsearch {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.DocSearch-Button {
  height: 32px;
  background: #f7f8fa;

  &:hover {
    box-shadow: none;
  }
}

.DocSearch-Search-Icon {
  width: 18px;
  height: 18px;
}
</style>
