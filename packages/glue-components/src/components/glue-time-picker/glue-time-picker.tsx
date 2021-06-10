import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-time-picker',
styleUrl: 'glue-time-picker.less',
shadow: false,
})
export class GlueTimePicker {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}