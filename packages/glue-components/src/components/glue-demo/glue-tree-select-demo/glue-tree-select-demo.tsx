import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-tree-select-demo',
styleUrl: 'glue-tree-select-demo.less',
shadow: false,
})
export class GlueTreeSelectDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}