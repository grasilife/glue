import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-tabbar-item',
styleUrl: 'glue-tabbar-item.less',
shadow: false,
})
export class GlueTabbarItem {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}