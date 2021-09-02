import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-submit-bar',
  styleUrl: 'glue-submit-bar.less',
  shadow: false,
})
export class GlueSubmitBar {
  @Prop() first: string;

  render() {
    return (
      <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>
    );
  }
}
