<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-swipe :autoplay="3000" indicator-color="white">
        <glue-swipe-item>1</glue-swipe-item>
        <glue-swipe-item>2</glue-swipe-item>
        <glue-swipe-item>3</glue-swipe-item>
        <glue-swipe-item>4</glue-swipe-item>
      </glue-swipe>
    </glue-doc-block>

    <glue-doc-block :gtitle="title2">
      <glue-swipe :autoplay="3000">
        <glue-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </glue-swipe-item>
      </glue-swipe>
    </glue-doc-block>

    <glue-doc-block :gtitle="title3">
      <glue-swipe indicator-color="white" @change="onChange1">
        <glue-swipe-item>1</glue-swipe-item>
        <glue-swipe-item>2</glue-swipe-item>
        <glue-swipe-item>3</glue-swipe-item>
        <glue-swipe-item>4</glue-swipe-item>
      </glue-swipe>
    </glue-doc-block>

    <glue-doc-block :gtitle="title4">
      <glue-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        style="height: 200px"
        class="demo-swipe--vertical"
      >
        <glue-swipe-item>1</glue-swipe-item>
        <glue-swipe-item>2</glue-swipe-item>
        <glue-swipe-item>3</glue-swipe-item>
        <glue-swipe-item>4</glue-swipe-item>
      </glue-swipe>
    </glue-doc-block>

    <glue-doc-block :gtitle="title5">
      <glue-swipe :width="300" :loop="false" indicator-color="white">
        <glue-swipe-item>1</glue-swipe-item>
        <glue-swipe-item>2</glue-swipe-item>
        <glue-swipe-item>3</glue-swipe-item>
        <glue-swipe-item>4</glue-swipe-item>
      </glue-swipe>
    </glue-doc-block>

    <glue-doc-block :gtitle="title6">
      <glue-swipe @change="onChange2">
        <glue-swipe-item>1</glue-swipe-item>
        <glue-swipe-item>2</glue-swipe-item>
        <glue-swipe-item>3</glue-swipe-item>
        <glue-swipe-item>4</glue-swipe-item>

        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </glue-swipe>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      basicUsage: "基础用法",
      title2: "图片懒加载",
      title3: "监听 change 事件",
      title4: "纵向滚动",
      title5: "自定义滑块大小",
      title6: "自定义指示器",
      message: "当前 Swipe 索引：",
      current: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
    };
  },

  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    onChange1(index) {
      this.$toast(this.message + index);
    },

    onChange2(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-swipe {
  padding-bottom: 30px;

  .glue-swipe {
    &-item {
      color: @white;
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: @white;
      pointer-events: none;
    }
  }

  &--vertical {
    .glue-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: @white;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
