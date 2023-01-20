<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="radioMode">
      <glue-tree-select
        :items.prop="items"
        :active-id.prop="activeId"
        :main-active-index.prop="activeIndex"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="multipleMode">
      <glue-tree-select
        :items.prop="items"
        :active-id.prop="activeIds"
        :main-active-index.prop="activeIndex2"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="customContent">
      <glue-tree-select
        height="55vw"
        :items.prop="simpleItems"
        :main-active-index.prop="activeIndex3"
        content="#slot"
        @glueClickNav="
          (e) => {
            this.activeIndex3 = e.detail;
          }
        "
      >
        <glue-image
          v-if="activeIndex3 === 0"
          :show-loading="false"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <glue-image
          v-if="activeIndex3 === 1"
          :show-loading="false"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </glue-tree-select>
    </glue-doc-block>

    <glue-doc-block :gtitle="showBadge">
      <glue-tree-select
        height="55vw"
        :items.prop="badgeItems"
        :active-id.prop="activeId2"
        :main-active-index.prop="activeIndex4"
      />
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { zhCNData } from "./data-zh";

export default {
  data() {
    return {
      basicUsage: "基础用法",
      showBadge: "徽标提示",
      radioMode: "单选模式",
      multipleMode: "多选模式",
      customContent: "自定义内容",
      data: zhCNData,
      dataSimple: [{ text: "分组 1" }, { text: "分组 2" }],
      activeId: 1,
      activeId2: 1,
      activeIds: [1, 2],
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      activeIndex4: 0,
    };
  },

  computed: {
    items() {
      return this.data;
    },

    simpleItems() {
      return this.dataSimple;
    },

    badgeItems() {
      const data = JSON.parse(JSON.stringify(this.data)).slice(0, 2);

      data[0].dot = true;
      data[1].badge = 5;

      return data;
    },
  },
};
</script>
