import { Component, Prop, h, Host, EventEmitter, Event, Element, Watch } from '@stencil/core';
import classNames from 'classnames';
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
  private popupRef: HTMLElement;
  @Prop({ mutable: true }) show: boolean;
  @Prop() zIndex = '2000';
  @Prop() duration: number | string = DURATION;
  @Prop() easing: string = EASING;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() teleport: string | HTMLElement = 'body';
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
  @Event() glueClick: EventEmitter;
  clickHandle = event => {
    this.glueClick.emit(event);
  };
  @Event() glueOpen: EventEmitter;
  openHandle = () => {
    this.show = true;
    this.glueOpen.emit(true);
  };
  @Event() glueClose: EventEmitter;
  closeHandle = () => {
    this.show = false;
    // unlockScroll();
    this.glueClose.emit(false);
  };
  @Event() glueOpened: EventEmitter;
  openedHandle = () => {
    this.show = true;
    this.glueOpened.emit('opened');
  };
  @Event() glueClosed: EventEmitter;
  closedHandle = () => {
    this.show = false;
    this.glueClosed.emit('closed');
  };
  @Event() glueClickOverlay: EventEmitter;
  clickOverlayHandle = () => {
    this.glueClickOverlay.emit('click-overlay');
    if (this.closeOnClickOverlay) {
      this.show = false;
    }
  };
  @Event() glueClickCloseIcon: EventEmitter;
  clickCloseIconHandle = () => {
    this.glueClickCloseIcon.emit('click-close-icon');
    this.show = false;
  };

  @Watch('show')
  watchShowHandler(newValue) {
    console.log(newValue, this.position, '弹窗状态');
    if (newValue) {
      this.showAnimation();
    } else {
      this.hiddenAnimation();
    }
  }
  componentDidRender() {}
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

  renderPopup = () => {
    const { round, position, safeAreaInsetBottom } = this;
    console.log(position, bem([position]), 'position');
    let style = {
      zIndex: this.zIndex,
      height: '0',
      width: '0',
      transform: 'translateY(0)',
    };
    if (this.position == 'top' || this.position == 'bottom') {
      style['width'] = this.width || '100%';
      style['height'] = this.height || '30%';
      style.transform = `translateY(${this.height})`;
    }

    if (this.position == 'right' || this.position == 'left') {
      style['width'] = this.width || '30%';
      style['height'] = this.height || '100%';
      style.transform = `translateX(${this.height})`;
    }
    // if (this.show) {
    return (
      <div
        ref={dom => {
          this.popupRef = dom;
        }}
        style={style}
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
  showAnimation = () => {
    if (this.position == 'center') {
      centerEnterAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        () => {
          this.popupRef.style.display = 'block';
          this.openHandle();
        },
        () => {
          this.openedHandle();
        },
      );
    }
    if (this.position == 'top') {
      topEnterAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.height,
        () => {
          this.popupRef.style.display = 'block';
          this.openHandle();
        },
        () => {
          this.openedHandle();
        },
      );
    }
    if (this.position == 'bottom') {
      bottomEnterAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.height,
        () => {
          this.popupRef.style.display = 'block';
          this.openHandle();
        },
        () => {
          this.openedHandle();
        },
      );
    }
    if (this.position == 'left') {
      leftEnterAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.width,
        () => {
          this.popupRef.style.display = 'block';
          this.openHandle();
        },
        () => {
          this.openedHandle();
        },
      );
    }
    if (this.position == 'right') {
      rightEnterAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.width,
        () => {
          this.popupRef.style.display = 'block';
          this.openHandle();
        },
        () => {
          this.openedHandle();
        },
      );
    }
  };
  hiddenAnimation = () => {
    if (this.position == 'center') {
      centerLeaveAnimation(
        this.popupRef,
        this.duration,
        this.easing,

        () => {
          this.closeHandle();
        },
        () => {
          // this.popupRef.style.display = 'none';
          this.closedHandle();
        },
      );
    }
    if (this.position == 'top') {
      topLeaveAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.height,
        () => {
          this.closeHandle();
        },
        () => {
          // this.popupRef.style.display = 'none';
          this.closedHandle();
        },
      );
    }
    if (this.position == 'bottom') {
      bottomLeaveAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        this.height,
        () => {
          this.closeHandle();
        },
        () => {
          console.log(this, 'this.popupRef.style');
          // this.popupRef.style.display = 'none';
          this.closedHandle();
        },
      );
    }
    if (this.position == 'left') {
      leftLeaveAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        () => {
          this.closeHandle();
        },
        () => {
          // this.popupRef.style.display = 'none';
          this.closedHandle();
        },
      );
    }
    if (this.position == 'right') {
      rightLeaveAnimation(
        this.popupRef,
        this.duration,
        this.easing,
        () => {
          this.closeHandle();
        },
        () => {
          // this.popupRef.style.display = 'none';
          this.closedHandle();
        },
      );
    }
  };
  renderTransitionAppear = () => {
    let style = this.popupRef.style;
    // console.log(this.position, this.height, 'aghuohaugah');
    // if (this.position == 'top' || this.position == 'bottom') {
    //   style['width'] = this.width || '100%';
    //   style['height'] = this.height || '30%';
    // }

    // if (this.position == 'right' || this.position == 'left') {
    //   style['width'] = this.width || '30%';
    //   style['height'] = this.height || '100%';
    // }
    console.log(style, 'stylestyle');
    if (this.show) {
      console.log(style, 'style');
      if (this.transitionAppear) {
        // this.showAnimation();
      } else {
        this.popupRef.style.display = 'block';
        this.popupRef.style.zIndex = this.zIndex;
        if (this.position == 'top' || this.position == 'bottom') {
          style['height'] = this.height || '30%';
          // style.transform = `translateY($(this.height))`;
        }

        if (this.position == 'right' || this.position == 'left') {
          style['width'] = this.width || '30%';
        }
        console.log(style, 'stylestylestyle');
      }
    } else {
      // style.display = 'none';
      // style.transform = `translateY(${this.height})`;
    }
  };
  renderTeleport = () => {
    if (this.teleport) {
      //如果是字符串选择器,如果不是选择器就是dom
      if (typeof this.teleport == 'string') {
        console.log(document.querySelector(this.teleport), this.teleport, 'teleport');
        document.querySelector(this.teleport).appendChild(this.el);
      } else {
        this.teleport.appendChild(this.el);
      }
    }
  };
  componentShouldUpdate(e) {
    console.log(e, 'componentShouldUpdate');
  }
  componentDidLoad() {
    // this.renderTransitionAppear();
    this.renderTeleport();
  }
  render() {
    console.log(this.show, 'hgyag');
    return (
      <Host>
        {this.renderOverlay()}
        {this.renderPopup()}
      </Host>
    );
  }
}
