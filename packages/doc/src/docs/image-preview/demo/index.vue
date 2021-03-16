<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell is-link @click="showImagePreview">
        {{ showImages }}
      </van-cell>
    </demo-block>

    <DemoBlock card :title="customConfig">
      <van-cell is-link @click="showImagePreview({ startPosition: 1 })">
        {{ startPosition }}
      </van-cell>
      <van-cell is-link @click="showImagePreview({ closeable: true })">
        {{ showClose }}
      </van-cell>
      <van-cell is-link @click="showImagePreview({ onClose })">
        {{ closeEvent }}
      </van-cell>
    </demo-block>

    <DemoBlock card :title="asyncClose">
      <van-cell is-link @click="showImagePreview({ asyncClose: true })">
        {{ asyncClose }}
      </van-cell>
    </demo-block>

    <DemoBlock card :title="componentCallTitle">
      <van-cell is-link @click="componentCall">
        {{ componentCallTitle }}
      </van-cell>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template #index>{{ index }}</template>
      </van-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
// import ImagePreview from "..";

const images = [
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
  "https://img.yzcdn.cn/vant/apple-3.jpg",
  "https://img.yzcdn.cn/vant/apple-4.jpg"
];

export default {
  data() {
    return {
      basicUsage: "基础用法",
      closed: "关闭",
      showClose: "展示关闭按钮",
      showImages: "预览图片",
      asyncClose: "异步关闭",
      closeEvent: "监听关闭事件",
      customConfig: "传入配置项",
      startPosition: "指定初始位置",
      componentCallTitle: "组件调用",
      index: index => `第${index + 1}页`,
      show: false,
      images
    };
  },

  methods: {
    onClose() {
      this.$toast(this.closed);
    },

    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(options) {
      const instance = ImagePreview({
        images,
        ...options
      });

      if (options.asyncClose) {
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    }
  }
};
</script>
