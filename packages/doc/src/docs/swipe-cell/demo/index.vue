<template>
  <div>
    <demo-section>
      <demo-block :title="basicUsage">
        <van-swipe-cell>
          <template #left>
            <van-button square type="primary" :text="select" />
          </template>
          <van-cell :border="false" :title="title" :value="content" />
          <template #right>
            <van-button square type="danger" :text="deleteTitle" />
            <van-button square type="primary" :text="collect" />
          </template>
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="customContent">
        <van-swipe-cell>
          <van-card num="2" price="2.00" :desc="desc" :title="cardTitle" :thumb="imageURL" />
          <template #right>
            <van-button square type="danger" class="delete-button" :text="deleteTitle" />
          </template>
        </van-swipe-cell>
      </demo-block>

      <demo-block :title="beforeCloseTitle">
        <van-swipe-cell :before-close="beforeClose">
          <template #left>
            <van-button square type="primary" :text="select" />
          </template>
          <van-cell :border="false" :title="title" :value="content" />
          <template #right>
            <van-button square type="danger" :text="deleteTitle" />
          </template>
        </van-swipe-cell>
      </demo-block>
    </demo-section>
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
      beforeCloseTitle: "异步关闭",
      customContent: "自定义内容",
      imageURL: "https://img.yzcdn.cn/vant/ipad.jpeg"
    };
  },

  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: this.confirm
            })
            .then(() => {
              instance.close();
            });
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-swipe-cell {
  user-select: none;

  .van-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>
