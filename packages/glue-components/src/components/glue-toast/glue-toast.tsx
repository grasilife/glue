import { Component, Prop, h, Host, EventEmitter, Event, Watch, Element } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-toast');
export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';
import { enterAnimation, leaveAnimation } from './animation';
import { EASING, DURATION } from '../../global/constant/constant';
let timer = null;
@Component({
  tag: 'glue-toast',
  styleUrl: 'glue-toast.less',
  shadow: false,
})
export class GlueToast {
  @Element() el!: HTMLElement;
  @Prop() icon: string;
  @Prop({ mutable: true }) show: boolean;
  @Prop() message: string;
  // @Prop() className: null;
  @Prop() iconPrefix: string;
  @Prop() lockScroll: boolean;
  @Prop() loadingType: ToastType;
  @Prop() forbidClick: boolean;
  @Prop() overlayClass: null;
  @Prop() overlayStyle: object;
  @Prop() closeOnClick: boolean;
  @Prop() closeOnClickOverlay: boolean;
  @Prop() type = 'text';
  @Prop() duration: number | string = DURATION;
  @Prop() position = 'middle';
  @Prop() easing: string = EASING;
  @Watch('show')
  watchHandler(newValue) {
    console.log(newValue, 'newValuenewValue');
    if (newValue) {
      this.showAnimation();
    } else {
      this.hiddenAnimation();
    }
  }
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
  @Event()
  click: EventEmitter;
  clickHandle = () => {
    if (this.closeOnClick) {
      this.click.emit(false);
    }
  };
  @Event() toggle: EventEmitter;
  toggleHandle = (show: boolean) => {
    this.toggle.emit(show);
  };
  clearTimer = () => {
    clearTimeout(timer);
  };
  showAnimation = () => {
    enterAnimation(
      this.el,
      this.duration,
      this.easing,
      () => {
        this.el.style.display = 'flex';
        this.openHandle();
      },
      () => {
        this.openedHandle();
      },
    );
  };
  hiddenAnimation = () => {
    leaveAnimation(
      this.el,
      this.duration,
      this.easing,
      () => {
        this.closeHandle();
      },
      () => {
        this.el.style.display = 'none';
        this.closedHandle();
      },
    );
  };
  renderIcon = () => {
    const { icon, type, iconPrefix, loadingType } = this;
    const hasIcon = icon || type === 'success' || type === 'fail' || type === 'icon';

    if (hasIcon) {
      return <glue-icon name={icon || type} classPrefix={iconPrefix} size="36" />;
    }

    if (type === 'loading') {
      return <glue-loading class="glue-toast__loading" type={loadingType} />;
    }
  };

  renderMessage = () => {
    const { message } = this;

    if (isDef(message) && message !== '') {
      return <div class="glue-toast__text">{message}</div>;
    }
  };
  render() {
    return (
      <Host style={{ display: 'none' }} class={classNames('glue-toast', 'glue-toast__popup', bem([this.position, this.type]))}>
        {this.renderIcon()}
        {this.renderMessage()}
      </Host>
    );
  }
}
