<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-collapse lue-collapse :model-value.prop="active1">
        <glue-collapse-item :gtitle="gtitle + 1" :name="0">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 2" :name="1">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 3" :name="2">
          {{ text }}
        </glue-collapse-item>
      </glue-collapse>
    </DemoBlock>

    <DemoBlock :title="accordion">
      <glue-collapse :model-value.prop="active2" accordion>
        <glue-collapse-item :gtitle="gtitle + 1" :name="0">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 2" :name="1">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 3" :name="2">
          {{ text }}
        </glue-collapse-item>
      </glue-collapse>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-collapse :model-value.prop="active3">
        <glue-collapse-item :gtitle="gtitle + 1" :name="0">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 2" disabled :name="1">
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 3" disabled :name="2">
          {{ text }}
        </glue-collapse-item>
      </glue-collapse>
    </DemoBlock>

    <!-- <DemoBlock :title="titleSlot">
      <glue-collapse :model-value.prop="active4">
        <glue-collapse-item :name="0">
          <template #gtitle>
            {{ gtitle + 1 }}
            <glue-icon name="question-o" />
          </template>
          {{ text }}
        </glue-collapse-item>
        <glue-collapse-item :gtitle="gtitle + 2" :value="content" icon="shop-o" :name="1">
          {{ text }}
        </glue-collapse-item>
      </glue-collapse>
    </DemoBlock> -->
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      content: "内容",
      disabled: "禁用",
      gtitle: "标题",
      basicUsage: "基础用法",
      accordion: "手风琴",
      titleSlot: "自定义标题内容",
      text: "代码是写出来给人看的，附带能在机器上运行",
      active1: [0],
      active2: 0,
      active3: [],
      active4: [],
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var2.less";

.demo-collapse {
  .glue-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
