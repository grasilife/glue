import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-index-bar-demo',
styleUrl: 'glue-index-bar-demo.less',
shadow: false,
})
export class GlueIndexBarDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}