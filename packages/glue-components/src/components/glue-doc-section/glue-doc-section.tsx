import { Component, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-doc-section',
  styleUrl: 'glue-doc-section.less',
  shadow: false,
})
export class GlueDocSection {
  render() {
    return (
      <section class={classNames('glue-doc-section')}>
        <slot />
      </section>
    );
  }
}
