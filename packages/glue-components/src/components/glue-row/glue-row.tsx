import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
export type RowAlign = 'top' | 'center' | 'bottom';

export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-row');
@Component({
  tag: 'glue-row',
  styleUrl: 'glue-row.less',
  shadow: false,
})
export class GlueRow {
  @Prop() align: RowAlign;

  @Prop() justify: RowJustify;

  @Prop() gutter = 0;

  render() {
    const { align, justify } = this;
    console.log(align, justify, 'hauhauhua');
    return (
      <Host class={classNames('glue-row', bem([`align-${align}`, `justify-${justify}`]))}>
        <slot></slot>
      </Host>
    );
  }
}
