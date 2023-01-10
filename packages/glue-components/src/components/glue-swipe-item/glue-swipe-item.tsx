import {
  Component,
  Prop,
  h,
  State,
  Element,
  Host,
  Method,
} from '@stencil/core';
// import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-swipe-item',
  styleUrl: 'glue-swipe-item.less',
  shadow: false,
})
export class GlueSwipeItem {
  @Element() el!: HTMLGlueSwipeItemElement;
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

  @Method()
  async setOffset(offset) {
    this.offset = offset;
  }
  contentRender = () => {
    if (this.rendered) {
      return <slot></slot>;
    }
  };
  componentDidLoad() {
    this.mounted = true;
    this.getState();
  }
  async getState() {
    let trackParentEl = getElementParent(this.el);
    let parentEl = getElementParent(trackParentEl);
    console.log(parentEl, 'parentEl');
    this.parentVertical = await parentEl.getValue('vertical');
    console.log(this.parentVertical, 'this.parentVertical');
    this.parentSize = await parentEl.getSize();
    this.parentLoop = await parentEl.getValue('loop');
    this.parentActiveIndicator = await parentEl.getActiveIndicator();
    this.parentLazyRender = await parentEl.getValue('azyRender');
    this.parentCount = await parentEl.getCount();
    this.shouldRender();
  }
  render() {
    const style = {
      transform: '',
      height: '',
      width: '',
    };

    if (this.parentSize) {
      console.log(this.parentSize, 'this.parentSize');
      style[this.parentVertical ? 'height' : 'width'] = `${this.parentSize}px`;
    }

    if (this.offset) {
      style.transform = `translate${this.parentVertical ? 'Y' : 'X'}(${
        this.offset
      }px)`;
    }
    return (
      <Host class="glue-swipe-item" style={style}>
        {this.contentRender()}
      </Host>
    );
  }
}
