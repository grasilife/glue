import { Component, Prop, h } from '@stencil/core';
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
  @Prop() center: boolean;
  @Prop() border: boolean;
  @Prop() square: boolean;
  @Prop() gutter: number | string;
  @Prop() iconSize: number | string;
  @Prop() columnNum: number | string;
  @Prop() direction: GridDirection;
  @Prop() clickable: boolean;

  render() {
    return (
      <div
        style={{ paddingLeft: addUnit(this.gutter) }}
        class={classNames('glue-grid', {
          'glue-grid__border': this.border,
          'glue-grid__gutter': this.gutter,
        })}
      >
        <slot></slot>
      </div>
    );
  }
}
