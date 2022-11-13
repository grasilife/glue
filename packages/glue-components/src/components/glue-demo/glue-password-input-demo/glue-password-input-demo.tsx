import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-password-input-demo',
styleUrl: 'glue-password-input-demo.less',
shadow: false,
})
export class GluePasswordInputDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}