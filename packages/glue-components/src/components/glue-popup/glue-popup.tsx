import { Component, Prop, h, Host, EventEmitter, Event, State } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-popup');
@Component({
  tag: 'glue-popup',
  styleUrl: 'glue-popup.less',
  shadow: false,
})
export class GluePopup {
  @Prop() show: boolean;

  @Prop() zIndex = '2000';

  @Prop() duration: string;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() teleport: string | object;
  @Prop() overlayStyle: object;
  @Prop() overlayClass = null;

  @Prop() transitionAppear: boolean;
  @Prop() overlay = true;
  @Prop() lockScroll = true;
  @Prop() lazyRender = true;
  @Prop() closeOnClickOverlay = true;
  @Prop() round = true;
  @Prop() closeable: boolean;
  @Prop() transition: string;
  @Prop() closeOnPopstate: boolean;
  @Prop() safeAreaInsetBottom = false;
  @Prop() position = 'center';
  @Prop() closeIcon = 'cross';
  @Prop() closeIconPosition = 'top-right';
  @State() opened: boolean;
  // private zIndexRef: HTMLElement;
  // private popupRef: HTMLElement;
  @Event() onClick: EventEmitter;
  clickHandle = event => {
    this.onClick.emit(event);
  };
  @Event() onOpened: EventEmitter;
  openedHandle = () => {
    this.onOpened.emit('opened');
  };
  @Event() onClosed: EventEmitter;
  closedHandle = () => {
    this.onClosed.emit('closed');
  };
  @Event() onClickOverlay: EventEmitter;
  clickOverlayHandle = () => {
    this.onClickOverlay.emit('click-overlay');
    if (this.closeOnClickOverlay) {
      this.closeHandle();
    }
  };
  @Event() clickCloseIcon: EventEmitter;
  clickCloseIconHandle = () => {
    this.clickCloseIcon.emit('click-close-icon');
    this.closeHandle();
  };
  @Event() close: EventEmitter;
  closeHandle = () => {
    this.show = false;
    // unlockScroll();
    this.close.emit(false);
  };
  @Event() open: EventEmitter;
  openHandle = () => {
    this.show = true;
    this.open.emit(true);
  };
  componentDidRender() {
    // this.opened;
    // if (this.show) {
    //   this.openHandle();
    // } else {
    //   this.closeHandle();
    // }
  }
  renderCloseIcon = () => {
    if (this.closeable) {
      return (
        <div
          class={classNames({
            'glue-popup__close-icon': true,
            'glue-popup__close-icon--top-right': this.closeIconPosition == 'top-right',
            'glue-popup__close-icon--top-left': this.closeIconPosition == 'top-left',
            'glue-popup__close-icon--bottom-left': this.closeIconPosition == 'bottom-left',
            'glue-popup__close-icon--bottom-right': this.closeIconPosition == 'bottom-right',
          })}
        >
          <glue-icon role="button" tabindex="0" name={this.closeIcon} onClick={this.clickCloseIconHandle}></glue-icon>
        </div>
      );
    }
  };
  style = () => {
    const style = {
      zIndex: this.zIndex,
    };
    if (this.position == 'top' || this.position == 'bottom') {
      style['width'] = this.width || '100%';
      style['height'] = this.height || '30%';
    }

    if (this.position == 'right' || this.position == 'left') {
      style['width'] = this.width || '30%';
      style['height'] = this.height || '100%';
    }
    if (isDef(this.duration)) {
      const key = this.position === 'center' ? 'animationDuration' : 'transitionDuration';
      style[key] = `${this.duration}s`;
    }
    console.log(style, 'style');
    return style;
  };
  renderPopup = () => {
    const { round, position, safeAreaInsetBottom } = this;
    console.log(position, bem([position]), 'position');
    if (this.show) {
      return (
        <div
          // ref={dom => (this.popupRef = dom)}
          style={this.style()}
          class={classNames(
            'glue-popup',
            {
              'glue-popup--round': round,
              'glue-popup-safe-area-inset-bottom': safeAreaInsetBottom,
            },
            bem([position]),
          )}
          onClick={this.clickHandle}
        >
          <slot></slot>
          {this.renderCloseIcon()}
        </div>
      );
    }
  };

  renderOverlay = () => {
    if (this.overlay) {
      return (
        <glue-overlay
          show={this.show}
          class={this.overlayClass}
          zIndex={this.zIndex}
          duration={this.duration}
          customStyle={this.overlayStyle}
          onClick={this.clickOverlayHandle}
        ></glue-overlay>
      );
    }
  };
  renderTransition = () => {
    // const { position, transition, transitionAppear } = this;
    // const name = position === 'center' ? 'van-fade' : `van-popup-slide-${position}`;
    return <div class="glue-popup-transition">{this.renderPopup()}</div>;
  };
  render() {
    return (
      <Host>
        {this.renderOverlay()}
        {this.renderPopup()}
      </Host>
    );
  }
}
