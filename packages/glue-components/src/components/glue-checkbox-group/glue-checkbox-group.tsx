import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-checkbox-group',
styleUrl: 'glue-checkbox-group.less',
shadow: false,
})
export class GlueCheckboxGroup {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}