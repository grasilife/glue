import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'glue-cascader',
  styleUrl: 'glue-cascader.less',
  shadow: false,
})
export class GlueCascader {
  @Prop() first: string;

  render() {
    return <Host class={classNames('cunstom')}></Host>;
  }
}
