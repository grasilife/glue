<template>
  <div class="page-popup">
    1111
    <doc></doc>
  </div>
</template>

<script>
import doc from "./README.zh-CN.md";
export default {
  name: "App",

  props: {},

  mixins: [],

  components: { doc },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    console.log(this.$router, "huahuahu");
  },

  destroyed() {},

  methods: {},
};
</script>
<style lang="less" rel="stylesheet/less" scoped></style>
