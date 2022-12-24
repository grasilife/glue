import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-tabbar-demo',
styleUrl: 'glue-tabbar-demo.less',
shadow: false,
})
export class GlueTabbarDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}