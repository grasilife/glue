<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-steps :active="active">
        <glue-step>{{ step1 }}</glue-step>
        <glue-step>{{ step2 }}</glue-step>
        <glue-step>{{ step3 }}</glue-step>
        <glue-step>{{ step4 }}</glue-step>
      </glue-steps>

      <glue-button @click="nextStep">{{ nextStepTitle }}</glue-button>
    </DemoBlock>

    <DemoBlock :title="customStyle">
      <glue-steps :active="active" active-icon="success" inactive-icon="arrow" active-color="#38f">
        <glue-step>{{ step1 }}</glue-step>
        <glue-step>{{ step2 }}</glue-step>
        <glue-step>{{ step3 }}</glue-step>
        <glue-step>{{ step4 }}</glue-step>
      </glue-steps>
    </DemoBlock>

    <DemoBlock :title="title3">
      <glue-steps :active="0" direction="vertical">
        <glue-step>
          <h3>{{ status1 }}</h3>
          <p>2016-07-12 12:40</p>
        </glue-step>
        <glue-step>
          <h3>{{ status2 }}</h3>
          <p>2016-07-11 10:00</p>
        </glue-step>
        <glue-step>
          <h3>{{ status3 }}</h3>
          <p>2016-07-10 09:30</p>
        </glue-step>
      </glue-steps>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      nextStepTitle: "下一步",
      step1: "买家下单",
      step2: "商家接单",
      step3: "买家提货",
      step4: "交易完成",
      title2: "描述信息",
      title3: "竖向步骤条",
      status1: "【城市】物流状态1",
      status2: "【城市】物流状态",
      status3: "快件已发货",
      customStyle: "自定义样式",
      active: 1
    };
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4;
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-steps {
  .steps-success,
  .glue-icon-location {
    color: @green;
  }

  .glue-button {
    margin: @padding-md 0 0 @padding-md;
  }

  p,
  h3 {
    margin: 0;
    font-weight: normal;
    font-size: inherit;
  }

  .glue-steps__message + p {
    margin-bottom: 10px;
  }
}
</style>
