<template>
  <demo-section>
    <demo-block card :title="basicUsage">
      <van-cell :title="buttonBasic" is-link @click="showBasic = true" />
      <glue-popup :show="showBasic" :style="{ padding: '30px 50px' }">
        {{ content }}
      </glue-popup>
    </demo-block>

    <demo-block card :title="position">
      <van-cell :title="buttonTop" is-link @click="showTop = true" />
      <van-cell :title="buttonBottom" is-link @click="showBottom = true" />
      <van-cell :title="buttonLeft" is-link @click="showLeft = true" />
      <van-cell :title="buttonRight" is-link @click="showRight = true" />

      <glue-popup :show="showTop" position="top" width="100%" height="30%" />
      <glue-popup :show="showBottom" position="bottom" width="100%" height="30%" />
      <glue-popup :show="showLeft" position="left" width="30%" height="100%" />
      <glue-popup :show="showRight" position="right" width="30%" height="100%" />
    </demo-block>

    <demo-block card :title="closeIcon">
      <van-cell :title="closeIcon" is-link @click="showCloseIcon = true" />
      <van-cell :title="customCloseIcon" is-link @click="showCustomCloseIcon = true" />
      <van-cell :title="customIconPosition" is-link @click="showCustomIconPosition = true" />

      <glue-popup :show="showCloseIcon" closeable position="bottom" width="100%" height="30%" />
      <glue-popup
        :show="showCustomCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        width="100%"
        height="30%"
      />
      <glue-popup
        :show="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        width="100%"
        height="30%"
      />
    </demo-block>

    <demo-block card :title="roundCorner">
      <van-cell :title="roundCorner" is-link @click="showRoundCorner = true" />
      <glue-popup :show="showRoundCorner" round position="bottom" width="100%" height="30%" />
    </demo-block>

    <demo-block card :title="getContainer">
      <van-cell :title="getContainer" is-link @click="showGetContainer = true" />
      <glue-popup :show="showGetContainer" get-container="body" :style="{ padding: '30px 50px' }" />
    </demo-block>
  </demo-section>
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
