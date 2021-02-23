<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <glue-nav-bar
        :title="title"
        :left-text="back"
        :right-text="button"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></glue-nav-bar>
    </demo-block>

    <demo-block :title="useSlot">
      <van-nav-bar :title="title" :left-text="back" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      button: "按钮",
      title: "标题",
      basicUsage: "基础用法",
      useSlot: "使用插槽",
      back: "返回"
    };
  },
  methods: {
    onClickLeft() {
      this.$toast(this.back);
    },
    onClickRight() {
      this.$toast(this.button);
    }
  }
};
</script>
