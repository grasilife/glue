<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-radio-group :model-value.prop="radio1" class="demo-radio-group">
        <glue-radio name="1" :label="`${radio}1`"></glue-radio>
        <glue-radio name="2" :label="`${radio}2`"></glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="horizontal">
      <glue-radio-group
        :model-value.prop="radioHorizontal"
        class="demo-radio-group"
        direction="horizontal"
      >
        <glue-radio name="1" :label="`${radio}1`"></glue-radio>
        <glue-radio name="2" :label="`${radio}2`"></glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-radio-group
        :model-value.prop="radio2"
        class="demo-radio-group"
        disabled
      >
        <glue-radio name="1" :label="`${radio}1`"></glue-radio>
        <glue-radio name="2" :label="`${radio}2`"></glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="customShape">
      <glue-radio-group :model-value.prop="radioShape" class="demo-radio-group">
        <glue-radio name="1" shape="square" :label="`${radio}1`"></glue-radio>
        <glue-radio name="2" shape="square" :label="`${radio}2`"></glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="customColor">
      <glue-radio-group :model-value.prop="radio3" class="demo-radio-group">
        <glue-radio name="1" checked-color="#ee0a24" :label="`${radio}1`">
        </glue-radio>
        <glue-radio name="2" checked-color="#ee0a24" :label="`${radio}2`">
        </glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="customIconSize">
      <glue-radio-group
        :model-value.prop="radioIconSize"
        class="demo-radio-group"
      >
        <glue-radio name="1" icon-size="24px" :label="`${radio}1`">
        </glue-radio>
        <glue-radio name="2" icon-size="24px" :label="`${radio}2`">
        </glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="customIcon">
      <glue-radio-group :model-value.prop="radio4" class="demo-radio-group">
        <glue-radio name="1" :label="`${radio}1`">
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </glue-radio>
        <glue-radio name="2" :label="`${radio}2`">
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <DemoBlock :title="disableLabel">
      <glue-radio-group :model-value.prop="radioLabel" class="demo-radio-group">
        <glue-radio name="1" label-disabled :label="`${radio}1`"></glue-radio>
        <glue-radio name="2" label-disabled :label="`${radio}2`"></glue-radio>
      </glue-radio-group>
    </DemoBlock>

    <!-- <DemoBlock :title="withCell">
      <glue-radio-group :model-value.prop="radio5">
        <glue-cell-group>
          <glue-cell clickable :title="radio + 1" @click="radio5 = '1'">
            <template #right-icon>
              <glue-radio name="1" />
            </template>
          </glue-cell>
          <glue-cell clickable :title="radio + 2" @click="radio5 = '2'">
            <template #right-icon>
              <glue-radio name="2" />
            </template>
          </glue-cell>
        </glue-cell-group>
      </glue-radio-group>
    </DemoBlock> -->
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      disabled: "禁用",
      basicUsage: "基础用法",
      radio: "单选框",
      text1: "未选中禁用",
      text2: "选中且禁用",
      withCell: "与 Cell 组件一起使用",
      horizontal: "水平排列",
      customIcon: "自定义图标",
      customColor: "自定义颜色",
      customShape: "自定义形状",
      customIconSize: "自定义大小",
      disableLabel: "禁用文本点击",
      radio1: "1",
      radio2: "2",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      radioLabel: "1",
      radioShape: "1",
      radioIconSize: "1",
      radioHorizontal: "1",
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-radio {
  background: @white;

  &-group {
    padding: 0 16px;

    .glue-radio {
      margin: 0px 8px 6px 0px;
    }
  }

  img {
    height: 20px;
  }

  .glue-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
