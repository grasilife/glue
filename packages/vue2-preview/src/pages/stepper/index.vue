<template>
  <glue-doc-section>
    <glue-cell center :title="basicUsage">
      <glue-stepper :model-value="stepper1" />
    </glue-cell>

    <glue-cell center :title="step">
      <glue-stepper :model-value="stepper2" step="2" />
    </glue-cell>

    <glue-cell center :title="range">
      <glue-stepper :model-value="stepper3" :min="5" :max="8" />
    </glue-cell>

    <glue-cell center :title="integer">
      <glue-stepper :model-value="stepper4" integer />
    </glue-cell>

    <glue-cell center :title="disabled">
      <glue-stepper :model-value="stepper5" disabled />
    </glue-cell>

    <glue-cell center :title="disableInput">
      <glue-stepper :model-value="disabledInput" disable-input />
    </glue-cell>

    <glue-cell center :title="decimalLength">
      <glue-stepper :model-value="stepper8" :decimal-length="1" step="0.2" />
    </glue-cell>

    <glue-cell center :title="customSize">
      <glue-stepper
        :model-value="stepper7"
        button-size="32px"
        input-width="40px"
      />
    </glue-cell>

    <glue-cell center :title="asyncChange">
      <glue-stepper :value="stepper6" async-change @glueChange="onChange" />
    </glue-cell>

    <glue-cell center :title="roundTheme">
      <glue-stepper
        :model-value="stepperRound"
        theme="round"
        button-size="22"
        disable-input
      />
    </glue-cell>
  </glue-doc-section>
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
      disabledInput: 1,
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
    },
  },
};
</script>
