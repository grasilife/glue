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
        {/* <glue-picker-demo></glue-picker-demo> */}
        {/* <glue-radio-demo></glue-radio-demo> */}
        {/* <glue-search-demo></glue-search-demo> */}
        {/* <glue-tabbar-demo></glue-tabbar-demo> */}
        {/* <glue-index-bar-demo></glue-index-bar-demo> */}
        {/* <glue-tab-demo></glue-tab-demo> */}
        <glue-swipe-demo></glue-swipe-demo>
      </Host>
    );
  }
}
