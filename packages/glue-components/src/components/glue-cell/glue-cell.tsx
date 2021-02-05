import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
@Component({
  tag: 'glue-cell',
  styleUrl: 'glue-cell.less',
  shadow: false,
})
export class GlueCell {
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() title: string;
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
  @Prop() arrowDirection: string;
  @Prop() border = true;
  @Event({
    eventName: 'checkboxchange',
  })
  onClick: EventEmitter;
  handleClick = event => {
    this.onClick.emit(event);
  };
  renderLabel = () => {
    const showLabel = isDef(this.label);

    if (showLabel) {
      return (
        <div
          class={classNames({
            'glue-cell__label': true,
          })}
        >
          {this.label}
        </div>
      );
    }
  };

  renderTitle = () => {
    if (isDef(this.title)) {
      return (
        <div
          class={classNames({
            'glue-cell__title': true,
            'glue-cell--titleClass': this.titleClass,
          })}
          style={this.titleStyle}
        >
          {<span>{this.title}</span>}
          {this.renderLabel()}
        </div>
      );
    }
  };

  renderValue = () => {
    const hasTitle = isDef(this.title);
    const hasValue = isDef(this.value);

    if (hasValue) {
      return (
        <div
          class={classNames({
            'glue-cell__value': true,
            'glue-cell__value--alone': !hasTitle,
          })}
        >
          {<span>{this.value}</span>}
        </div>
      );
    }
  };

  renderLeftIcon = () => {
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
    if (this.isLink) {
      const name = this.arrowDirection ? `arrow-${this.arrowDirection}` : 'arrow';
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
    //TODO:边框未生效
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
        onClick={this.handleClick}
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
