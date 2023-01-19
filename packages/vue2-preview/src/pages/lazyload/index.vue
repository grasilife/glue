<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <img v-for="img in imageList" :key="img" v-lazy="img" />
    </DemoBlock>

    <DemoBlock :title="title2">
      <div
        v-for="img in backgroundImageList"
        :key="img"
        v-lazy:background-image="img"
      />
    </DemoBlock>

    <DemoBlock :title="title3">
      <lazy-component>
        <img v-for="img in componentImageList" :key="img" v-lazy="img" />
      </lazy-component>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      title2: "背景图懒加载",
      title3: "懒加载模块",
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
      backgroundImageList: [
        "https://img.yzcdn.cn/vant/apple-5.jpg",
        "https://img.yzcdn.cn/vant/apple-6.jpg",
      ],
      componentImageList: [
        "https://img.yzcdn.cn/vant/apple-8.jpg",
        "https://img.yzcdn.cn/vant/apple-7.jpg",
      ],
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-lazyload {
  padding-right: @padding-md;
  padding-left: @padding-md;

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: @padding-md;
    padding: @padding-md;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
