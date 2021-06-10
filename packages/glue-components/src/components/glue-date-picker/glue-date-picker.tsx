import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-date-picker',
styleUrl: 'glue-date-picker.less',
shadow: false,
})
export class GlueDatePicker {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}