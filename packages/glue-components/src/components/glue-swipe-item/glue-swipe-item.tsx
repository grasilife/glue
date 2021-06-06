import { Component, Prop, h, State, Element } from '@stencil/core';
// import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-swipe-item',
  styleUrl: 'glue-swipe-item.less',
  shadow: false,
})
export class GlueSwipeItem {
  @Element() el!: HTMLElement;
  @Prop() first: string;
  @State() offset = 0;
  @State() inited = false;
  @State() mounted = false;
  @State() rendered;
  @State() parentVertical;
  @State() parentSize;
  @State() parentLoop;
  @State() parentLazyRender;
  @State() parentActiveIndicator;
  @State() parentCount;

  shouldRender = () => {
    if (!this.parentLazyRender || this.rendered) {
      return true;
    }
    // 等待加载完毕
    if (!this.mounted) {
      return false;
    }

    const active = this.parentActiveIndicator;
    const maxActive = this.parentCount - 1;
    const prevActive = active === 0 && this.parentLoop ? maxActive : active - 1;
    const nextActive = active === maxActive && this.parentLoop ? 0 : active + 1;
    console.log(prevActive, nextActive);
    // this.rendered = index.value === active || index.value === prevActive || index.value === nextActive;
  };

  setOffset = offset => {
    this.offset = offset;
  };
  contentRender = () => {
    if (this.rendered) {
      return <slot></slot>;
    }
  };
  componentDidLoad() {
    this.mounted = true;
    let parentEl = getElementParent(this.el);
    this.parentVertical = getAttribute(parentEl, 'vertical');
    this.parentSize = getAttribute(parentEl, 'size');
    this.parentLoop = getAttribute(parentEl, 'loop');
    this.parentLazyRender = getAttribute(parentEl, 'lazyRender');
    this.parentActiveIndicator = getAttribute(parentEl, 'activeIndicator');
    this.parentCount = getAttribute(parentEl, 'count');
    this.shouldRender();
  }
  render() {
    const style = {
      transform: '',
      height: '',
      width: '',
    };

    if (this.parentSize && this.parentVertical) {
      style[this.parentVertical ? 'height' : 'width'] = `${this.parentSize}px`;
    }

    if (this.offset && this.parentVertical) {
      style.transform = `translate${this.parentVertical ? 'Y' : 'X'}(${this.offset}px)`;
    }
    return (
      <div class="glue-swipe-item" style={style}>
        {this.contentRender()}
      </div>
    );
  }
}
