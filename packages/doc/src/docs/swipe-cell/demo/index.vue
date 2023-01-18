<template>
  <div>
    <DemoSection>
      <DemoBlock :title="basicUsage">
        <glue-swipe-cell left="#slot" right="#slot">
          <div slot="left">
            <glue-button square type="primary">{{ select }}</glue-button>
          </div>
          <glue-cell :border="false" :title="title" :value="content" />
          <div slot="right">
            <glue-button square type="danger" :text="deleteTitle">{{ deleteTitle }}</glue-button>
            <glue-button square type="primary" :text="collect">{{ collect }}</glue-button>
          </div>
        </glue-swipe-cell>
      </DemoBlock>

      <DemoBlock :title="customContent">
        <glue-swipe-cell left="#slot" right="#slot">
          <van-card num="2" price="2.00" :desc="desc" :title="cardTitle" :thumb="imageURL" />
          <div slot="right" class="delete-button">
            <glue-button square type="danger" class="delete-button">{{ deleteTitle }}</glue-button>
          </div>
        </glue-swipe-cell>
      </DemoBlock>
    </DemoSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "描述",
      content: "内容",
      basicUsage: "基础用法",
      select: "选择",
      deleteTitle: "删除",
      collect: "收藏",
      title: "单元格",
      confirm: "确定删除吗？",
      cardTitle: "商品标题",
      customContent: "自定义内容",
      imageURL: "https://img.yzcdn.cn/vant/ipad.jpeg"
    };
  },

  methods: {}
};
</script>

<style lang="less">
@import "~/common/style/var2.less";

.demo-swipe-cell {
  user-select: none;

  .glue-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>
