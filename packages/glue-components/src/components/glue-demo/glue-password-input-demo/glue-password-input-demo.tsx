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
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle="基础用法">
            <glue-password-input value="v123" />
          </glue-doc-block>
          <glue-doc-block gtitle="自定义长度"></glue-doc-block>
        </glue-doc-section>
      </div>
    );
  }
}
