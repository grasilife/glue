import { Component, Prop, h, Host, State, Element, Event, EventEmitter } from '@stencil/core';
import { getScrollTop } from '../../utils/dom/scroll';
import { unitToPx } from '../../utils/format/unit';
import { useScrollParent } from '../../utils/useScrollParent';
import { useRect } from '../../utils/useRect';
// import { createNamespace } from '../../utils/create/index';
// const [bem] = createNamespace('glue-sticky');
import classNames from 'classnames';
import { isHidden } from '../../utils/dom/style';
@Component({
  tag: 'glue-sticky',
  styleUrl: 'glue-sticky.less',
  shadow: false,
})
export class GlueSticky {
  @Element() el: HTMLGlueStickyElement;
  @Prop() zIndex: string;

  @Prop() container = null;

  @Prop() offsetTopValue = 0;
  @Prop() offsetBottomValue = 0;
  @Prop() position = 'top';
  @State() fixed = false;
  @State() width = 0;
  @State() height = 0;
  @State() transform = 0;
  @State() offsetTopFormat = 0;
  @State() offsetBottomFormat = 0;
  @State() observer = null;
  @Event() glueScroll: EventEmitter;
  style = () => {
    console.log(!this.fixed, 'hhhh');
    if (!this.fixed) {
      return;
    }
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
      style.top = this.offsetTopFormat ? `${this.offsetTopFormat}px` : '0px';
    } else {
      style.bottom = this.offsetBottomFormat ? `${this.offsetBottomFormat}px` : '0px';
    }
    console.log(style, this, 'style');
    return style;
  };
  onScroll = () => {
    console.log(this.el, 'this.el');
    if (!this.el || isHidden(this.el)) {
      return;
    }

    const { container } = this;
    console.log(container, 'container');
    const rootRect = useRect(this.el);
    //getBoundingClientRect用于获取某个元素相对于视窗的位置集合
    const containerRect = container?.getBoundingClientRect();

    this.width = rootRect.width;
    this.height = rootRect.height;

    const scrollTop = getScrollTop(window);

    if (this.position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const difference = containerRect.bottom - this.offsetTopFormat - this.height;
        this.fixed = this.offsetTopFormat > rootRect.top && containerRect.bottom > 0;
        this.transform = difference < 0 ? difference : 0;
      } else {
        console.log(this.offsetTopFormat, rootRect.top, 'fiahguhaiuhfgaiuhg');
        this.fixed = this.offsetTopFormat > rootRect.top;
      }
    } else if (this.position === 'bottom') {
      const { clientHeight } = document.documentElement;
      if (container) {
        const difference = clientHeight - containerRect.top - this.offsetBottomFormat - this.height;
        this.fixed = clientHeight - this.offsetBottomFormat < rootRect.bottom && clientHeight > containerRect.top;
        this.transform = difference < 0 ? -difference : 0;
      } else {
        console.log(clientHeight, this.offsetBottomFormat, rootRect.bottom, '位置');
        this.fixed = clientHeight - this.offsetBottomFormat < rootRect.bottom;
        console.log(this.fixed, 'this.fixed');
      }
    }
    this.emitScrollEvent(scrollTop);
  };
  emitScrollEvent = (scrollTop: number) => {
    console.log(scrollTop, 'scrollTop');
    this.glueScroll.emit({
      scrollTop,
      isFixed: this.fixed,
    });
  };
  componentWillLoad() {
    //为了只计算一次
    this.offsetTopFormat = unitToPx(this.offsetTopValue);
    this.offsetBottomFormat = unitToPx(this.offsetBottomValue);
    console.log(this.offsetTopFormat, this.offsetBottomFormat, 'ahihaihaihi');
  }
  componentDidLoad() {
    //好像监听在vue中不生效
    let scrollParent = useScrollParent(this.el);
    scrollParent.addEventListener('scroll', this.onScroll);
  }
  disconnectedCallback() {
    let scrollParent = useScrollParent(this.el);
    scrollParent.removeEventListener('scroll', this.onScroll);
    this.unobserve(this.el);
  }
  observe = target => {
    if (target.value) {
      this.observer.observe(target);
    }
  };

  unobserve = target => {
    if (target) {
      this.observer.unobserve(target);
    }
  };
  render() {
    const { fixed, height, width } = this;
    const rootStyle = {
      width: fixed ? `${width}px` : undefined,
      height: fixed ? `${height}px` : undefined,
    };
    return (
      <Host style={rootStyle} class="glue-sticky">
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
