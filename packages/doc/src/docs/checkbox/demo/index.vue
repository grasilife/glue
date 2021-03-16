<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-checkbox v-model="checkbox1">{{ checkbox }}</van-checkbox>
    </demo-block>

    <DemoBlock :title="disabled">
      <van-checkbox :value="false" disabled>
        {{ checkbox }}
      </van-checkbox>
      <van-checkbox :value="true" disabled>
        {{ checkbox }}
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="customShape">
      <van-checkbox v-model="checkboxShape" shape="square">
        {{ customColor }}
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="customColor">
      <van-checkbox v-model="checkbox2" checked-color="#ee0a24">
        {{ customColor }}
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="customIconSize">
      <van-checkbox v-model="checboxIcon" icon-size="24px">
        {{ customIconSize }}
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="customIcon">
      <van-checkbox v-model="checkbox3">
        {{ customIcon }}
        <template #icon="{ checked }">
          <img :src="checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="disableLabel">
      <van-checkbox v-model="checkboxLabel" label-disabled>
        {{ checkbox }}
      </van-checkbox>
    </demo-block>

    <DemoBlock :title="title3">
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">{{ checkbox }} a</van-checkbox>
        <van-checkbox name="b">{{ checkbox }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <DemoBlock :title="horizontal">
      <van-checkbox-group v-model="horizontalResult" direction="horizontal">
        <van-checkbox name="a">{{ checkbox }} a</van-checkbox>
        <van-checkbox name="b">{{ checkbox }} b</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <DemoBlock :title="title4">
      <van-checkbox-group v-model="result2" :max="2">
        <van-checkbox name="a">{{ checkbox }} a</van-checkbox>
        <van-checkbox name="b">{{ checkbox }} b</van-checkbox>
        <van-checkbox name="c">{{ checkbox }} c</van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <DemoBlock :title="toggleAllTitle">
      <van-checkbox-group v-model="checkAllResult" ref="group">
        <van-checkbox name="a">{{ checkbox }} a</van-checkbox>
        <van-checkbox name="b">{{ checkbox }} b</van-checkbox>
        <van-checkbox name="c">{{ checkbox }} c</van-checkbox>
      </van-checkbox-group>

      <div class="demo-checkbox-buttons">
        <van-button type="primary" @click="checkAll">
          {{ checkAllTitle }}
        </van-button>
        <van-button type="info" @click="toggleAll">
          {{ inverse }}
        </van-button>
      </div>
    </demo-block>

    <DemoBlock :title="title5">
      <van-checkbox-group v-model="result3">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="`${checkbox} ${item}`"
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox ref="checkboxes" :name="item" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </demo-block>
  </demo-section>
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

  .van-checkbox {
    margin: 0 0 8px 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: @padding-md;

    .van-button {
      margin-left: @padding-md;
    }
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
