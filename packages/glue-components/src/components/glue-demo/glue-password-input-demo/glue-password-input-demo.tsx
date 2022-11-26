import { Component, h, State } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-password-input-demo',
  styleUrl: 'glue-password-input-demo.less',
  shadow: false,
})
export class GluePasswordInputDemo {
  @State() current: string = 'basicUsage';
  @State() info: string = '密码为 6 位数字';
  @State() errorInfo: string = '密码错误';
  @State() value: any = {
    showInfo: '123',
    addGutter: '123',
    basicUsage: '123',
    removeMask: '123',
    customLength: '123',
  };
  onGlueInput = (event) => {
    console.log(event, 'onGlueInput');
    let key = event.detail;
    const maxlegnth = this.current === 'customLength' ? 4 : 6;
    const newValue = (this.value[this.current] + key).slice(0, maxlegnth);
    this.value = { ...this.value, [this.current]: newValue };
    console.log(this.value, this.current, newValue, 'newValue');

    if (
      this.current === 'showInfo' &&
      newValue.length === 6 &&
      newValue !== '123456'
    ) {
      this.errorInfo = this.errorInfo;
    }
  };
  onGlueClose = (event) => {
    console.log(event, 'onGlueClose');
  };
  onGlueDelete = (event) => {
    console.log(event, 'onGlueDelete');
    const newValue = this.value[this.current].slice(
      0,
      this.value[this.current].length - 1
    );
    this.value = { ...this.value, [this.current]: newValue };
    if (this.current === 'showInfo') {
      this.errorInfo = '';
    }
  };
  onGlueChange = (event) => {
    console.log(event, 'onGlueChange');
  };
  onGlueBlur = (event) => {
    console.log(event, 'onGlueBlur');
    // this.show = false;
    this.current = '';
  };
  onCellClick = (event) => {
    console.log(event, 'onCellClick');
    // this.show = true;
  };
  onGlueFocus = (event) => {
    console.log(event, 'onGlueFocus');
  };
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle="基础用法">
            {this.value.basicUsage}
            <glue-password-input
              value={this.value.basicUsage}
              onGlueFocus={this.onGlueFocus}
              focused={this.current === 'basicUsage'}
            />
          </glue-doc-block>
          <glue-doc-block gtitle="自定义长度"></glue-doc-block>
        </glue-doc-section>
        <glue-number-keyboard
          show={!!this.current}
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
      </div>
    );
  }
}
