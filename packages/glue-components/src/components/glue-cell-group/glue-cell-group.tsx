import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-cell-group',
  styleUrl: 'glue-cell-group.less',
  shadow: false,
})
export class GlueCellGroup {
  @Prop() title: string;

  @Prop() border = true;
  group = () => {
    if (this.title) {
      return (
        <Host>
          <div></div>
          <div>
            <slot></slot>
          </div>
        </Host>
      );
    } else {
      return (
        <div>
          <slot></slot>
        </div>
      );
    }
  };

  render() {
    return (
      <Host
        class={classNames('van-cell-group', {
          'van-hairline--top-bottom': true,
          'glue-cell-group__title': this.border,
        })}
      >
        {this.group()}
      </Host>
    );
  }
}
