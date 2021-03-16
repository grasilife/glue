<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-badge content="5">
        <div class="child" />
      </van-badge>
      <van-badge content="10">
        <div class="child" />
      </van-badge>
      <van-badge content="Hot">
        <div class="child" />
      </van-badge>
      <van-badge dot>
        <div class="child" />
      </van-badge>
    </DemoBlock>

    <DemoBlock :title="max">
      <van-badge content="20" max="9">
        <div class="child" />
      </van-badge>
      <van-badge content="50" max="20">
        <div class="child" />
      </van-badge>
      <van-badge content="200" max="99">
        <div class="child" />
      </van-badge>
    </DemoBlock>

    <DemoBlock :title="customColor">
      <van-badge content="5" color="#1989fa">
        <div class="child" />
      </van-badge>
      <van-badge content="10" color="#1989fa">
        <div class="child" />
      </van-badge>
      <van-badge dot color="#1989fa">
        <div class="child" />
      </van-badge>
    </DemoBlock>

    <DemoBlock :title="customContent">
      <van-badge>
        <div class="child" />
        <template #content>
          <van-icon name="success" class="badge-icon" />
        </template>
      </van-badge>
      <van-badge>
        <div class="child" />
        <template #content>
          <van-icon name="cross" class="badge-icon" />
        </template>
      </van-badge>
      <van-badge>
        <div class="child" />
        <template #content>
          <van-icon name="down" class="badge-icon" />
        </template>
      </van-badge>
    </DemoBlock>

    <DemoBlock :title="standalone">
      <van-badge content="20" style="margin-left: 16px;" />
      <van-badge content="200" max="99" style="margin-left: 12px;" />
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      max: "最大值",
      standalone: "独立展示",
      customColor: "自定义颜色",
      customContent: "自定义徽标内容"
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-badge {
  background-color: @white;

  .van-badge__wrapper {
    margin-left: @padding-md;
  }

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
