import { Component, Prop, h, Host, State, Element, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-tabbar-item',
  styleUrl: 'glue-tabbar-item.less',
  shadow: false,
})
export class GlueTabbarItem {
  @Element() el!: HTMLElement;
  @Prop() dot: boolean;
  @Prop() icon: string;
  @Prop() name: string;
  @Prop() badge: string;
  @Prop() iconPrefix: string;
  @State() parentActiveColor;
  @State() parentInactiveColor;
  @State() modelValue;
  @Event() glueClick: EventEmitter;

  componentDidLoad() {
    let parentEl = getElementParent(this.el);
    this.parentActiveColor = getAttribute(parentEl, 'active-color');
    this.parentActiveColor = getAttribute(parentEl, 'inactive-color');
    this.parentActiveColor = getAttribute(parentEl, 'model-value');
  }

  active = () => {
    return this.name === this.modelValue;
  };

  onClick = () => {
    let parentEl = getElementParent(this.el);
    parentEl.setActive(this.name);
    this.glueClick.emit();
  };

  renderIcon = () => {
    if (this.icon == '#slot') {
      return <slot name="icon"></slot>;
    }
    if (this.icon) {
      return <glue-icon name={this.icon} classPrefix={this.iconPrefix} />;
    }
  };
  render() {
    const { dot, badge, parentActiveColor, parentInactiveColor } = this;
    const color = this.active() ? parentActiveColor : parentInactiveColor;
    return (
      <Host
        class={classNames({
          'glue-tabbar-item__active': this.active(),
        })}
        style={{ color }}
        onClick={this.onClick}
      >
        <glue-badge dot={dot} content={badge} class="glue-tabbar-item__icon">
          {this.renderIcon()}
        </glue-badge>
        <div class="glue-tabbar-item__text">{this.active()}</div>
      </Host>
    );
  }
}
