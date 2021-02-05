<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

      <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          :show-count="false"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      coupon: {
        basicUsage: "基础用法",
        id: 1,
        condition: "无使用门槛\n最多优惠12元",
        reason: "优惠券不可用原因",
        value: 150,
        name: "优惠券名称",
        description: "描述信息",
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: "1.5",
        unitDesc: "元"
      },
      exchange: "兑换成功",
      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: []
    };
  },

  computed: {
    coupons() {
      return [this.coupon, this.discountCoupon, ...this.exchangedCoupons];
    },

    disabledCoupons() {
      return [this.disabledCoupon, this.disabledDiscountCoupon];
    },

    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        value: 12,
        valueDesc: "8.8",
        unitDesc: "折"
      };
    },

    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        reason: this.coupon.reason
      };
    },

    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        valueDesc: "1",
        unitDesc: "折",
        id: 4,
        reason: this.coupon.reason
      };
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.$toast(this.exchange);
      this.exchangedCoupons.push({
        ...this.coupon,
        id: this.randomId()
      });
    },
    randomId(max = 999999) {
      return Math.floor(Math.random() * max) + 1;
    }
  }
};
</script>
