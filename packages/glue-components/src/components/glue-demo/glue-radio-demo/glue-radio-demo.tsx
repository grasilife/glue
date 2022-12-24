import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-radio-demo',
styleUrl: 'glue-radio-demo.less',
shadow: false,
})
export class GlueRadioDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}