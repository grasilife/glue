import { Component, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-doc-section',
  styleUrl: 'glue-doc-section.less',
  shadow: false,
})
export class GlueDocSection {
  render() {
    return (
      <Host class={classNames('glue-doc-section')}>
        <slot />
      </Host>
    );
  }
}
