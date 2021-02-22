import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-swipe',
  styleUrl: 'glue-swipe.less',
  shadow: false,
})
export class GlueSwipe {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
