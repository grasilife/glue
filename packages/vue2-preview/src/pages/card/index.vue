<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <van-card
        num="2"
        price="2.00"
        :desc="desc"
        :title="title"
        :thumb="imageURL"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="discountInfo">
      <van-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="tag"
        :desc="desc"
        :title="title"
        :thumb="imageURL"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="customContent">
      <van-card
        num="2"
        price="2.00"
        :desc="desc"
        :title="title"
        :thumb="imageURL"
      >
        <template #tags>
          <div>
            <van-tag plain type="danger" style="margin-right: 5px">
              标签
            </van-tag>
            <van-tag plain type="danger"> 标签 </van-tag>
          </div>
        </template>

        <template #footer>
          <div>
            <van-button round size="mini">
              {{ button }}
            </van-button>
            <van-button round size="mini">
              {{ button }}
            </van-button>
          </div>
        </template>
      </van-card>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      tag: "标签",
      desc: "描述信息",
      button: "按钮",
      basicUsage: "基础用法",
      title: "商品名称",
      discountInfo: "营销信息",
      customContent: "自定义内容",
      imageURL: "https://img.yzcdn.cn/vant/ipad.jpeg",
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-card {
  background-color: @white;
}
</style>
