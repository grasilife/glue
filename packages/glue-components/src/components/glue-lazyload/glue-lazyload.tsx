import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-lazyload',
  styleUrl: 'glue-lazyload.less',
  shadow: false,
})
export class GlueLazyload {
  @Prop() first: string;

  render() {
    return (
      <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>
    );
  }
}
