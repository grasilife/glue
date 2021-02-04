<template>
  <demo-section>
    <demo-block card :title="basicUsage">
      <van-cell :title="buttonBasic" is-link @click="showBasic = true" />
      <van-popup v-model="showBasic" :style="{ padding: '30px 50px' }">
        {{ content }}
      </van-popup>
    </demo-block>

    <demo-block card :title="position">
      <van-cell :title="buttonTop" is-link @click="showTop = true" />
      <van-cell :title="buttonBottom)" is-link @click="showBottom = true" />
      <van-cell :title="buttonLeft" is-link @click="showLeft = true" />
      <van-cell :title="buttonRight" is-link @click="showRight = true" />

      <van-popup v-model="showTop" position="top" :style="{ height: '30%' }" />
      <van-popup
        v-model="showBottom"
        position="bottom"
        :style="{ height: '30%' }"
      />
      <van-popup
        v-model="showLeft"
        position="left"
        :style="{ width: '30%', height: '100%' }"
      />
      <van-popup
        v-model="showRight"
        position="right"
        :style="{ width: '30%', height: '100%' }"
      />
    </demo-block>

    <demo-block card :title="closeIcon">
      <van-cell :title="closeIcon" is-link @click="showCloseIcon = true" />
      <van-cell
        :title="customCloseIcon"
        is-link
        @click="showCustomCloseIcon = true"
      />
      <van-cell
        :title="customIconPosition"
        is-link
        @click="showCustomIconPosition = true"
      />

      <van-popup
        v-model="showCloseIcon"
        closeable
        position="bottom"
        :style="{ height: '30%' }"
      />
      <van-popup
        v-model="showCustomCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      />
      <van-popup
        v-model="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '30%' }"
      />
    </demo-block>

    <demo-block card :title="roundCorner">
      <van-cell :title="roundCorner" is-link @click="showRoundCorner = true" />
      <van-popup
        v-model="showRoundCorner"
        round
        position="bottom"
        :style="{ height: '30%' }"
      />
    </demo-block>

    <demo-block card v-if="!isWeapp" :title="getContainer">
      <van-cell
        :title="getContainer"
        is-link
        @click="showGetContainer = true"
      />
      <van-popup
        v-model="showGetContainer"
        get-container="body"
        :style="{ padding: '30px 50px' }"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
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
      showCustomIconPosition: false,
    };
  },
};
</script>

<style lang="less">
@import "../../style/var";

.demo-popup {
  .van-row {
    margin-bottom: @padding-md;
  }

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
