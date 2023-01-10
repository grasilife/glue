import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-tab',
  styleUrl: 'glue-tab.less',
  shadow: false,
})
export class GlueTab {
  @Element() el!: HTMLGlueTabElement;
  @Prop({ reflect: true }) dot: boolean;
  @Prop({ reflect: true }) name: string | number;
  @Prop({ reflect: true }) badge: string | number;
  @Prop({ reflect: true }) gtitle: string;
  @Prop({ reflect: true }) titleStyle: null;
  @Prop({ reflect: true }) titleClass: null;
  @Prop({ reflect: true }) disabled: boolean;
  @State() inited: boolean;
  @State() animated;
  @State() swipeable;
  @State() scrollspy;
  @State() lazyRender;
  @State() currentName;
  getName = () => this.name;

  init = () => {
    this.inited = true;

    if (this.lazyRender) {
      // nextTick(() => {
      //   parent.emit('rendered', getName(), props.gtitle);
      // });
    }
  };

  isActive = () => {
    const active = this.getName() === this.currentName;

    if (active && !this.inited) {
      this.init();
    }

    return active;
  };
  contentRender = () => {
    const shouldRender = this.inited || this.scrollspy || !this.lazyRender;
    console.log(shouldRender, 'shouldRender');

    //如果没有动画
    if (!this.animated) {
      return <slot></slot>;
    }
    //如果有动画
    if (this.animated || this.swipeable) {
      const active = this.isActive();
      return (
        <glue-swipe-item
          role="tabpanel"
          aria-hidden={!active}
          class={classNames('glue-tab__pane-wrapper', {
            'glue-tab__inactive': !active,
          })}
        >
          <div class="glue-tab__panel">
            <slot></slot>
          </div>
        </glue-swipe-item>
      );
    }
  };
  componentDidLoad() {
    console.log('Component has been rendered');
    let parentEl = getElementParent(this.el);
    this.animated = getAttribute(parentEl, 'animated');
    this.swipeable = getAttribute(parentEl, 'swipeable');
    this.scrollspy = getAttribute(parentEl, 'scrollspy');
    this.lazyRender = getAttribute(parentEl, 'lazy-render');
    this.currentName = getAttribute(parentEl, 'current-name');
  }
  render() {
    return (
      <Host role="tabpanel" class="glue-tab__panel">
        {this.contentRender()}
      </Host>
    );
  }
}
