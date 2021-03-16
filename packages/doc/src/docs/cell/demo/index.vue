<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-cell-group>
        <glue-cell :title="cell" :value="content" />
        <glue-cell :title="cell" :value="content" :label="desc" />
      </glue-cell-group>
    </DemoBlock>

    <DemoBlock :title="largeSize">
      <glue-cell :title="cell" :value="content" size="large" />
      <glue-cell :title="cell" :value="content" size="large" :label="desc" />
    </DemoBlock>

    <DemoBlock :title="showIcon">
      <glue-cell :title="cell" :value="content" icon="location-o" />
    </DemoBlock>

    <DemoBlock :title="valueOnly">
      <glue-cell :value="content" />
    </DemoBlock>

    <DemoBlock :title="showArrow">
      <glue-cell :title="cell" is-link />
      <glue-cell :title="cell" is-link :value="content" />
      <glue-cell :title="cell" is-link arrow-direction="down" :value="content" />
    </DemoBlock>

    <DemoBlock :title="router">
      <glue-cell :title="urlRoute" is-link url="/vant/mobile.html" />
      <glue-cell :title="vueRoute" is-link to="index" />
    </DemoBlock>

    <DemoBlock :title="groupTitle">
      <glue-cell-group :title="`${group} 1`">
        <glue-cell :title="cell" :value="content" />
      </glue-cell-group>
      <glue-cell-group :title="`${group} 2`">
        <glue-cell :title="cell" :value="content" />
      </glue-cell-group>
    </DemoBlock>

    <DemoBlock :title="useSlots">
      <glue-cell :value="content" is-link title="#slot">
        <div slot="title">
          <span class="custom-title">{{ cell }}</span>
          <glue-tag type="danger">{{ tag }}</glue-tag>
        </div>
      </glue-cell>
      <glue-cell value="#slot" is-link :title="cell">
        <div slot="value">
          <span class="custom-title">{{ value }}</span>
          <glue-tag type="danger">{{ tag }}</glue-tag>
        </div>
      </glue-cell>
      <glue-cell :title="cell" icon="#slot" right-icon="#slot">
        <div slot="icon">
          <glue-icon name="shop-o" class="search-icon" />
        </div>
        <div slot="rightIcon">
          <glue-icon name="search" class="search-icon" />
        </div>
      </glue-cell>
      <glue-cell :title="cell" right-icon="#slot">
        <div slot="rightIcon">
          <glue-icon name="search" class="search-icon" />
        </div>
      </glue-cell>
    </DemoBlock>

    <DemoBlock :title="verticalCenter">
      <glue-cell center :title="cell" :value="content" :label="desc" />
    </DemoBlock>
  </DemoSection>
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
