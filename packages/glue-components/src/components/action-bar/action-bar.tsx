import { Component, Prop, h, Host } from '@stencil/core';
// import { createNamespace } from '../../utils/create/index';
@Component({
  tag: 'action-bar',
  styleUrl: 'action-bar.less',
  shadow: false,
})
export class ActionBar {
  @Prop() safeAreaInsetBottom: true;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
