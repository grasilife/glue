import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
tag: 'glue-pull-refresh-demo',
styleUrl: 'glue-pull-refresh-demo.less',
shadow: false,
})
export class GluePullRefreshDemo {
@Prop() first: string;

render() {
return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
}
}