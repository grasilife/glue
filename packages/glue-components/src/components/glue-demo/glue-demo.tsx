import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop({ mutable: true }) show = true;
  @State() open: boolean = true;
  @State() list = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, ,];

  handleClick = () => {
    this.open = true;
  };
  onGlueClose = () => {
    this.open = false;
  };
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>点击 </div>
        <button>{this.open ? 'On' : 'Off'}</button>
        {/* <glue-popup show={true}>
          <div style={{ padding: '30px 50px' }}>内容</div>
        </glue-popup> */}
        {/* <glue-popup show={true} position="left" style={{ height: '30%' }} /> */}
        <glue-popup
          show={this.open}
          closeable
          position="bottom"
          close-icon="close"
          style={{ height: '30%' }}
          close-icon-position="top-left"
          duration={1000}
          onGlueClose={this.onGlueClose}
        ></glue-popup>
      </div>
    );
  }
}
