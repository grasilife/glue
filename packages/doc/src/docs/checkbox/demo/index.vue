<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-checkbox :model-value.prop="checkbox1" :label="checkbox"></glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-checkbox :value="false" disabled :label="checkbox"> </glue-checkbox>
      <glue-checkbox :value="true" disabled :label="checkbox"> </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="customShape">
      <glue-checkbox :model-value.prop="checkboxShape" shape="square" :label="customShape"> </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="customColor">
      <glue-checkbox :model-value.prop="checkbox2" checked-color="#ee0a24" :label="customColor"> </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="customIconSize">
      <glue-checkbox :model-value.prop="checboxIcon" icon-size="24px" :label="customIconSize"> </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="customIcon">
      <glue-checkbox :model-value.prop="checkbox3" :label="customIcon" icon="#slot">
        <glue-icon :name="checkbox3 ? activeIcon : inactiveIcon" size="32" />
      </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="disableLabel">
      <glue-checkbox :model-value.prop="checkboxLabel" :label-disabled="true" :label="checkbox"> </glue-checkbox>
    </DemoBlock>

    <DemoBlock :title="title3">
      <glue-checkbox-group v-model="result">
        <glue-checkbox name="a" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="b" :label="checkbox"></glue-checkbox>
      </glue-checkbox-group>
    </DemoBlock>

    <DemoBlock :title="horizontal">
      <glue-checkbox-group :model-value.prop="horizontalResult" direction="horizontal">
        <glue-checkbox name="a" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="b" :label="checkbox"></glue-checkbox>
      </glue-checkbox-group>
    </DemoBlock>

    <DemoBlock :title="title4">
      <glue-checkbox-group :model-value.prop="result2" :max="2">
        <glue-checkbox name="a" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="b" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="c" :label="checkbox"></glue-checkbox>
      </glue-checkbox-group>
    </DemoBlock>

    <DemoBlock :title="toggleAllTitle">
      <glue-checkbox-group :model-value.prop="checkAllResult" ref="group">
        <glue-checkbox name="a" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="b" :label="checkbox"></glue-checkbox>
        <glue-checkbox name="c" :label="checkbox"></glue-checkbox>
      </glue-checkbox-group>

      <div class="demo-checkbox-buttons">
        <glue-button type="primary" @click="checkAll">
          {{ checkAllTitle }}
        </glue-button>
        <glue-button type="info" @click="toggleAll">
          {{ inverse }}
        </glue-button>
      </div>
    </DemoBlock>

    <DemoBlock :title="title5">
      <glue-checkbox-group v-model="result3">
        <glue-cell-group>
          <glue-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${checkbox} ${item}`"
            @click="toggle(index)"
            right-icon="#slot"
            value="内容"
          >
            <div slot="rightIcon">
              <glue-checkbox ref="checkboxes" :name="item" />
            </div>
          </glue-cell>
        </glue-cell-group>
      </glue-checkbox-group>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      disabled: "禁用",
      basicUsage: "基础用法",
      checkbox: "复选框",
      customIcon: "自定义图标",
      customIconSize: "自定义大小",
      customColor: "自定义颜色",
      customShape: "自定义形状",
      title3: "复选框组",
      title4: "限制最大可选数",
      title5: "搭配单元格组件使用",
      toggleAllTitle: "全选与反选",
      checkAllTitle: "全选",
      inverse: "反选",
      horizontal: "水平排列",
      disableLabel: "禁用文本点击",
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkboxShape: true,
      checkboxLabel: true,
      checboxIcon: true,
      list: ["a", "b"],
      result: ["a", "b"],
      result2: [],
      result3: [],
      checkAllResult: [],
      horizontalResult: [],
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png"
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },

    checkAll() {
      this.$refs.group.toggleAll(true);
    },

    toggleAll() {
      this.$refs.group.toggleAll();
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-checkbox {
  background: @white;

  .glue-checkbox,
  .glue-checkbox-group {
    margin: 0 0 4px 10px;
  }

  .glue-cell {
    .glue-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .glue-button {
      margin-left: @padding-md;
    }
  }

  .glue-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
