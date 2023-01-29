import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'glue-number-keyboard-demo',
  styleUrl: 'glue-number-keyboard-demo.less',
  shadow: false,
})
export class GlueNumberKeyboardDemo {
  @Prop() first: string;
  @State() keyboard: string = 'default';
  @State() extraKey: any[] = ['00', '.'];
  onGlueInput = event => {
    console.log(event, 'onGlueInput');
  };
  onGlueClose = event => {
    console.log(event, 'onGlueClose');
  };
  onGlueDelete = event => {
    console.log(event, 'onGlueDelete');
  };
  onGlueChange = event => {
    console.log(event, 'onGlueChange');
  };
  onGlueBlur = event => {
    console.log(event, 'onGlueBlur');
    // this.show = false;
  };
  onCellClick = event => {
    console.log(event, 'onCellClick');
    // this.show = true;
  };

  render() {
    return (
      <div>
        <glue-cell
          gtitle="弹出默认键盘"
          isLink
          onClick={() => {
            this.keyboard = 'default';
          }}
        />
        <glue-cell
          gtitle="弹出带右侧栏的键盘"
          isLink
          onClick={() => {
            this.keyboard = 'custom';
          }}
        />
        <glue-cell
          gtitle="弹出身份证号键盘"
          isLink
          onClick={() => {
            this.keyboard = 'extraKey';
          }}
        />
        <glue-cell
          gtitle="弹出带标题的键盘"
          isLink
          onClick={() => {
            this.keyboard = 'title';
          }}
        />
        <glue-cell
          gtitle="弹出配置多个按键的键盘"
          isLink
          onClick={() => {
            this.keyboard = 'multiExtraKey';
          }}
        />
        <glue-cell
          gtitle="弹出配置随机数字的键盘"
          isLink
          onClick={() => {
            this.keyboard = 'randomKeyOrder';
          }}
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
          extraKey="."
          close-button-text="完成"
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
        <glue-number-keyboard
          show={this.keyboard === 'extraKey'}
          extraKey="X"
          close-button-text="完成"
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
        <glue-number-keyboard
          show={this.keyboard === 'title'}
          gtitle="键盘标题"
          extraKey="."
          close-button-text="完成"
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
        <glue-number-keyboard
          show={this.keyboard === 'multiExtraKey'}
          theme="custom"
          extraKey={this.extraKey}
          close-button-text="完成"
          onGlueBlur={this.onGlueBlur}
          onGlueInput={this.onGlueInput}
          onGlueClose={this.onGlueClose}
          onGlueDelete={this.onGlueDelete}
          onGlueChange={this.onGlueChange}
        />
        <glue-number-keyboard
          show={this.keyboard === 'randomKeyOrder'}
          random-key-order
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
