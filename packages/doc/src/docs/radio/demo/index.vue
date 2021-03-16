<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-radio-group v-model="radio1" class="demo-radio-group">
        <van-radio name="1">{{ radio }} 1</van-radio>
        <van-radio name="2">{{ radio }} 2</van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="horizontal">
      <van-radio-group v-model="radioHorizontal" class="demo-radio-group" direction="horizontal">
        <van-radio name="1">{{ radio }} 1</van-radio>
        <van-radio name="2">{{ radio }} 2</van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="disabled">
      <van-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <van-radio name="1">{{ radio }} 1</van-radio>
        <van-radio name="2">{{ radio }} 2</van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="customShape">
      <van-radio-group v-model="radioShape" class="demo-radio-group">
        <van-radio name="1" shape="square">{{ radio }} 1</van-radio>
        <van-radio name="2" shape="square">{{ radio }} 2</van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="customColor">
      <van-radio-group v-model="radio3" class="demo-radio-group">
        <van-radio name="1" checked-color="#ee0a24"> {{ radio }} 1 </van-radio>
        <van-radio name="2" checked-color="#ee0a24"> {{ radio }} 2 </van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="customIconSize">
      <van-radio-group v-model="radioIconSize" class="demo-radio-group">
        <van-radio name="1" icon-size="24px"> {{ radio }} 1 </van-radio>
        <van-radio name="2" icon-size="24px"> {{ radio }} 2 </van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="customIcon">
      <van-radio-group v-model="radio4" class="demo-radio-group">
        <van-radio name="1">
          {{ radio }} 1
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </van-radio>
        <van-radio name="2">
          {{ radio }} 2
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive" />
          </template>
        </van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="disableLabel">
      <van-radio-group v-model="radioLabel" class="demo-radio-group">
        <van-radio name="1" label-disabled>{{ radio }} 1</van-radio>
        <van-radio name="2" label-disabled>{{ radio }} 2</van-radio>
      </van-radio-group>
    </DemoBlock>

    <DemoBlock :title="withCell">
      <van-radio-group v-model="radio5">
        <van-cell-group>
          <van-cell clickable :title="radio + 1" @click="radio5 = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell clickable :title="radio + 2" @click="radio5 = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </DemoBlock>
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
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-radio {
  background: @white;

  &-group {
    padding: 0 16px;

    .van-radio {
      margin-bottom: 8px;
    }
  }

  img {
    height: 20px;
  }

  .van-doc-demo-block__title {
    margin-top: -8px;
  }
}
</style>
