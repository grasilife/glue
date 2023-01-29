import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-dropdown-menu-demo',
  styleUrl: 'glue-dropdown-menu-demo.less',
  shadow: false,
})
export class GlueDropdownMenuDemo {
  @Prop() first: string;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
