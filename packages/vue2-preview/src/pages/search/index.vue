<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <glue-search :modelValue="value1" :placeholder="placeholder" />
    </glue-doc-block>

    <glue-doc-block :gtitle="listenToEvents">
      <form action="/">
        <glue-search
          :modelValue="value5"
          :placeholder="placeholder"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </glue-doc-block>

    <glue-doc-block :gtitle="inputAlign">
      <glue-search
        :modelValue="value4"
        :placeholder="placeholder"
        input-align="center"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="disabled">
      <glue-search :modelValue="value3" :placeholder="placeholder" disabled />
    </glue-doc-block>

    <glue-doc-block :gtitle="background">
      <glue-search
        :modelValue="value2"
        :placeholder="placeholder"
        shape="round"
        background="#4fc08d"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="customButton">
      <glue-search
        :modelValue="value6"
        show-action
        :label="label"
        :placeholder="placeholder"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch(value6)">{{ search }}</div>
        </template>
      </glue-search>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      cancel: "取消",
      search: "搜索",
      basicUsage: "基础用法",
      label: "地址",
      disabled: "禁用搜索框",
      inputAlign: "搜索框内容对齐",
      background: "自定义背景色",
      placeholder: "请输入搜索关键词",
      customButton: "自定义按钮",
      listenToEvents: "事件监听",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
    };
  },

  methods: {
    onSearch(val) {
      this.$toast(val);
    },

    onCancel() {
      this.$toast(this.cancel);
    },
  },
};
</script>
