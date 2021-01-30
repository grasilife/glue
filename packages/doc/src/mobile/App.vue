<template>
  <div class="page-popup">
    111
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  props: {},

  mixins: [],

  components: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    console.log(this.$route, "huahuahu");
  },

  destroyed() {},

  methods: {},
};
</script>
<style lang="less" rel="stylesheet/less" scoped></style>
