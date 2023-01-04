import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-search-demo',
  styleUrl: 'glue-search-demo.less',
  shadow: false,
})
export class GlueSearchDemo {
  @State() basicUsage: string = '基础用法';
  @State() listenToEvents: string = '事件监听';
  @State() inputAlign: string = '搜索框内容对齐';
  @State() disabled: string = '禁用搜索框';
  @State() background: string = '自定义背景色';
  @State() placeholder: string = '请输入搜索关键词';
  @State() customButton: string = '自定义按钮';
  @State() value1: string = '';
  glueSearch(e) {
    console.log(e, 'glueSearch');
  }
  glueCancel(e) {
    console.log(e, 'glueCancel');
  }
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block card={true} gtitle={this.basicUsage}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
            ></glue-search>
          </glue-doc-block>
          <glue-doc-block card={true} gtitle={this.listenToEvents}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
              showAction={true}
              onGlueSearch={(e) => {
                this.glueSearch(e);
              }}
              onGlueCancel={(e) => {
                this.glueCancel(e);
              }}
            ></glue-search>
          </glue-doc-block>
          <glue-doc-block card={true} gtitle={this.inputAlign}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
              inputAlign='center'
            ></glue-search>
          </glue-doc-block>
          <glue-doc-block card={true} gtitle={this.disabled}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
              disabled={true}
            ></glue-search>
          </glue-doc-block>
          <glue-doc-block card={true} gtitle={this.background}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
              shape='round'
              background="#4fc08d"
            ></glue-search>
          </glue-doc-block>
          {/* <glue-doc-block card={true} gtitle={this.customButton}>
            <glue-search
              modelValue={this.value1}
              placeholder={this.placeholder}
              shape='round'
              background="#4fc08d"
            ></glue-search>
          </glue-doc-block> */}
        </glue-doc-section>
      </div>
    );
  }
}
