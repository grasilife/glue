import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'glue-number-keyboard-demo',
  styleUrl: 'glue-number-keyboard-demo.less',
  shadow: false,
})
export class GlueNumberKeyboardDemo {
  @Prop() first: string;
  @State() show: boolean = true;
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
    this.show = false;
  };
  onCellClick = (event) => {
    console.log(event, 'onCellClick');
    this.show = true;
  };

  render() {
    return (
      <div>
        <glue-cell g_title="弹出默认键盘" isLink onClick={this.onCellClick} />
        <glue-number-keyboard
          show={this.show}
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
