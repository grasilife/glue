import { Component, Prop, h, Host } from '@stencil/core';
// import { createNamespace } from '../../utils/create/index';
@Component({
  tag: 'glue-action-bar',
  styleUrl: 'glue-action-bar.less',
  shadow: false,
})
export class GlueActionBar {
  @Prop() safeAreaInsetBottom: true;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
