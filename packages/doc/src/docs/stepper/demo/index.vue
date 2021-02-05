<template>
  <demo-section>
    <van-cell center :title="basicUsage">
      <van-stepper v-model="stepper1" />
    </van-cell>

    <van-cell center :title="step">
      <van-stepper v-model="stepper2" step="2" />
    </van-cell>

    <van-cell center :title="range">
      <van-stepper v-model="stepper3" :min="5" :max="8" />
    </van-cell>

    <van-cell center :title="integer">
      <van-stepper v-model="stepper4" integer />
    </van-cell>

    <van-cell center :title="disabled">
      <van-stepper v-model="stepper5" disabled />
    </van-cell>

    <van-cell center :title="disableInput">
      <van-stepper v-model="disabledInput" disable-input />
    </van-cell>

    <van-cell center :title="decimalLength">
      <van-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </van-cell>

    <van-cell center :title="customSize">
      <van-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    </van-cell>

    <van-cell center :title="asyncChange">
      <van-stepper :value="stepper6" async-change @change="onChange" />
    </van-cell>

    <van-cell center :title="roundTheme">
      <van-stepper
        v-model="stepperRound"
        theme="round"
        button-size="22"
        disable-input
      />
    </van-cell>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      disabled: "禁用",
      basicUsage: "基础用法",
      title1: "基础用法",
      step: "步长设置",
      range: "限制输入范围",
      integer: "限制输入整数",
      roundTheme: "圆角风格",
      asyncChange: "异步变更",
      customSize: "自定义大小",
      disableInput: "禁用输入框",
      decimalLength: "固定小数位数",
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1,
      stepperRound: 1,
      disabledInput: 1
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    }
  }
};
</script>
