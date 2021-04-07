import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-nav-bar');
import { BORDER_BOTTOM } from '../../global/constant/constant';
@Component({
  tag: 'glue-nav-bar',
  styleUrl: 'glue-nav-bar.less',
  shadow: false,
})
export class GlueNavBar {
  @Prop() title: string;
  @Prop() fixed: boolean;
  @Prop() zIndex: string | number;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @Prop() leftArrow: boolean;
  @Prop() placeholder: boolean;
  @Prop() safeAreaInsetTop: boolean;
  @Prop() border = true;
  @Event() clickLeft: EventEmitter;
  @Event() clickRight: EventEmitter;
  navBarRef: HTMLElement;
  // renderPlaceholder = this.usePlaceholder(navBarRef, bem);
  renderPlaceholder = '';
  onClickLeft = (event: MouseEvent) => {
    this.clickLeft.emit(event);
  };

  onClickRight = (event: MouseEvent) => {
    this.clickRight.emit(event);
  };

  renderLeft = () => {
    return [this.leftArrow && <glue-icon class="glue-nav-bar__arrow" name="arrow-left" />, this.leftText && <span class="glue-nav-bar__text">{this.leftText}</span>];
  };

  renderRight = () => {
    return <span class="glue-nav-bar__text">{this.rightText}</span>;
  };
  renderNavBar = () => {
    const { title, fixed, border } = this;
    const style = {
      // zIndex: (zIndex !== undefined ? +zIndex : undefined).toString(),
    };

    const hasLeft = this.leftArrow || this.leftText;
    const hasRight = this.rightText;

    return (
      <div
        ref={dom => {
          this.navBarRef = dom;
        }}
        class={classNames('safe-area-inset-top', bem([fixed]), {
          'glue-nav-bar__safeAreaInsetTop': this.safeAreaInsetTop,
          [BORDER_BOTTOM]: border,
        })}
        style={style}
      >
        <div class="glue-nav-bar__content">
          {hasLeft && (
            <div class="glue-nav-bar__left" onClick={this.onClickLeft}>
              {this.renderLeft()}
            </div>
          )}
          <div class="glue-nav-bar__title glue-ellipsis">{title}</div>
          {hasRight && (
            <div class="glue-nav-bar__right" onClick={this.onClickRight}>
              {this.renderRight()}
            </div>
          )}
        </div>
      </div>
    );
  };
  render() {
    return <Host class="glue-nav-bar">{this.renderNavBar()}</Host>;
    // return () => {
    //   // if (this.fixed && this.placeholder) {
    //   //   return this.renderPlaceholder(this.renderNavBar);
    //   // }
    //   return this.renderNavBar();
    // };
  }
}
