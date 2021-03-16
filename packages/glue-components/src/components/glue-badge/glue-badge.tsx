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
  @Prop() offset: any;
  @Prop() content: number | string;
  @Prop() slotContent: boolean;
  @Element() el!: HTMLElement;
  hasContent = () => !!(isDef(this.content) && this.content !== '');

  renderContent = () => {
    const { dot, max, content } = this;

    if (!dot && this.hasContent()) {
      // if (slots.content) {
      //   return slots.content();
      // }

      if (isDef(max) && isNumeric(content!) && +content > max) {
        return `${max}+`;
      }

      return content;
    }
  };
  renderSlotContent = () => {
    return (
      <div class="glue-badge__wrapper">
        <slot></slot>
        {this.renderBadge()}
      </div>
    );
  };
  renderBadge = () => {
    if (this.hasContent() || this.dot) {
      const style = {
        background: this.color,
      };

      if (this.offset) {
        // const [x, y] = this.offset;
        // if (slots.default) {
        //   style.top = `${y}px`;
        //   style.right = `${-x}px`;
        // } else {
        //   style.marginTop = `${y}px`;
        //   style.marginLeft = `${x}px`;
        // }
      }

      return (
        <div
          class={classNames({
            'glue-badge--dot': this.dot,
            'glue-badge': true,
            'glue-badge--fixed': true,
            // 'glue-badge__wrapper': true,
          })}
          style={style}
        >
          {this.renderContent()}
        </div>
      );
    }
  };
  render() {
    console.log(this.el, this.slotContent, '元素');
    if (this.slotContent) {
      return <Host>{this.renderSlotContent()}</Host>;
    } else {
      return <Host>{this.renderBadge()}</Host>;
    }
  }
}
