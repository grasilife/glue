import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-radio-demo',
  styleUrl: 'glue-radio-demo.less',
  shadow: false,
})
export class GlueRadioDemo {
  @State() basicUsage: string = '基础用法';
  @State() radio: string = '单选框';
  @State() radio1: string = '1';
  @State() radio2: string = '2';
  @State() radio3: string = '1';
  @State() radio4: string = '1';
  @State() radio5: string = '1';

  render() {
    return <div class={classNames('cunstom')}>
      <glue-doc-section>
        <glue-doc-block card={true} gtitle={this.basicUsage}>
          <glue-radio-group modelValue={this.radio1}>
            <glue-radio name='1' label={this.radio} ></glue-radio>
            <glue-radio name='2' label={this.radio}></glue-radio>
          </glue-radio-group>

        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.basicUsage}>
          <glue-radio-group modelValue={this.radio1}>
            <glue-radio name='1' label={this.radio} ></glue-radio>
            <glue-radio name='2' label={this.radio}></glue-radio>
          </glue-radio-group>
        </glue-doc-block>
      </glue-doc-section>

    </div>;
  }
}
