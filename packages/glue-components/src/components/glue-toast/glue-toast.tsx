import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';
// import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-popup');
export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
export type ToastPosition = 'top' | 'middle' | 'bottom';
let timer = null;
@Component({
  tag: 'glue-toast',
  styleUrl: 'glue-toast.less',
  shadow: false,
})
export class GlueToast {
  @Prop() icon: string;
  @Prop() show: boolean;
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
  @Prop() duration = 2000;
  @Prop() position = 'middle';
  @Prop() transition = 'van-fade';
  @Event() click: EventEmitter;
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
  renderIcon = () => {
    const { icon, type, iconPrefix, loadingType } = this;
    const hasIcon = icon || type === 'success' || type === 'fail';

    if (hasIcon) {
      return <glue-icon name={icon || type} class={bem('icon')} classPrefix={iconPrefix} />;
    }

    if (type === 'loading') {
      return <glue-loading class={bem('loading')} type={loadingType} />;
    }
  };

  renderMessage = () => {
    const { type, message } = this;

    if (isDef(message) && message !== '') {
      return type === 'html' ? <div class="glue-toast__text" innerHTML={String(message)} /> : <div class="glue-toast__text">{message}</div>;
    }
  };
  render() {
    return (
      <Host class="glue-toast glue-toast--text glue-toast--center glue-toast--popup">
        {this.renderIcon()}
        {this.renderMessage()}
        {/* <glue-popup
          show={this.show}
          class={classNames(bem([this.position]))}
          lockScroll={false}
          transition={this.transition}
          overlayClass={this.overlayClass}
          overlayStyle={this.overlayStyle}
          closeOnClickOverlay={this.closeOnClickOverlay}
          onClick={this.clickHandle}
          onClosed={this.clearTimer}
        >
          {this.renderIcon()}
          {this.renderMessage()}
        </glue-popup>{' '} */}
      </Host>
    );
  }
}
