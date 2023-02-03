<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="basicUsage">
      <glue-count-down :time="time" auto-start />
    </glue-doc-block>

    <glue-doc-block :gtitle="customFormat">
      <glue-count-down :time="time" :format="formatWithDay" auto-start />
    </glue-doc-block>

    <glue-doc-block :gtitle="millisecond">
      <glue-count-down
        millisecond
        :time="time"
        format="HH:mm:ss:SS"
        auto-start
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="customStyle">
      <glue-count-down :time="time" custom @glueChange="glueChange" auto-start>
        <span class="block">{{ currentTime.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.seconds }}</span>
      </glue-count-down>
    </glue-doc-block>

    <glue-doc-block :gtitle="manualControl">
      <glue-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="$toast(finished)"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item icon="play-circle-o" :text="startTitle" @click="start" />
        <van-grid-item
          icon="pause-circle-o"
          :text="pauseTitle"
          @click="pause"
        />
        <van-grid-item icon="replay" :text="resetTitle" @click="reset" />
      </van-grid>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      currentTime: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
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
      time: 30 * 60 * 60 * 1000,
    };
  },

  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    glueChange(e) {
      this.currentTime = { ...e.detail.currentTime };
    },
    start() {
      this.$refs.countDown.start();
    },

    pause() {
      this.$refs.countDown.pause();
    },

    reset() {
      this.$refs.countDown.reset();
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-count-down {
  background-color: @white;

  glue-count-down {
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
