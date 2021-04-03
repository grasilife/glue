import { Component, Prop, h, Host, EventEmitter, Event, Element, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { createNamespace } from '../../utils/create/index';
import { DURATION, EASING } from '../../global/constant/constant';
import {
  centerEnterAnimation,
  centerLeaveAnimation,
  topEnterAnimation,
  topLeaveAnimation,
  bottomEnterAnimation,
  bottomLeaveAnimation,
  leftEnterAnimation,
  leftLeaveAnimation,
  rightEnterAnimation,
  rightLeaveAnimation,
} from './animation';
const [bem] = createNamespace('glue-popup');
@Component({
  tag: 'glue-popup',
  styleUrl: 'glue-popup.less',
  shadow: false,
})
export class GluePopup {
  @Element() el!: HTMLGluePopupElement;
  popupRef: HTMLElement;
  @Prop({ mutable: true }) show: boolean;
  @Prop() zIndex = '2000';
  @Prop() duration: number | string = DURATION;
  @Prop() easing: string = EASING;
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
  @Prop() closeOnPopstate: boolean;
  @Prop() safeAreaInsetBottom = false;
  @Prop() position = 'center';
  @Prop() closeIcon = 'cross';
  @Prop() closeIconPosition = 'top-right';
  @Prop() content = '';
  // @State() opened: boolean;
  // private zIndexRef: HTMLElement;
  // private popupRef: HTMLElement;
  @Event() click: EventEmitter;
  clickHandle = event => {
    this.click.emit(event);
  };
  @Event() opened: EventEmitter;
  openedHandle = () => {
    this.opened.emit('opened');
  };
  @Event() closed: EventEmitter;
  closedHandle = () => {
    this.closed.emit('closed');
  };
  @Event() clickOverlay: EventEmitter;
  clickOverlayHandle = () => {
    this.clickOverlay.emit('click-overlay');
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
  @Watch('show')
  watchHandler(newValue) {
    if (newValue) {
      if (this.position == 'center') {
        centerEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'top') {
        topEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'bottom') {
        bottomEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'left') {
        leftEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'right') {
        rightEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
    } else {
      if (this.position == 'center') {
        centerLeaveAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'none';
        });
      }
      if (this.position == 'top') {
        topLeaveAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'none';
        });
      }
      if (this.position == 'bottom') {
        bottomLeaveAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'none';
        });
      }
      if (this.position == 'left') {
        leftLeaveAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'none';
        });
      }
      if (this.position == 'right') {
        rightLeaveAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'none';
        });
      }
    }
  }
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
      // display: this.show ? 'block' : 'none',
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
    // if (this.show) {
    return (
      <div
        ref={dom => {
          this.popupRef = dom;
        }}
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
    // }
  };

  renderOverlay = () => {
    if (this.overlay) {
      return (
        <glue-overlay
          show={this.show}
          class={this.overlayClass}
          zIndex={this.zIndex}
          duration={this.duration}
          easing={this.easing}
          transitionAppear={this.transitionAppear}
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
  renderTransitionAppear = () => {
    if (this.show && this.transitionAppear) {
      if (this.position == 'center') {
        centerEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'top') {
        topEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'bottom') {
        bottomEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'left') {
        leftEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
      if (this.position == 'right') {
        rightEnterAnimation(this.popupRef, this.duration, this.easing, () => {
          this.popupRef.style.display = 'inline';
        });
      }
    }
  };
  componentDidLoad() {
    this.renderTransitionAppear();
  }
  render() {
    return (
      <Host>
        {this.renderOverlay()}
        {this.renderPopup()}
      </Host>
    );
  }
}
