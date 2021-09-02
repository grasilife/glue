import { Component, Prop, h, Host, Element } from '@stencil/core';
import classNames from 'classnames';
export type RowAlign = 'top' | 'center' | 'bottom';

export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';
import { createNamespace } from '../../utils/create/index';
export type RowSpaces = { left?: number; right: number }[];
const [bem] = createNamespace('glue-row');
@Component({
  tag: 'glue-row',
  styleUrl: 'glue-row.less',
  shadow: false,
})
export class GlueRow {
  @Element() el!: HTMLGlueRowElement;
  @Prop() align: RowAlign;

  @Prop() justify: RowJustify;
  @Prop({
    reflect: true,
  })
  gutter: string | number = 0;

  componentDidLoad() {}

  render() {
    const { align, justify } = this;
    console.log(justify, 'justify');
    return (
      <Host
        class={classNames(
          'glue-row',
          bem([`align-${align}`, `justify-${justify}`])
        )}
      >
        <slot></slot>
      </Host>
    );
  }
}
