import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-dropdown-menu',
  styleUrl: 'glue-dropdown-menu.less',
  shadow: false,
})
export class GlueDropdownMenu {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
