import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-image-preview-item',
  styleUrl: 'glue-image-preview-item.less',
  shadow: false,
})
export class GlueImagePreviewItem {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
