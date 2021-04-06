import { Component, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @State() open: boolean = false;
  @State() list = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, ,];

  handleClick = () => {
    this.open = true;
  };
  onGlueClose = () => {
    this.open = false;
  };
  render() {
    return (
      <div class="container">
        <div onClick={this.handleClick}>点击 </div>
        {/* <glue-toast message="提示内容" show={this.open} type="text"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="loading"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="success"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="fail"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="html"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} icon="like-o" type="icon"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="icon" icon="https://img01.yzcdn.cn/vant/logo.png"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} loading-type="spinner" type="loading"></glue-toast> */}
        {/* <glue-toast message="提示内容" show={this.open} type="text" position="bottom"></glue-toast> */}
        <glue-toast message="倒计时 3 秒" show={this.open} type="loading"></glue-toast>
        {/* <glue-popup show={this.open} onGlueClose={this.onGlueClose}>
          <div style={{ padding: '30px 50px' }}>内容</div>
        </glue-popup> */}
      </div>
    );
  }
}
