<template>
  <glue-doc-section>
    <glue-doc-block card :gtitle="basicUsage">
      <van-area :title="title" :area-list="areaList" />
    </glue-doc-block>

    <glue-doc-block card :gtitle="title2">
      <van-area :title="title" :area-list="areaList" :value="value" />
    </glue-doc-block>

    <glue-doc-block card :gtitle="title3">
      <van-area :title="title" :area-list="areaList" :columns-num="2" />
    </glue-doc-block>

    <glue-doc-block card :gtitle="title4">
      <van-area
        :title="title"
        :area-list="areaList"
        :columns-placeholder="columnsPlaceholder"
      />
    </glue-doc-block>
  </glue-doc-section>
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
      areaList: AreaList,
    };
  },
};
</script>
