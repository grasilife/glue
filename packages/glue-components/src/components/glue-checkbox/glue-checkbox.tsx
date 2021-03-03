import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-checkbox',
styleUrl: 'glue-checkbox.less',
shadow: false,
})
export class GlueCheckbox {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}