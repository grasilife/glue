import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-action-bar',
  styleUrl: 'glue-action-bar.less',
  shadow: false,
})
export class GlueActionBar {
  @Prop() safeAreaInsetBottom: true;

  render() {
    return (
      <Host
        class={classNames({
          'glue-action-bar--unfit': true,
          'glue-action-bar': true,
        })}
      >
        <slot />
      </Host>
    );
  }
}
