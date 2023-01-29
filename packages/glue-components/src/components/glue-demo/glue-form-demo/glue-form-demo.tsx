import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-form-demo',
  styleUrl: 'glue-form-demo.less',
  shadow: false,
})
export class GlueFormDemo {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
