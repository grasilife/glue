import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
const EMPTY_IMAGE = 'https://img01.yzcdn.cn/vant/coupon-empty.png';
@Component({
  tag: 'glue-coupon-list',
  styleUrl: 'glue-coupon-list.less',
  shadow: false,
})
export class GlueCouponList {
  @Prop() first: string;
  @Prop() code: string;
  @Prop() enabledTitle: string;
  @Prop() disabledTitle: string;
  @Prop() closeButtonText: string;
  @Prop() inputPlaceholder: string;
  @Prop() exchangeButtonText: string;
  @Prop() exchangeButtonLoading: boolean;
  @Prop() exchangeButtonDisabled: boolean;
  @Prop() exchangeMinLength = 1;
  @Prop() chosenCoupon = -1;
  @Prop() coupons = [];
  @Prop() disabledCoupons = [];
  @Prop() displayedCouponIndex = -1;
  @Prop() showExchangeBar = true;
  @Prop() showCloseButton = true;
  @Prop() showCount = true;
  @Prop() currency = '¥';
  @Prop() emptyImage = EMPTY_IMAGE;
  @State() tab = 0;
  @State() code2 = '';
  setCouponRefs: HTMLElement;

  // const { height: windowHeight } = useWindowSize();

  buttonDisabled = () => !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.code2 || this.code2.length < this.exchangeMinLength);

  listStyle = () => ({
    // height: windowHeight.value - (this.showExchangeBar ? 140 : 94) + 'px',
  });

  onExchange = () => {
    // emit('exchange', this.code);

    // auto clear currentCode when not use vModel
    if (!this.code) {
      this.code = '';
    }
  };

  scrollToCoupon = index => {
    // nextTick(() => {
    //   if (couponRefs.value[index]) {
    //     couponRefs.value[index].scrollIntoView();
    //   }
    // });
  };

  renderEmpty = () => (
    <div class="glue-coupon-list__empty">
      <img src={this.emptyImage} />
      <p>空</p>
    </div>
  );

  renderExchangeBar = () => {
    if (this.showExchangeBar) {
      return (
        <div class="glue-coupon-list__exchange-bar">
          <glue-field clearable border={false} class="glue-coupon-list__field" placeholder={this.inputPlaceholder || '提示'} maxlength="20" />
          <glue-button
            plain
            type="danger"
            class="glue-coupon-list__exchange"
            text={this.exchangeButtonText || '交换'}
            loading={this.exchangeButtonLoading}
            disabled={this.buttonDisabled()}
            onClick={this.onExchange}
          />
        </div>
      );
    }
  };

  renderCouponTab = () => {
    const { coupons } = this;
    const count = this.showCount ? ` (${coupons.length})` : '';
    const title = (this.enabledTitle || '开启') + count;

    return (
      <glue-tab title={title}>
        <div
          class={classNames('glue-coupon-list__list', {
            'glue-coupon-list__with-bottom': this.showCloseButton,
          })}
          style={this.listStyle()}
        >
          {coupons.map((coupon, index) => (
            <glue-coupon
              key={coupon.id}
              ref={dom => {
                this.setCouponRefs = dom;
              }}
              coupon={coupon}
              chosen={index === this.chosenCoupon}
              currency={this.currency}
              onClick={() => {
                // emit('change', index);
              }}
            />
          ))}
          {!coupons.length && this.renderEmpty()}
        </div>
      </glue-tab>
    );
  };

  renderDisabledTab = () => {
    const { disabledCoupons } = this;
    const count = this.showCount ? ` (${disabledCoupons.length})` : '';
    const title = (this.disabledTitle || '关闭') + count;

    return (
      <glue-tab title={title}>
        <div
          class={classNames('glue-coupon-list__list', {
            'glue-coupon-list__with-bottom': this.showCloseButton,
          })}
          style={this.listStyle()}
        >
          {disabledCoupons.map(coupon => (
            <glue-coupon disabled key={coupon.id} coupon={coupon} currency={this.currency} />
          ))}
          {!disabledCoupons.length && this.renderEmpty()}
        </div>
      </glue-tab>
    );
  };
  render() {
    return (
      <Host class="glue-coupon-list">
        {this.renderExchangeBar()}
        <glue-tabs class="glue-coupon-list__tab" border={false}>
          {this.renderCouponTab()}
          {this.renderDisabledTab()}
        </glue-tabs>
        <div class="glue-coupon-list__bottom">
          <glue-button
            v-show={this.showCloseButton}
            round
            block
            type="danger"
            class="glue-coupon-list__close"
            text={this.closeButtonText || '关闭'}
            onClick={() => {
              // emit('change', -1);
            }}
          />
        </div>
      </Host>
    );
  }
}
