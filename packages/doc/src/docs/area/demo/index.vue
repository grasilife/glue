<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-area :title="title" :area-list="areaList" />
    </DemoBlock>

    <DemoBlock card :title="title2">
      <van-area :title="title" :area-list="areaList" :value="value" />
    </DemoBlock>

    <DemoBlock card :title="title3">
      <van-area :title="title" :area-list="areaList" :columns-num="2" />
    </DemoBlock>

    <DemoBlock card :title="title4">
      <van-area :title="title" :area-list="areaList" :columns-placeholder="columnsPlaceholder" />
    </DemoBlock>
  </demo-section>
</template>

<script>
import AreaList from "./area";
import AreaListEn from "./area-en";

export default {
  data() {
    return {
      basicUsage: "基础用法",
      value: "330302",
      title: "标题",
      title2: "选中省市区",
      title3: "配置显示列",
      title4: "配置列占位提示文字",
      columnsPlaceholder: ["请选择", "请选择", "请选择"],
      areaList: AreaList
    };
  }
};
</script>
