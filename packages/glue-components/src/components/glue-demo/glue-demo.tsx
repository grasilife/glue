import { Component, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-number-keyboard-demo></glue-number-keyboard-demo>
        {/* <glue-password-input-demo></glue-password-input-demo> */}
        {/* <glue-doc-block-demo></glue-doc-block-demo> */}
      </div>
    );
  }
}
