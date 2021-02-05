<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-pagination
        v-model="currentPage1"
        :total-items="24"
        :items-per-page="5"
        :prev-text="prevText"
        :next-text="nextText"
      />
    </demo-block>

    <demo-block :title="title2">
      <van-pagination
        v-model="currentPage2"
        :page-count="12"
        :prev-text="prevText"
        :next-text="nextText"
        mode="simple"
        size="small"
      />
    </demo-block>

    <demo-block :title="title3">
      <van-pagination
        v-model="currentPage3"
        force-ellipses
        :total-items="125"
        :show-page-size="3"
        :prev-text="prevText"
        :next-text="nextText"
      />
    </demo-block>

    <demo-block :title="title4">
      <van-pagination
        v-model="currentPage4"
        :total-items="125"
        :show-page-size="5"
      >
        <template #prev-text>
          <van-icon name="arrow-left" />
        </template>
        <template #next-text>
          <van-icon name="arrow" />
        </template>
        <template #page="{ text }">{{ text }}</template>
      </van-pagination>
    </demo-block>
  </demo-section>
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
  .van-pagination {
    width: 100%;
    margin: 5px 0;
  }

  .van-doc-demo-block {
    padding: 0 @padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
