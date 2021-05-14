import { Component, Prop, h, Event, EventEmitter, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-nav-bar');
import { BORDER_BOTTOM } from '../../global/constant/constant';
import { useRect } from '../../utils/useRect';
@Component({
  tag: 'glue-nav-bar',
  styleUrl: 'glue-nav-bar.less',
  shadow: false,
})
export class GlueNavBar {
  @Prop() title: string;
  @Prop() fixed: boolean;
  @Prop() zIndex: string;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @Prop() leftArrow: boolean;
  @Prop() placeholder: boolean;
  @Prop() safeAreaInsetTop: boolean;
  @Prop() border = true;
  @State() height = 0;
  @Event() glueLeft: EventEmitter;
  @Event() glueRight: EventEmitter;
  navBarRef: HTMLElement;
  onClickLeft = (event: MouseEvent) => {
    this.glueLeft.emit(event);
  };
  renderPlaceholder = () => {
    if (this.fixed && this.placeholder) {
      return <div class={bem('placeholder')} style={{ height: this.height ? `${this.height}px` : undefined }}></div>;
    }
  };
  onClickRight = (event: MouseEvent) => {
    this.glueRight.emit(event);
  };

  renderLeft = () => {
    if (this.leftText == '#slot') {
      return <slot name="left-text"></slot>;
    }
    return [this.leftArrow && <glue-icon class="glue-nav-bar__arrow" name="arrow-left" />, this.leftText && <span class="glue-nav-bar__text">{this.leftText}</span>];
  };

  renderRight = () => {
    if (this.rightText == '#slot') {
      return <slot name="right-text"></slot>;
    }
    return <span class="glue-nav-bar__text">{this.rightText}</span>;
  };
  renderNavBar = () => {
    const { title, fixed, border } = this;
    const style = {
      zIndex: this.zIndex,
    };

    const hasLeft = this.leftArrow || this.leftText;
    const hasRight = this.rightText;

    return (
      <div
        ref={dom => {
          this.navBarRef = dom;
        }}
        //TODO:border有问题
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
  componentDidLoad() {
    const { height } = useRect(this.navBarRef);
    console.log(height, this.navBarRef, 'height');
    this.height = height;
  }
  render() {
    return (
      <Host class="glue-nav-bar">
        {this.renderPlaceholder()}
        {this.renderNavBar()}
      </Host>
    );
  }
}
