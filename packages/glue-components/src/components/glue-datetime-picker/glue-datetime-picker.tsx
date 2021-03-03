import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-datetime-picker',
styleUrl: 'glue-datetime-picker.less',
shadow: false,
})
export class GlueDatetimePicker {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}