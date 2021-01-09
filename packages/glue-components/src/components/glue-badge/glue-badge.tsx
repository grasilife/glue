import { Component, Prop, h, Host } from '@stencil/core';
import { isDef } from '../../utils/base';
import classNames from 'classnames';
// import { isNumeric } from '../../utils/validate/number';
@Component({
  tag: 'glue-badge',
  styleUrl: 'glue-badge.less',
  shadow: false,
})
export class GlueBadge {
  @Prop() dot: boolean;
  @Prop() max: number | string;

  @Prop() color: string;
  @Prop() content: number | string;

  @Prop() tag: string = 'dev';

  hasContent = () => !!(this.content || isDef(this.content));

  renderBadge = () => {
    console.log(this, 'ahfuahuh');
    console.log(this.hasContent(), this.content, 'this.hasContent()');
    if (this.hasContent() || this.dot) {
      return (
        <div
          class={classNames({
            'glue-badge': true,
            'glue-badge--fixed': true,
            'glue-badge--dot': this.dot,
          })}
          style={{ background: this.color }}
        >
          {this.renderContent()}
        </div>
      );
    }
  };

  renderContent = () => {
    const { dot, max, content } = this;
    console.log(this);
    if (!dot && this.hasContent()) {
      if (isDef(max)) {
        return `${max}+`;
      }
      console.log(content, 'content');
      return content;
    }
  };
  render() {
    return (
      <Host
        class={classNames({
          'glue-badge__wrapper': true,
        })}
      >
        <slot></slot>
        {this.renderBadge()}
      </Host>
    );
  }
}
