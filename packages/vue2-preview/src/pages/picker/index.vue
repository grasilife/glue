<template>
  <glue-doc-section>
    <glue-doc-block card :gtitle="basicUsage">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="textColumns"
        @change="onChange1"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="defaultIndex">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="textColumns"
        :default-index="2"
        @change="onChange1"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="multipleColumns">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="dateColumns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="cascade">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="cascadeColumns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="disableOption">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="disabledColumns"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="setColumnValues">
      <glue-picker
        show-toolbar
        :gtitle="title"
        :columns.prop="columns"
        @change="onChange2"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="loadingStatus">
      <glue-picker
        loading
        show-toolbar
        :gtitle="title"
        :columns.prop="columns"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="withPopup">
      <glue-field
        readonly
        clickable
        :label="city"
        :value="fieldValue"
        :placeholder="chooseCity"
        @click="onClickField"
      />
      <glue-popup v-model="showPicker" round position="bottom">
        <glue-picker
          show-toolbar
          :gtitle="title"
          :columns="textColumns"
          @cancel="onCancel2"
          @confirm="onConfirm2"
        />
      </glue-popup>
    </glue-doc-block>
  </glue-doc-section>
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
      textColumns: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      disabledColumns: [
        { text: "杭州", disabled: true },
        { text: "宁波" },
        { text: "温州" },
      ],
      column3: {
        浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
        福建: ["福州", "厦门", "莆田", "三明", "泉州"],
      },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`,
      showPicker: false,
      fieldValue: "",
    };
  },

  computed: {
    columns() {
      const column = this.column3;
      return [
        {
          values: Object.keys(column),
          className: "column1",
        },
        {
          values: column[Object.keys(column)[0]],
          className: "column2",
          defaultIndex: 2,
        },
      ];
    },
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
    },
  },
};
</script>
