import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';

export type DividerContentPosition = 'left' | 'center' | 'right';
@Component({
  tag: 'glue-divider',
  styleUrl: 'glue-divider.less',
  shadow: false,
})
export class GlueDivider {
  @Prop() dashed: boolean;

  @Prop() hairline = true;
  @Prop() text: string;
  @Prop() contentPosition: DividerContentPosition = 'center';

  render() {
    console.log(this, 'hiahau');
    return (
      <Host
        role="separator"
        class={classNames('glue-divider', {
          'glue-divider--dashed': this.dashed,
          'glue-divider--hairline': this.hairline,
          [`glue-divider--content-${this.contentPosition}`]: this.text,
        })}
      >
        {this.text}
      </Host>
    );
  }
}
