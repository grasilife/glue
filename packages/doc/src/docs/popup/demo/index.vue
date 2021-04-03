<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell :title="buttonBasic" is-link @click="showBasic = true" />
      <glue-popup :show="showBasic" :style="{ padding: '30px 50px' }" @glueClose="showBasic = false">
        {{ content }}
      </glue-popup>
    </DemoBlock>

    <DemoBlock card :title="position">
      <van-cell :title="buttonTop" is-link @click="showTop = true" @glueClose="showTop = false" />
      <van-cell :title="buttonBottom" is-link @click="showBottom = true" @glueClose="showBottom = false" />
      <van-cell :title="buttonLeft" is-link @click="showLeft = true" @glueClose="showLeft = false" />
      <van-cell :title="buttonRight" is-link @click="showRight = true" @glueClose="showRight = false" />

      <glue-popup :show="showTop" position="top" width="100%" height="30%" @glueClose="showTop = false" />
      <!-- <glue-popup :show="showBottom" position="bottom" width="100%" height="30%" @glueClose="showBottom = false" />
      <glue-popup :show="showLeft" position="left" width="30%" height="100%" @glueClose="showLeft = false" />
      <glue-popup :show="showRight" position="right" width="30%" height="100%" @glueClose="showRight = false" /> -->
    </DemoBlock>

    <!-- <DemoBlock card :title="closeIcon">
      <van-cell :title="closeIcon" is-link @click="showCloseIcon = true" />
      <van-cell :title="customCloseIcon" is-link @click="showCustomCloseIcon = true" />
      <van-cell :title="customIconPosition" is-link @click="showCustomIconPosition = true" />

      <glue-popup
        :show="showCloseIcon"
        closeable
        position="bottom"
        width="100%"
        height="30%"
        @close="showCloseIcon = false"
      />
      <glue-popup
        :show="showCustomCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        width="100%"
        height="30%"
        @close="showCustomCloseIcon = false"
      />
      <glue-popup
        :show="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        width="100%"
        height="30%"
        @close="showCustomIconPosition = false"
      />
    </DemoBlock>

    <DemoBlock card :title="roundCorner">
      <van-cell :title="roundCorner" is-link @click="showRoundCorner = true" />
      <glue-popup
        :show="showRoundCorner"
        round
        position="bottom"
        width="100%"
        height="30%"
        @close="showRoundCorner = false"
      />
    </DemoBlock>

    <DemoBlock card :title="getContainer">
      <van-cell :title="getContainer" is-link @click="showGetContainer = true" />
      <glue-popup
        :show="showGetContainer"
        get-container="body"
        :style="{ padding: '30px 50px' }"
        @close="showGetContainer = false"
      />
    </DemoBlock> -->
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      content: "内容",
      basicUsage: "基础用法",
      position: "弹出位置",
      buttonBasic: "展示弹出层",
      buttonTop: "顶部弹出",
      buttonBottom: "底部弹出",
      buttonLeft: "左侧弹出",
      buttonRight: "右侧弹出",
      getContainer: "指定挂载节点",
      roundCorner: "圆角弹窗",
      closeIcon: "关闭图标",
      customCloseIcon: "自定义图标",
      customIconPosition: "图标位置",
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showCloseIcon: false,
      showRoundCorner: false,
      showGetContainer: false,
      showCustomCloseIcon: false,
      showCustomIconPosition: false
    };
  },
  methods: {
    close(e) {
      console.log(e, "hauhauhuahu");
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-popup {
  .van-row {
    margin-bottom: @padding-md;
  }

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
