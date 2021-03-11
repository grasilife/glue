import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-tree-select',
styleUrl: 'glue-tree-select.less',
shadow: false,
})
export class GlueTreeSelect {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}