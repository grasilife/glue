import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-swipe-demo',
styleUrl: 'glue-swipe-demo.less',
shadow: false,
})
export class GlueSwipeDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}