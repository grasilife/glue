import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-sidebar-demo',
styleUrl: 'glue-sidebar-demo.less',
shadow: false,
})
export class GlueSidebarDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}