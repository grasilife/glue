import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop({ mutable: true }) show = true;
  @State() showShare = true;
  @State() list = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, ,];
  handleClick = e => {
    console.log(e);
  };
  renderTeleport() {
    this.show = true;
    console.log(this.show, 'this.showShare');
  }
  render() {
    return (
      <div>
        <div onClick={this.renderTeleport}>11111</div>

        {/* <glue-popup show={true}>
          <div style={{ padding: '30px 50px' }}>内容</div>
        </glue-popup> */}
        {/* <glue-popup show={true} position="left" style={{ height: '30%' }} /> */}
        <glue-popup
          show={this.show}
          closeable
          position="bottom"
          close-icon="close"
          style={{ height: '30%' }}
          close-icon-position="top-left"
          duration={1000}
          onGlueClose={() => {
            this.showShare = false;
            console.log(this.show, 'this.showShare');
          }}
        ></glue-popup>
      </div>
    );
  }
}
