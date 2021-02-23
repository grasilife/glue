import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-sidebar',
  styleUrl: 'glue-sidebar.less',
  shadow: false,
})
export class GlueSidebar {
  @Prop() modelValue = 0;

  render() {
    return (
      <Host class="glue-sidebar">
        <slot></slot>
      </Host>
    );
  }
}
