<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-sticky>
        <glue-button type="primary" style="margin-left: 15px;">
          {{ basicUsage }}
        </glue-button>
      </glue-sticky>
    </DemoBlock>

    <DemoBlock :title="offsetTop">
      <glue-sticky :offset-top-value="50">
        <glue-button type="primary" style="margin-left: 115px;">
          {{ offsetTop }}
        </glue-button>
      </glue-sticky>
    </DemoBlock>

    <DemoBlock :title="setContainer">
      <div ref="container" style="height: 150px; background-color: #fff;">
        <glue-sticky :container="container">
          <glue-button type="warning" style="margin-left: 215px;">
            {{ setContainer }}
          </glue-button>
        </glue-sticky>
      </div>
    </DemoBlock>
    <DemoBlock :title="offsetBottom">
      <div style="height: 200px"></div>
      <glue-sticky :offset-bottom-value="50" position="bottom" @glueScroll="glueScroll">
        <glue-button type="primary" style="margin-left: 15px">
          {{ offsetBottom }}
        </glue-button>
      </glue-sticky>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      offsetTop: "吸顶距离",
      setContainer: "指定容器",
      container: null,
      offsetBottom: "吸底距离"
    };
  },

  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    glueScroll({ scrollTop, isFixed }) {
      console.log(scrollTop, isFixed, "scrollTop, isFixed");
    }
  }
};
</script>

<style lang="less">
@import "~/common/style/var2.less";

.demo-sticky {
  height: 200vh;

  glue-button {
    margin-left: @padding-md;
  }
}
</style>
