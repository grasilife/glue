<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-pagination
        :value="currentPage1"
        :total-items="24"
        :items-per-page="5"
        :prev-text="prevText"
        :next-text="nextText"
      />
    </DemoBlock>

    <DemoBlock :title="title2">
      <glue-pagination
        :value="currentPage2"
        :page-count="12"
        :prev-text="prevText"
        :next-text="nextText"
        mode="simple"
        size="small"
      />
    </DemoBlock>

    <DemoBlock :title="title3">
      <glue-pagination
        :value="currentPage3"
        force-ellipses
        :total-items="125"
        :show-page-size="3"
        :prev-text="prevText"
        :next-text="nextText"
      />
    </DemoBlock>

    <DemoBlock :title="title4">
      <glue-pagination :value="currentPage4" :total-items="125" :show-page-size="5" prev-text="#slot" next-text="#slot">
        <div slot="prev-text">
          <glue-icon name="arrow-left" />
        </div>
        <div slot="next-text">
          <glue-icon name="arrow" />
        </div>
      </glue-pagination>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      title2: "简单模式",
      title3: "显示省略号",
      title4: "自定义按钮",
      prevText: "上一页",
      nextText: "下一页",
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-pagination {
  .glue-pagination {
    width: 100%;
    margin: 5px 0;
  }

  .glue-doc-demo-block {
    padding: 0 @padding-md;
  }

  .glue-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
