import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
@Component({
  tag: 'glue-tabs-title',
  styleUrl: 'glue-tabs-title.less',
  shadow: false,
})
export class GlueTabsTitle {
  @Prop() dot: boolean;
  @Prop() type: string;
  @Prop() color: string;
  @Prop() gtitle: string;
  @Prop() badge: string | number;
  @Prop() isActive: boolean;
  @Prop() disabled: boolean;
  @Prop() scrollable: boolean;
  @Prop() activeColor: string;
  @Prop() renderTitle: any;
  @Prop() inactiveColor: string;
  style = () => {
    const style = {
      borderColor: '',
      backgroundColor: '',
      color: '',
    };
    const { type, color, disabled, isActive, activeColor, inactiveColor } = this;

    const isCard = type === 'card';

    // card theme color
    if (color && isCard) {
      style.borderColor = color;

      if (!disabled) {
        if (isActive) {
          style.backgroundColor = color;
        } else {
          style.color = color;
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor;
    if (titleColor) {
      style.color = titleColor;
    }

    return style;
  };

  renderText = () => {
    const Text = (
      <span
        class={classNames({
          'glue-tabs-title__text--ellipsis': !this.scrollable,
        })}
      >
        {this.renderTitle ? this.renderTitle() : this.gtitle}
      </span>
    );

    if (this.dot || (isDef(this.badge) && this.badge !== '')) {
      return (
        <glue-badge dot={this.dot} content={this.badge}>
          {Text}
        </glue-badge>
      );
    }

    return Text;
  };
  render() {
    console.log(this.isActive, 'this.isActive');
    return (
      <Host
        role="tab"
        class={classNames('glue-tabs-title', {
          'glue-tabs-title--active': this.isActive,
          'glue-tabs-title--disabled': this.disabled,
        })}
        style={this.style()}
        aria-selected={this.isActive}
      >
        {this.renderText()}
      </Host>
    );
  }
}
