import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'glue-number-keyboard-demo',
  styleUrl: 'glue-number-keyboard-demo.less',
  shadow: false,
})
export class GlueNumberKeyboardDemo {
  @Prop() first: string;
  @State() keyboard: string = 'default';
  onGlueInput = (event) => {
    console.log(event, 'onGlueInput');
  };
  onGlueClose = (event) => {
    console.log(event, 'onGlueClose');
  };
  onGlueDelete = (event) => {
    console.log(event, 'onGlueDelete');
  };
  onGlueChange = (event) => {
    console.log(event, 'onGlueChange');
  };
  onGlueBlur = (event) => {
    console.log(event, 'onGlueBlur');
    // this.show = false;
  };
  onCellClick = (event) => {
    console.log(event, 'onCellClick');
    // this.show = true;
  };

  render() {
    return (
      <div>
        <glue-cell
          g_title="弹出默认键盘"
          isLink
          onClick={() => {
            this.keyboard = 'default';
          }}
        />
        <glue-cell
          g_title="弹出带右侧栏的键盘"
          isLink
          onClick={() => {
            this.keyboard = 'custom';
          }}
        />
        <glue-cell
          g_title="弹出身份证号键盘"
          isLink
          onClick={this.onCellClick}
        />
        <glue-cell
          g_title="弹出带标题的键盘"
          isLink
          onClick={this.onCellClick}
        />
        <glue-cell
          g_title="弹出配置多个按键的键盘"
          isLink
          onClick={this.onCellClick}
        />
        <glue-cell
          g_title="弹出配置随机数字的键盘"
          isLink
          onClick={this.onCellClick}
        />

        <glue-number-keyboard
          show={this.keyboard == 'default'}
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
        <glue-number-keyboard
          show={this.keyboard === 'custom'}
          theme="custom"
          extra-key="."
          close-button-text="完成"
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
