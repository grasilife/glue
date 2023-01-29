import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-field-demo',
  styleUrl: 'glue-field-demo.less',
  shadow: false,
})
export class GlueFieldDemo {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
