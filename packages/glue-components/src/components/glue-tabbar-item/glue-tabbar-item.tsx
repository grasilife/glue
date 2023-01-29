import { Component, Prop, h, Host, State, Element, EventEmitter, Event, Method } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-tabbar-item',
  styleUrl: 'glue-tabbar-item.less',
  shadow: false,
})
export class GlueTabbarItem {
  @Element() el!: HTMLGlueTabbarItemElement;
  @Prop() dot: boolean;
  @Prop() icon: string;
  @Prop() name: string;
  @Prop() gtitle: string;
  @Prop() badge: string;
  @Prop() iconPrefix: string;
  @State() parentActiveColor;
  @State() parentInactiveColor;
  @State() parentModelValue;
  @State() selected: boolean;
  @State() parentEl: any;
  @State() index: any;
  @Event() glueClick: EventEmitter;

  componentDidLoad() {
    this.parentEl = getElementParent(this.el, 'GLUE-TABBAR');
    this.parentActiveColor = getAttribute(this.parentEl, 'active-color');
    this.parentInactiveColor = getAttribute(this.parentEl, 'inactive-color');
    this.parentModelValue = getAttribute(this.parentEl, 'model-value');
    this.selected = this.parentModelValue == this.name;
    console.log(this.parentActiveColor, this.parentActiveColor, this.parentModelValue, 'this.parentModelValue22');
  }

  onClick = () => {
    let parent = getElementParent(this.el, 'GLUE-TABBAR');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-TABBAR') {
      const { name, index } = this;
      if (name) {
        parent.setValue('modelValue', name);
      } else {
        parent.setValue('modelValue', index);
      }

      this.glueClick.emit();
    }
  };
  @Method()
  async setValue(key, value) {
    console.log(key, value, 'hhijioa');
    this[key] = value;
  }

  renderIcon = () => {
    if (this.icon == '#slot') {
      return <slot name="icon"></slot>;
    }
    if (this.icon) {
      return <glue-icon name={this.icon} classPrefix={this.iconPrefix} size={24} />;
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
        }}
      >
        <glue-badge dot={dot} content={badge} class="glue-tabbar-item__icon">
          {this.renderIcon()}
        </glue-badge>
        <div class="glue-tabbar-item__text">{this.gtitle}</div>
      </Host>
    );
  }
}
