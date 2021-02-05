<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-count-down :time="time" />
    </demo-block>

    <demo-block :title="customFormat">
      <van-count-down :time="time" :format="formatWithDay" />
    </demo-block>

    <demo-block :title="millisecond">
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </demo-block>

    <demo-block :title="customStyle">
      <van-count-down :time="time">
        <template #default="currentTime">
          <span class="block">{{ currentTime.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ currentTime.seconds }}</span>
        </template>
      </van-count-down>
    </demo-block>

    <demo-block :title="manualControl">
      <van-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="$toast(finished)"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item icon="play-circle-o" :text="startTitle" @click="start" />
        <van-grid-item icon="pause-circle-o" :text="pauseTitle" @click="pause" />
        <van-grid-item icon="replay" :text="resetTitle" @click="reset" />
      </van-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      millisecond: "毫秒级渲染",
      customStyle: "自定义样式",
      customFormat: "自定义格式",
      manualControl: "手动控制",
      formatWithDay: "DD 天 HH 时 mm 分 ss 秒",
      resetTitle: "重置",
      pauseTitle: "暂停",
      startTitle: "开始",
      finished: "倒计时结束",
      time: 30 * 60 * 60 * 1000
    };
  },

  methods: {
    start() {
      this.$refs.countDown.start();
    },

    pause() {
      this.$refs.countDown.pause();
    },

    reset() {
      this.$refs.countDown.reset();
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-count-down {
  background-color: @white;

  .van-count-down {
    margin-left: @padding-md;
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @red;
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @red;
    border-radius: 4px;
  }

  .van-grid {
    margin-top: 10px;
  }
}
</style>
