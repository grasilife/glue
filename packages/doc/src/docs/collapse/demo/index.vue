<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-collapse v-model="active1">
        <van-collapse-item :title="title + 1">
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 2">
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 3">
          {{ text }}
        </van-collapse-item>
      </van-collapse>
    </DemoBlock>

    <DemoBlock :title="accordion">
      <van-collapse v-model="active2" accordion>
        <van-collapse-item :title="title + 1">
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 2">
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 3">
          {{ text }}
        </van-collapse-item>
      </van-collapse>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <van-collapse v-model="active3">
        <van-collapse-item :title="title + 1">
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 2" disabled>
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 3" disabled>
          {{ text }}
        </van-collapse-item>
      </van-collapse>
    </DemoBlock>

    <DemoBlock :title="titleSlot">
      <van-collapse v-model="active4">
        <van-collapse-item>
          <template #title> {{ title + 1 }}<van-icon name="question-o" /> </template>
          {{ text }}
        </van-collapse-item>
        <van-collapse-item :title="title + 2" :value="content" icon="shop-o">
          {{ text }}
        </van-collapse-item>
      </van-collapse>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      content: "内容",
      disabled: "禁用",
      title: "标题",
      basicUsage: "基础用法",
      accordion: "手风琴",
      titleSlot: "自定义标题内容",
      text: "代码是写出来给人看的，附带能在机器上运行",
      active1: [0],
      active2: 0,
      active3: [],
      active4: []
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
