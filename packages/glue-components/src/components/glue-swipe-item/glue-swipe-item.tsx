import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-swipe-item',
styleUrl: 'glue-swipe-item.less',
shadow: false,
})
export class GlueSwipeItem {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}