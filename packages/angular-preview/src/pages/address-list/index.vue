<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        :disabled-text="disabledText"
        :default-tag-text="defaultTagText"
        @add="onAdd"
        @edit="onEdit"
      />
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      basicUsage: "基础用法",
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
      add: "新增地址",
      edit: "编辑地址",
      disabledText: "以下地址超出配送范围",
      defaultTagText: "默认",
    };
  },

  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    onAdd() {
      this.$toast(this.add);
    },

    onEdit(item, index) {
      this.$toast(`${this.edit}:${index}`);
    },
  },
};
</script>

<style lang="less">
.demo-address-list {
  .van-doc-glue-doc-block__title {
    padding-bottom: 0;
  }
}
</style>
