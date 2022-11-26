import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  render() {
    return (
      <Host>
        {/* <glue-number-keyboard-demo></glue-number-keyboard-demo> */}
        {/* <glue-password-input-demo></glue-password-input-demo> */}
        {/* <glue-doc-block-demo></glue-doc-block-demo> */}
      </Host>
    );
  }
}
