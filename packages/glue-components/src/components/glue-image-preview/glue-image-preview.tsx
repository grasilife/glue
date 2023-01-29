import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-image-preview',
  styleUrl: 'glue-image-preview.less',
  shadow: false,
})
export class GlueImagePreview {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
