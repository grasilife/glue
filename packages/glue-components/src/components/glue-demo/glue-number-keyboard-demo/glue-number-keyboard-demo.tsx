import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'glue-number-keyboard-demo',
  styleUrl: 'glue-number-keyboard-demo.less',
  shadow: false,
})
export class GlueNumberKeyboardDemo {
  @Prop() first: string;
  onGlueInput = (event) => {
    console.log(event, 'event311');
  };
  render() {
    return <glue-number-keyboard show={true} onGlueInput={this.onGlueInput} />;
  }
}
