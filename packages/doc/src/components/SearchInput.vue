<template>
  <li class="docsearch" id="docsearch">
    111
  </li>
</template>

<script>
import "@docsearch/css";
// import docsearch from '@docsearch/js';

export default {
  name: "VanDocSearch",

  props: {
    lang: String,
    searchConfig: Object
  },

  watch: {
    lang() {
      this.initDocsearch();
    }
  },

  mounted() {
    this.initDocsearch();
  },

  methods: {
    initDocsearch() {
      if (this.searchConfig) {
        // docsearch({
        //   ...this.searchConfig,
        //   container: "#docsearch",
        // });
      }
    }
  }
};
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
