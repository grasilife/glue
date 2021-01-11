import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
@Component({
  tag: 'glue-card',
  styleUrl: 'glue-card.less',
  shadow: false,
})
export class GlueCard {
  @Prop() tag: string;

  @Prop() desc: string;

  @Prop() thumb: string;
  @Prop() title: string;
  @Prop() centered: boolean;
  @Prop() lazyLoad: boolean;
  @Prop() thumbLink: string;
  @Prop() num: string | number;
  @Prop() price: string | number;
  @Prop() originPrice: string | number;
  @Prop() currency = '¥';
  @Event({
    eventName: 'checkboxchange',
  })
  onClick: EventEmitter;
  clickThumb = event => {
    this.onClick.emit(event);
  };
  renderTitle = () => {
    if (this.title) {
      return <div class={classNames('glue-card__title', 'glue-multi-ellipsis--l2')}>{this.title}</div>;
    }
  };

  renderThumbTag = () => {
    if (this.tag) {
      return <div class={classNames('glue-card__tag')}>{/* <Tag mark type="danger">
            {this.tag}
          </Tag> */}</div>;
    }
  };

  renderThumbImage = () => {
    // return <Image src={this.thumb} width="100%" height="100%" fit="cover" lazyLoad={this.lazyLoad} />;
  };

  renderThumb = () => {
    if (this.thumb) {
      return (
        <a href={this.thumbLink} class={classNames('glue-card__thumb')} onClick={this.clickThumb}>
          {this.renderThumbImage()}
          {this.renderThumbTag()}
        </a>
      );
    }
  };

  renderDesc = () => {
    if (this.desc) {
      return <div class={classNames('glue-card__desc', 'glue-ellipsis')}>{this.desc}</div>;
    }
  };

  renderPriceText = () => {
    const priceArr = this.price.toString().split('.');
    return (
      <div>
        <span class={classNames('glue-card__price-currency')}>{this.currency}</span>
        <span class={classNames('glue-card__price-integer')}>{priceArr[0]}</span>.<span class={classNames('glue-card__price-decimal')}>{priceArr[1]}</span>
      </div>
    );
  };
  render() {
    const showNum = isDef(this.num);
    const showPrice = isDef(this.price);
    const showOriginPrice = isDef(this.originPrice);
    const showBottom = showNum || showPrice || showOriginPrice;
    const Price = showPrice && <div class={classNames('glue-card__price')}>{this.renderPriceText()}</div>;

    const OriginPrice = showOriginPrice && <div class={classNames('glue-card__origin-price')}>{`${this.currency} ${this.originPrice}`}</div>;

    const Num = showNum && <div class={classNames('glue-card__num')}>{`x${this.num}`}</div>;

    const Footer = <div class={classNames('glue-card__footer')}>1111</div>;
    const Bottom = showBottom && (
      <div class={classNames('glue-card__bottom')}>
        {Price}
        {OriginPrice}
        {Num}
      </div>
    );
    return (
      <Host class={classNames('glue-card')}>
        <div class={classNames('glue-card__header')}>
          {this.renderThumb()}
          <div
            class={
              (classNames('glue-card__content'),
              {
                ' glue-card__centered': this.centered,
              })
            }
          >
            <div>
              {this.renderTitle()}
              {this.renderDesc()}
            </div>
            {Bottom}
          </div>
        </div>
        {Footer}
      </Host>
    );
  }
}
