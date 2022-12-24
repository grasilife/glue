import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-popup-demo',
styleUrl: 'glue-popup-demo.less',
shadow: false,
})
export class GluePopupDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}