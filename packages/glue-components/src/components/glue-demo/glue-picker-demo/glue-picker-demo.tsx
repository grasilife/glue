import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-picker-demo',
  styleUrl: 'glue-picker-demo.less',
  shadow: false,
})
export class GluePickerDemo {
  @State() title: string = '标题';
  @State() basicUsage: string = '基础用法';
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block card={true} gtitle={this.basicUsage}>
            <glue-picker showToolbar gtitle={this.title}></glue-picker>
          </glue-doc-block>
          <glue-doc-block card={true} gtitle={this.basicUsage}>
            <glue-picker showToolbar gtitle={this.title} defaultIndex={2}></glue-picker>
          </glue-doc-block>
        </glue-doc-section>
      </div>
    );
  }
}
