import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-tab',
  styleUrl: 'glue-tab.less',
  shadow: false,
})
export class GlueTab {
  @Element() el!: HTMLElement;
  @Prop() first: string;
  @Prop() dot: boolean;
  @Prop() name: string | number;
  @Prop() badge: string | number;
  @Prop() title: string;
  @Prop() titleStyle: null;
  @Prop() titleClass: null;
  @Prop() disabled: boolean;
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
      //   parent.emit('rendered', getName(), props.title);
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
    console.log(shouldRender);

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
          <div class="glue-tab__pane">
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
      <Host role="tabpanel" class="glue-tab__pane">
        {this.contentRender()}
      </Host>
    );
  }
}
