import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { isDef, noop } from '../../utils/base';
import { preventDefault } from '../../utils/dom/event';
@Component({
  tag: 'glue-overlay',
  styleUrl: 'glue-overlay.less',
  shadow: false,
})
export class GlueOverlay {
  @Prop() show: boolean;

  @Prop() zIndex: string;

  @Prop() duration: string | number;
  // @Prop() className = null;
  @Prop() customStyle: object;
  @Prop() lockScroll = true;

  preventTouchMove = (event: TouchEvent) => {
    preventDefault(event, true);
  };
  renderOverlay = () => {
    const style = {
      animationDuration: '',
      zIndex: this.zIndex,
      ...this.customStyle,
    };

    if (isDef(this.duration)) {
      style.animationDuration = `${this.duration}s`;
    }
    if (this.show) {
      return (
        <div
          style={style}
          class={classNames({
            'glue-overlay': true,
            // 'glue-image--className': this.className,
          })}
          onTouchMove={this.lockScroll ? el => this.preventTouchMove(el) : noop}
        >
          <slot></slot>
        </div>
      );
    }
  };
  render() {
    return <Host>{this.renderOverlay()} </Host>;
  }
}
