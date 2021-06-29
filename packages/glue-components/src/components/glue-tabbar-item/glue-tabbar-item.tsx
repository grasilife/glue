import { Component, Prop, h, Host, State, Element, EventEmitter, Event, Method } from '@stencil/core';
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
  @Prop() title: string;
  @Prop() badge: string;
  @Prop() iconPrefix: string;
  @State() parentActiveColor;
  @State() parentInactiveColor;
  @State() parentModelValue;
  @State() selected: boolean;
  @State() parentEl: any;
  @Event() glueClick: EventEmitter;

  componentDidLoad() {
    this.parentEl = getElementParent(this.el);
    this.parentActiveColor = getAttribute(this.parentEl, 'active-color');
    this.parentActiveColor = getAttribute(this.parentEl, 'inactive-color');
    this.parentModelValue = getAttribute(this.parentEl, 'model-value');
    this.selected = this.parentModelValue === this.name;
    console.log(this.parentActiveColor, this.parentActiveColor, this.parentModelValue, 'this.parentModelValue22');
  }

  onClick = () => {
    this.glueClick.emit();
  };
  @Method()
  async setParentActive() {
    await this.parentEl.setActive(this.name);
    console.log(this.name, 'parentModelValue333');
  }
  @Method()
  async setActive(parentModelValue) {
    //由父元素触发
    console.log(parentModelValue, this.name, 'parentModelValue111');
    this.selected = parentModelValue === this.name;
  }
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
    const color = this.selected ? parentActiveColor : parentInactiveColor;
    return (
      <Host
        class={classNames('glue-tabbar-item', {
          'glue-tabbar-item--active': this.selected,
        })}
        style={{ color }}
        onClick={() => {
          this.onClick();
          this.setParentActive();
        }}
      >
        <glue-badge dot={dot} content={badge} class="glue-tabbar-item__icon">
          {this.renderIcon()}
        </glue-badge>
        <div class="glue-tabbar-item__text">{this.title}</div>
      </Host>
    );
  }
}
