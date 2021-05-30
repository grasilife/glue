import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-cascader-month',
styleUrl: 'glue-cascader-month.less',
shadow: false,
})
export class GlueCascaderMonth {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}