import { Component, Prop, h, Host } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
// import { BORDER_TOP } from '../../global/constant/';
import classNames from 'classnames';
export type GridDirection = 'horizontal' | 'vertical';
@Component({
  tag: 'glue-grid',
  styleUrl: 'glue-grid.less',
  shadow: false,
})
export class GlueGrid {
  @Prop({
    reflect: true,
  })
  center: boolean;
  @Prop({
    reflect: true,
  })
  border: boolean;
  @Prop({
    reflect: true,
  })
  square: boolean;
  @Prop({
    reflect: true,
  })
  gutter: number | string;
  @Prop({
    reflect: true,
  })
  iconSize: number | string = 28;
  @Prop({
    reflect: true,
  })
  columnNum: number | string = 4;
  @Prop({
    reflect: true,
  })
  direction: GridDirection;
  @Prop({
    reflect: true,
  })
  clickable: boolean;

  render() {
    return (
      <Host
        style={{ paddingLeft: addUnit(this.gutter) }}
        class={classNames('glue-grid', {
          'glue-grid__border': this.border,
          'glue-grid__gutter': this.gutter,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
