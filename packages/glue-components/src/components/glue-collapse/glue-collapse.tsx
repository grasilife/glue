import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-collapse',
  styleUrl: 'glue-collapse.less',
  shadow: false,
})
export class GlueCollapse {
  @Prop() accordion: boolean;

  @Prop() modelValue = '';

  @Prop() border = true;

  render() {
    return (
      <Host class={classNames('glue-collapse')}>
        <slot></slot>
      </Host>
    );
  }
}
