import { Component, h, State } from '@stencil/core';
import Toast from '../glue-toast/index';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @State() open: boolean = false;
  @State() gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6',
  };
  @State() currentRate = 10;
  handleClick = () => {
    this.currentRate = this.currentRate + 10;
  };
  onGlueClose = () => {
    this.open = false;
  };
  componentDidLoad() {
    Toast('提示内容');
  }
  render() {
    return (
      <div class="container">
        <div onClick={this.handleClick}>1111</div>
        <glue-circle current-rate={10} rate={this.currentRate} speed={100} text="text" lineColor={this.gradientColor} />
      </div>
    );
  }
}
