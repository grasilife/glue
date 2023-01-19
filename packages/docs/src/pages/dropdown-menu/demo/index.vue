<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </DemoBlock>

    <DemoBlock :title="customContent">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item :title="itemTitle" ref="item">
          <van-cell center :title="switchTitle1">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" :active-color="RED" />
            </template>
          </van-cell>
          <van-cell center :title="switchTitle2">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" :active-color="RED" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px;">
            <van-button type="danger" block round style="height: 40px;" @click="onConfirm">
              {{ confirm }}
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </DemoBlock>

    <DemoBlock :title="customActiveColor">
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </DemoBlock>

    <DemoBlock :title="expandDirection">
      <van-dropdown-menu direction="up">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </DemoBlock>

    <DemoBlock :title="disableMenu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" disabled :options="option1" />
        <van-dropdown-item v-model="value2" disabled :options="option2" />
      </van-dropdown-menu>
    </DemoBlock>
  </DemoSection>
</template>

<script>
import { RED } from "~/common/constant";

export default {
  data() {
    return {
      confirm: "确认",
      basicUsage: "基础用法",
      RED,
      disableMenu: "禁用菜单",
      switchTitle1: "包邮",
      switchTitle2: "团购",
      itemTitle: "筛选",
      expandDirection: "向上展开",
      customContent: "自定义菜单内容",
      customActiveColor: "自定义选中态颜色",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      switch1: true,
      switch2: false,
      value1: 0,
      value2: "a"
    };
  },

  computed: {},

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>
