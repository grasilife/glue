<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-cell-group>
        <van-cell :title="cell" :value="content" />
        <van-cell :title="cell" :value="content" :label="desc" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="largeSize">
      <van-cell :title="cell" :value="content" size="large" />
      <van-cell :title="cell" :value="content" size="large" :label="desc" />
    </demo-block>

    <demo-block :title="showIcon">
      <van-cell :title="cell" :value="content" icon="location-o" />
    </demo-block>

    <demo-block :title="valueOnly">
      <van-cell :value="content" />
    </demo-block>

    <demo-block :title="showArrow">
      <van-cell :title="cell" is-link />
      <van-cell :title="cell" is-link :value="content" />
      <van-cell :title="cell" is-link arrow-direction="down" :value="content" />
    </demo-block>

    <demo-block :title="router">
      <van-cell :title="urlRoute" is-link url="/vant/mobile.html" />
      <van-cell :title="vueRoute" is-link to="index" />
    </demo-block>

    <demo-block :title="groupTitle">
      <van-cell-group :title="`${group} 1`">
        <van-cell :title="cell" :value="content" />
      </van-cell-group>
      <van-cell-group :title="`${group} 2`">
        <van-cell :title="cell" :value="content" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="useSlots">
      <van-cell :value="content" is-link>
        <template #title>
          <span class="custom-title">{{ cell }}</span>
          <van-tag type="danger">{{ tag }}</van-tag>
        </template>
      </van-cell>

      <van-cell icon="shop-o" :title="cell">
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
    </demo-block>

    <demo-block :title="verticalCenter">
      <van-cell center :title="cell" :value="content" :label="desc" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      content: "内容",
      desc: "描述",
      tag: "标签",
      basicUsage: "基础用法",
      cell: "单元格",
      valueOnly: "只设置 value",
      showIcon: "展示图标",
      showArrow: "展示箭头",
      largeSize: "单元格大小",
      group: "分组",
      groupTitle: "分组标题",
      router: "页面导航",
      urlRoute: "URL 跳转",
      vueRoute: "路由跳转",
      useSlots: "使用插槽",
      verticalCenter: "垂直居中",
    };
  },
};
</script>

<style lang="less">
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
