import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-collapse-demo',
styleUrl: 'glue-collapse-demo.less',
shadow: false,
})
export class GlueCollapseDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}