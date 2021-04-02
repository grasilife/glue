import { Component, Prop, h, Host, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef, noop } from '../../utils/base';
import { preventDefault } from '../../utils/dom/event';
import anime from 'animejs/lib/anime.es.js';
@Component({
  tag: 'glue-overlay',
  styleUrl: 'glue-overlay.less',
  shadow: false,
})
export class GlueOverlay {
  refdiv: HTMLElement;
  @Prop() show: boolean;

  @Prop() zIndex: string;

  @Prop() duration: string | number;
  // @Prop() className = null;
  @Prop() customStyle: object;
  @Prop() lockScroll = true;
  @Watch('show')
  watchHandler(newValue) {
    if (newValue) {
      anime({
        targets: this.refdiv,
        duration: 300,
        delay: 0,
        opacity: [0, 1],
        easing: 'spring(1, 80, 10, 0)',
        begin: anim => {
          console.log(anim, '开始');
        },
        complete: anim => {
          console.log(anim, '完成');
          this.refdiv.style.display = 'inline';
        },
      });
    } else {
      anime({
        targets: this.refdiv,
        duration: 300,
        delay: 0,
        opacity: [1, 0],
        easing: 'linear',
        begin: anim => {
          console.log(anim, '开始');
        },
        complete: anim => {
          console.log(anim, this.refdiv, '完成2');
          this.refdiv.style.display = 'none';
        },
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
          this.refdiv = dom;
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
    console.log(32323232);
  }
  render() {
    return <Host>{this.renderOverlay()} </Host>;
  }
}
