<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-steps :active="active">
        <van-step>{{ step1 }}</van-step>
        <van-step>{{ step2 }}</van-step>
        <van-step>{{ step3 }}</van-step>
        <van-step>{{ step4 }}</van-step>
      </van-steps>

      <van-button @click="nextStep">{{ nextStepTitle }}</van-button>
    </demo-block>

    <demo-block :title="customStyle">
      <van-steps
        :active="active"
        active-icon="success"
        inactive-icon="arrow"
        active-color="#38f"
      >
        <van-step>{{ step1 }}</van-step>
        <van-step>{{ step2 }}</van-step>
        <van-step>{{ step3 }}</van-step>
        <van-step>{{ step4 }}</van-step>
      </van-steps>
    </demo-block>

    <demo-block :title="title3">
      <van-steps :active="0" direction="vertical">
        <van-step>
          <h3>{{ status1 }}</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>{{ status2 }}</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>{{ status3 }}</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </demo-block>
  </demo-section>
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
  .van-icon-location {
    color: @green;
  }

  .van-button {
    margin: @padding-md 0 0 @padding-md;
  }

  p,
  h3 {
    margin: 0;
    font-weight: normal;
    font-size: inherit;
  }

  .van-steps__message + p {
    margin-bottom: 10px;
  }
}
</style>
