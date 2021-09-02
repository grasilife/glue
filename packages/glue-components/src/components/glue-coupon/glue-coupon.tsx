import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { RED } from '../../global/constant/constant';
import { padZero } from '../../utils/format/string';
function getDate(timeStamp) {
  const date = new Date(timeStamp * 1000);
  return `${date.getFullYear()}.${padZero(date.getMonth() + 1)}.${padZero(
    date.getDate()
  )}`;
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(
    amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2
  );
}
@Component({
  tag: 'glue-coupon',
  styleUrl: 'glue-coupon.less',
  shadow: false,
})
export class GlueCoupon {
  @Prop() coupon: any;
  @Prop() chosen: boolean;
  @Prop() disabled: boolean;
  @Prop() currency = '¥';
  validPeriod = () => {
    const { startAt, endAt } = this.coupon;
    return `${getDate(startAt)} - ${getDate(endAt)}`;
  };

  faceAmount = () => {
    const { coupon, currency } = this;

    if (coupon.valueDesc) {
      return [coupon.valueDesc, <span>{coupon.unitDesc || ''}</span>];
    }

    if (coupon.denominations) {
      const denominations = formatAmount(coupon.denominations);
      return [<span>{currency}</span>, ` ${denominations}`];
    }

    if (coupon.discount) {
      return formatDiscount(coupon.discount);
    }

    return '';
  };
  conditionMessage = () => {
    const condition = formatAmount(this.coupon.originCondition);
    return condition === '0' ? '无限的' : '条件';
  };
  render() {
    const { chosen, coupon, disabled } = this;
    const description = (disabled && coupon.reason) || coupon.description;
    return (
      <Host
        class={classNames({
          'glue-coupon--disabled': disabled,
        })}
      >
        <div class="glue-coupon__content">
          <div class="glue-coupon__head">
            <h2 class="glue-coupon__amount">{this.faceAmount()}</h2>
            <p class="glue-coupon__condition">
              {coupon.condition || this.conditionMessage()}
            </p>
          </div>
          <div class="glue-coupon__body">
            <p class="glue-coupon__name">{coupon.name}</p>
            <p class="glue-coupon__valid">{this.validPeriod()}</p>
            {!disabled && (
              <glue-checkbox
                class="glue-coupon__corner"
                model-value={chosen}
                checkedColor={RED}
              />
            )}
          </div>
        </div>
        {description && <p class="glue-coupon__description">{description}</p>}
      </Host>
    );
  }
}
