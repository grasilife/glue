import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
import { isDef } from '../../utils/base';
function formatValue(props) {
  const { coupons, chosenCoupon, currency } = props;
  const coupon = coupons[+chosenCoupon];

  if (coupon) {
    let value = 0;

    if (isDef(coupon.value)) {
      ({ value } = coupon);
    } else if (isDef(coupon.denominations)) {
      value = coupon.denominations;
    }

    return `-${currency} ${(value / 100).toFixed(2)}`;
  }

  return coupons.length === 0 ? '提示' : coupons.length;
}
@Component({
  tag: 'glue-coupon-cell',
  styleUrl: 'glue-coupon-cell.less',
  shadow: false,
})
export class GlueCouponCell {
  @Prop() gtitle: string;
  @Prop() coupons: [];
  @Prop() currency = '¥';
  @Prop() border = true;
  @Prop() editable = true;
  @Prop() chosenCoupon = -1;

  render() {
    // const selected = this.coupons[+this.chosenCoupon];
    const value = formatValue(this);
    return (
      <Host>
        <glue-cell
          class="glue-coupon-cell"
          value={value}
          gtitle={this.gtitle || '标题'}
          border={this.border}
          isLink={this.editable}
        />
      </Host>
    );
  }
}
