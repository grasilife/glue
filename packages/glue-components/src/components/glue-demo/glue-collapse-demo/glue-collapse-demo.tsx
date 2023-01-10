import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-collapse-demo',
  styleUrl: 'glue-collapse-demo.less',
  shadow: false,
})
export class GlueCollapseDemo {
  @State() basicUsage: string = '基础用法';
  @State() accordion: string = '手风琴';
  @State() titleSlot: string = '自定义标题内容';
  @State() text: string = '代码是写出来给人看的，附带能在机器上运行';
  @State() content: string = '内容';
  @State() disabled: string = '禁用';
  @State() gtitle: string = '标题';
  @State() active1: number[] = [0];
  @State() active2: number = 0;
  @State() active3: number[] = [];
  @State() active4: number[] = [];
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          {/* <glue-doc-block gtitle={this.basicUsage}>
            <glue-collapse modelValue={this.active1}>
              <glue-collapse-item gtitle={this.gtitle + 1} name={0}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 2} name={1}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 3} name={2}>
                {this.text}
              </glue-collapse-item>
            </glue-collapse>
          </glue-doc-block> */}
          <glue-doc-block gtitle={this.accordion}>
            <glue-collapse modelValue={this.active2} accordion>
              <glue-collapse-item gtitle={this.gtitle + 1} name={0}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 2} name={1}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 3} name={2}>
                {this.text}
              </glue-collapse-item>
            </glue-collapse>
          </glue-doc-block>
          {/* <glue-doc-block gtitle={this.disabled}>
            <glue-collapse modelValue={this.active3} accordion>
              <glue-collapse-item gtitle={this.gtitle + 1} name={0}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 2} name={1}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 3} name={2}>
                {this.text}
              </glue-collapse-item>
            </glue-collapse>
          </glue-doc-block>
          <glue-doc-block gtitle={this.titleSlot}>
            <glue-collapse modelValue={this.active4} accordion>
              <glue-collapse-item gtitle={this.gtitle + 1} name={0}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 2} name={1}>
                {this.text}
              </glue-collapse-item>
              <glue-collapse-item gtitle={this.gtitle + 3} name={2}>
                {this.text}
              </glue-collapse-item>
            </glue-collapse>
          </glue-doc-block> */}
        </glue-doc-section>
      </div>
    );
  }
}
