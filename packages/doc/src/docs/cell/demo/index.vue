<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <glue-cell-group>
        <glue-cell :title="cell" :value="content" />
        <glue-cell :title="cell" :value="content" :label="desc" />
      </glue-cell-group>
    </demo-block>

    <demo-block :title="largeSize">
      <glue-cell :title="cell" :value="content" size="large" />
      <glue-cell :title="cell" :value="content" size="large" :label="desc" />
    </demo-block>

    <demo-block :title="showIcon">
      <glue-cell :title="cell" :value="content" icon="location-o" />
    </demo-block>

    <demo-block :title="valueOnly">
      <glue-cell :value="content" />
    </demo-block>

    <demo-block :title="showArrow">
      <glue-cell :title="cell" is-link />
      <glue-cell :title="cell" is-link :value="content" />
      <glue-cell :title="cell" is-link arrow-direction="down" :value="content" />
    </demo-block>

    <demo-block :title="router">
      <glue-cell :title="urlRoute" is-link url="/vant/mobile.html" />
      <glue-cell :title="vueRoute" is-link to="index" />
    </demo-block>

    <demo-block :title="groupTitle">
      <glue-cell-group :title="`${group} 1`">
        <glue-cell :title="cell" :value="content" />
      </glue-cell-group>
      <glue-cell-group :title="`${group} 2`">
        <glue-cell :title="cell" :value="content" />
      </glue-cell-group>
    </demo-block>

    <demo-block :title="useSlots">
      <glue-cell :value="content" is-link>
        <template #title>
          <span class="custom-title">{{ cell }}</span>
          <glue-tag type="danger">{{ tag }}</glue-tag>
        </template>
      </glue-cell>

      <glue-cell icon="shop-o" :title="cell">
        <template #right-icon>
          <glue-icon name="search" class="search-icon" />
        </template>
      </glue-cell>
    </demo-block>

    <demo-block :title="verticalCenter">
      <glue-cell center :title="cell" :value="content" :label="desc" />
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
      verticalCenter: "垂直居中"
    };
  }
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
