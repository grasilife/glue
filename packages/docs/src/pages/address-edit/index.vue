<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="areaColumnsPlaceholder"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </DemoBlock>
  </DemoSection>
</template>

<script>
import areaList from "./area";

export default {
  data() {
    return {
      basicUsage: "基础用法",
      areaColumnsPlaceholder: ["请选择", "请选择", "请选择"],
      searchResult: [
        {
          name: "黄龙万科中心",
          address: "杭州市西湖区"
        },
        {
          name: "黄龙万科中心G座"
        },
        {
          name: "黄龙万科中心H座",
          address: "杭州市西湖区"
        }
      ],
      areaList
    };
  },

  methods: {
    onSave() {
      this.$toast(this.save);
    },

    onDelete() {
      this.$toast(this.delete);
    },

    onChangeDetail(val) {
      this.searchResult = val ? this.searchResult : [];
    }
  }
};
</script>

<style lang="less">
.demo-address-edit {
  .van-doc-DemoBlock__title {
    padding-bottom: 0;
  }
}
</style>
