import { Component, Prop, h, Host, Element } from '@stencil/core';
import { isDef } from '../../utils/base';
import classNames from 'classnames';
import { isNumeric } from '../../utils/validate/number';
@Component({
  tag: 'glue-badge',
  styleUrl: 'glue-badge.less',
  shadow: false,
})
export class GlueBadge {
  @Prop() dot: boolean;
  @Prop() max: number | string;
  @Prop() color: string;
  @Prop() offset: [number, number];
  @Prop() content: number | string;
  @Prop() slotContent: boolean;
  @Element() el!: HTMLGlueBadgeElement;
  hasContent = () => !!(isDef(this.content) && this.content !== '');

  renderContent = () => {
    const { dot, max, content } = this;
    if (this.content == '#slot') {
      return <slot name="content"></slot>;
    }
    if (!dot && this.hasContent()) {
      if (isDef(max) && isNumeric(content!) && +content > max) {
        return `${max}+`;
      }
      return content;
    }
  };

  renderBadge = () => {
    if (this.hasContent() || this.dot) {
      const style = {
        background: this.color,
        top: '0px',
        right: '0px',
      };

      if (this.offset) {
        const [x, y] = this.offset;
        style.top = `${y}px`;
        style.right = `${x}px`;
      }

      return (
        <div
          class={classNames({
            'glue-badge--dot': this.dot,
            'glue-badge': true,
            'glue-badge--fixed': true,
          })}
          style={style}
        >
          {this.renderContent()}
        </div>
      );
    }
  };
  render() {
    return (
      <Host class="glue-badge__wrapper">
        <slot></slot>
        {this.renderBadge()}
      </Host>
    );
  }
}
