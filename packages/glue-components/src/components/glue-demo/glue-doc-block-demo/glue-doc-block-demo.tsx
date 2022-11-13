import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-doc-block-demo',
  styleUrl: 'glue-doc-block-demo.less',
  shadow: false,
})
export class GlueDocBlockDemo {
  @Prop() first: string;

  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle="基础用法"></glue-doc-block>
          <glue-doc-block gtitle="自定义长度"></glue-doc-block>
        </glue-doc-section>
      </div>
    );
  }
}
