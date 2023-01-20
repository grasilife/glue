<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <glue-badge content="5" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
      <glue-badge content="10">
        <div class="child" style="margin-left: 16px" />
      </glue-badge>
      <glue-badge content="Hot">
        <div class="child" style="margin-left: 16px" />
      </glue-badge>
      <glue-badge dot>
        <div class="child" style="margin-left: 16px" />
      </glue-badge>
    </glue-doc-block>

    <glue-doc-block :gtitle="max">
      <glue-badge content="20" max="9" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
      <glue-badge content="50" max="20" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
      <glue-badge content="200" max="99" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
    </glue-doc-block>

    <glue-doc-block :gtitle="customColor">
      <glue-badge content="5" color="#1989fa" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
      <glue-badge content="10" color="#1989fa" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
      <glue-badge dot color="#1989fa" style="margin-left: 16px">
        <div class="child" />
      </glue-badge>
    </glue-doc-block>

    <glue-doc-block :gtitle="customContent">
      <glue-badge content="#slot" style="margin-left: 16px">
        <div class="child" />
        <div slot="content">
          <glue-icon name="success" class="badge-icon" size="12" />
        </div>
      </glue-badge>
      <glue-badge content="#slot" style="margin-left: 16px">
        <div class="child" />
        <div slot="content">
          <glue-icon name="cross" class="badge-icon" size="12" />
        </div>
      </glue-badge>
      <glue-badge content="#slot" style="margin-left: 16px">
        <div class="child" />
        <div slot="content">
          <glue-icon name="down" class="badge-icon" size="12" />
        </div>
      </glue-badge>
    </glue-doc-block>

    <glue-doc-block :gtitle="standalone">
      <div style="display: inline-block">
        <glue-badge content="20" style="margin-left: 32px" />
      </div>
      <div style="display: inline-block">
        <glue-badge content="200" max="99" style="margin-left: 32px" />
      </div>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      max: "最大值",
      standalone: "独立展示",
      customColor: "自定义颜色",
      customContent: "自定义徽标内容",
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-badge {
  background-color: @white;

  .child {
    width: 40px;
    height: 40px;
    background: @gray-2;
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
