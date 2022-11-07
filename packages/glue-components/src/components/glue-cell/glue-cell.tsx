import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { CellArrowDirection } from '../glue-cell/glue-cell-interface';
@Component({
  tag: 'glue-cell',
  styleUrl: 'glue-cell.less',
  shadow: false,
})
export class GlueCell {
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() gtitle: string;
  @Prop() value: string | number;
  @Prop() label: string | number;
  @Prop() center: boolean;
  @Prop() isLink: boolean;
  @Prop() required: boolean;
  @Prop() clickable: boolean;
  @Prop() iconPrefix: string;
  @Prop() titleStyle = null;
  @Prop() titleClass = null;
  @Prop() valueClass = null;
  @Prop() tilabelClasstle = null;
  @Prop() arrowDirection: CellArrowDirection;
  @Prop() border = true;
  @Prop() rightIcon: string;

  renderLabel = () => {
    const showLabel = this.label == '#slot' || isDef(this.label);

    if (showLabel) {
      return (
        <div
          class={classNames({
            'glue-cell__label': true,
          })}
        >
          {this.label == '#slot' ? <slot name="label"></slot> : this.label}
        </div>
      );
    }
  };

  renderTitle = () => {
    if (this.gtitle == '#slot' || isDef(this.gtitle)) {
      return (
        <div
          class={classNames(this.titleClass, {
            'glue-cell__title': true,
          })}
          style={this.titleStyle}
        >
          {this.gtitle == '#slot' ? (
            <slot name="gtitle"></slot>
          ) : (
            <span>{this.gtitle}</span>
          )}
          {this.renderLabel()}
        </div>
      );
    }
  };

  renderValue = () => {
    const hasTitle = this.gtitle == '#slot' || isDef(this.gtitle);
    const hasValue = this.value == '#slot' || isDef(this.value);

    if (hasValue) {
      return (
        <div
          class={classNames(this.valueClass, {
            'glue-cell__value': true,
            'glue-cell__value--alone': !hasTitle,
          })}
        >
          {this.value == '#slot' ? (
            <slot name="value"></slot>
          ) : (
            <span>{this.value}</span>
          )}
        </div>
      );
    }
  };

  renderLeftIcon = () => {
    if (this.icon == '#slot') {
      return <slot name="icon"></slot>;
    }
    if (this.icon) {
      return (
        <glue-icon
          name={this.icon}
          class={classNames({
            'glue-cell__left-icon': true,
          })}
          classPrefix={this.iconPrefix}
        />
      );
    }
  };

  renderRightIcon = () => {
    if (this.rightIcon == '#slot') {
      return <slot name="rightIcon"></slot>;
    }
    if (this.isLink) {
      const name = this.arrowDirection
        ? `arrow-${this.arrowDirection}`
        : 'arrow';
      return (
        <glue-icon
          name={name}
          class={classNames({
            'glue-cell__right-icon': true,
          })}
        />
      );
    }
  };
  render() {
    const { size, center, border, isLink, required } = this;
    const clickable = isLink || this.clickable;
    const classes = {
      center,
      required,
      clickable,
      borderless: !border,
    };
    if (size) {
      classes[size] = !!size;
    }
    return (
      <Host
        class={classNames('glue-cell', {
          'glue-cell--center': center,
          'glue-cell--required': required,
          'glue-cell--clickable': clickable,
          'glue-cell--borderless': !border,
          'glue-cell--size': !!size,
        })}
        role={clickable ? 'button' : undefined}
        tabindex={clickable ? 0 : undefined}
      >
        {this.renderLeftIcon()}
        {this.renderTitle()}
        {this.renderValue()}
        {this.renderRightIcon()}
        <slot></slot>
      </Host>
    );
  }
}
