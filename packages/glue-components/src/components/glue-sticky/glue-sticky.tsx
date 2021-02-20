import { Component, Prop, h, Host } from '@stencil/core';
import { getScrollTop } from '../../utils/dom/scroll';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-sticky');
import classNames from 'classnames';
@Component({
  tag: 'glue-sticky',
  styleUrl: 'glue-sticky.less',
  shadow: false,
})
export class GlueSticky {
  @Prop() zIndex: string;

  @Prop() container = null;

  @Prop() offsetTopValue = 0;
  @Prop() offsetBottomValue = 0;
  @Prop() position = 'top';
  @Prop() fixed = false;
  @Prop() width = 0;
  @Prop() height = 0;
  @Prop() transform = 0;
  root: HTMLElement;
  style = () => {
    console.log(!this.fixed, 'hhhh');
    // if (!this.fixed) {
    //   return;
    // }
    console.log(this, ';hauhau');
    const style = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      transform: '',
      zIndex: '0',
      top: '',
      bottom: '',
    };

    if (this.transform) {
      style.transform = `translate3d(0, ${this.transform}px, 0)`;
    }

    if (this.zIndex !== undefined) {
      style.zIndex = (parseFloat(style.zIndex) + parseFloat(this.zIndex)).toString();
    }

    if (this.position === 'top') {
      style.top = this.offsetTopValue ? `${this.offsetTopValue}px` : '0px';
    } else {
      style.bottom = this.offsetBottomValue ? `${this.offsetBottomValue}px` : '0px';
    }
    console.log(style, this, 'style');
    return style;
  };
  onScroll = () => {
    // if (!root.value || isHidden(root)) {
    //   return;
    // }

    const { container } = this;
    const rootRect = document.documentElement.getBoundingClientRect();
    const containerRect = container?.getBoundingClientRect();

    this.width = rootRect.width;
    this.height = rootRect.height;

    const scrollTop = getScrollTop(window);

    if (this.position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const difference = containerRect.bottom - this.offsetTopValue - this.height;
        this.fixed = this.offsetTopValue > rootRect.top && containerRect.bottom > 0;
        this.transform = difference < 0 ? difference : 0;
      } else {
        this.fixed = this.offsetTopValue > rootRect.top;
      }
    } else if (this.position === 'bottom') {
      const { clientHeight } = document.documentElement;
      if (container) {
        const difference = clientHeight - containerRect.top - this.offsetBottomValue - this.height;
        this.fixed = clientHeight - this.offsetBottomValue < rootRect.bottom && clientHeight > containerRect.top;
        this.transform = difference < 0 ? -difference : 0;
      } else {
        this.fixed = clientHeight - this.offsetBottomValue < rootRect.bottom;
      }
    }
    this.emitScrollEvent(scrollTop);
  };
  emitScrollEvent = (scrollTop: number) => {
    console.log(scrollTop, 'scrollTop');
    // emit('scroll', {
    //   scrollTop,
    //   isFixed: state.fixed,
    // });
  };
  render() {
    const { fixed, height, width } = this;
    const rootStyle = {
      width: fixed ? `${width}px` : undefined,
      height: fixed ? `${height}px` : undefined,
    };
    return (
      <Host
        ref={dom => {
          this.root = dom;
        }}
        style={rootStyle}
      >
        <div
          class={classNames({
            'glue-sticky--fixed': fixed,
          })}
          style={this.style()}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
