import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-picker-column',
styleUrl: 'glue-picker-column.less',
shadow: false,
})
export class GluePickerColumn {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}