<template>
  <demo-section>
    <demo-block card :title="basicUsage">
      <van-picker show-toolbar :title="title" :columns="textColumns" @change="onChange1" />
    </demo-block>

    <demo-block card :title="defaultIndex">
      <van-picker show-toolbar :title="title" :columns="textColumns" :default-index="2" @change="onChange1" />
    </demo-block>

    <demo-block card :title="multipleColumns">
      <van-picker show-toolbar :title="title" :columns="dateColumns" @cancel="onCancel" @confirm="onConfirm" />
    </demo-block>

    <demo-block card :title="cascade">
      <van-picker show-toolbar :title="title" :columns="cascadeColumns" @cancel="onCancel" @confirm="onConfirm" />
    </demo-block>

    <demo-block card :title="disableOption">
      <van-picker show-toolbar :title="title" :columns="disabledColumns" />
    </demo-block>

    <demo-block card :title="setColumnValues">
      <van-picker show-toolbar :title="title" :columns="columns" @change="onChange2" />
    </demo-block>

    <demo-block card :title="loadingStatus">
      <van-picker loading show-toolbar :title="title" :columns="columns" />
    </demo-block>

    <demo-block card :title="withPopup">
      <van-field readonly clickable :label="city" :value="fieldValue" :placeholder="chooseCity" @click="onClickField" />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker show-toolbar :title="title" :columns="textColumns" @cancel="onCancel2" @confirm="onConfirm2" />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
import { dateColumns, cascadeColumns } from "./data";

export default {
  data() {
    return {
      title: "标题",
      loadingStatus: "加载状态",
      basicUsage: "基础用法",
      city: "城市",
      cascade: "级联选择",
      withPopup: "搭配弹出层使用",
      chooseCity: "选择城市",
      showToolbar: "展示顶部栏",
      dateColumns: dateColumns["zh-CN"],
      defaultIndex: "默认选中项",
      disableOption: "禁用选项",
      cascadeColumns: cascadeColumns["zh-CN"],
      multipleColumns: "多列选择",
      setColumnValues: "动态设置选项",
      textColumns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
      disabledColumns: [{ text: "杭州", disabled: true }, { text: "宁波" }, { text: "温州" }],
      column3: {
        浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
        福建: ["福州", "厦门", "莆田", "三明", "泉州"]
      },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`,
      showPicker: false,
      fieldValue: ""
    };
  },

  computed: {
    columns() {
      const column = this.column3;
      return [
        {
          values: Object.keys(column),
          className: "column1"
        },
        {
          values: column[Object.keys(column)[0]],
          className: "column2",
          defaultIndex: 2
        }
      ];
    }
  },

  methods: {
    onChange1(picker, value, index) {
      this.$toast(this.toastContent(value, index));
    },

    onChange2(picker, values) {
      picker.setColumnValues(1, this.column3[values[0]]);
    },

    onConfirm(value, index) {
      this.$toast(this.toastContent(value, index));
    },

    onCancel() {
      this.$toast(this.cancel);
    },

    onClickField() {
      this.showPicker = true;
    },

    onConfirm2(value) {
      this.showPicker = false;
      this.fieldValue = value;
    },

    onCancel2() {
      this.showPicker = false;
    }
  }
};
</script>
