import { Component, Prop, h } from '@stencil/core';
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
  @Prop() title: string;
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
        {this.renderTitle ? this.renderTitle() : this.title}
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
    return (
      <div
        role="tab"
        class={classNames({
          'glue-tabs-title__active': this.isActive,
          'glue-tabs-title__disabled': this.disabled,
        })}
        style={this.style()}
        aria-selected={this.isActive}
      >
        {this.renderText()}
      </div>
    );
  }
}
