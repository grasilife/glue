import { Component, Prop, h, Host, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef, noop } from '../../utils/base';
import { preventDefault } from '../../utils/dom/event';
import anime from 'animejs/lib/anime.es.js';
import { DURATION, EASING } from '../../global/constant/constant';
import { enterAnimation, leaveAnimation } from './animation';
@Component({
  tag: 'glue-overlay',
  styleUrl: 'glue-overlay.less',
  shadow: false,
})
export class GlueOverlay {
  private overlayRef: HTMLElement;
  @Prop() show: boolean;
  @Prop() zIndex: string;
  @Prop() duration: number | string = DURATION;
  @Prop() easing: string = EASING;
  @Prop() transitionAppear: boolean;
  // @Prop() className = null;
  @Prop() customStyle: object;
  @Prop() lockScroll = true;
  @Watch('show')
  watchHandler(newValue) {
    if (newValue) {
      enterAnimation(this.overlayRef, this.duration, this.easing, () => {
        this.overlayRef.style.display = 'inline';
      });
    } else {
      leaveAnimation(this.overlayRef, this.duration, this.easing, () => {
        this.overlayRef.style.display = 'none';
      });
    }
  }
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
    // if (this.show) {
    return (
      <div
        style={style}
        ref={dom => {
          this.overlayRef = dom;
        }}
        class={classNames({
          'glue-overlay': true,
          // 'glue-slot__hidden': !this.show,
          // 'glue-image--className': this.className,
        })}
        onTouchMove={this.lockScroll ? el => this.preventTouchMove(el) : noop}
      >
        <slot></slot>
      </div>
    );
    // }
  };

  componentDidLoad() {
    if (this.show && this.transitionAppear) {
      enterAnimation(this.overlayRef, this.duration, this.easing, () => {
        this.overlayRef.style.display = 'inline';
      });
    }
  }
  render() {
    return <Host>{this.renderOverlay()} </Host>;
  }
}
