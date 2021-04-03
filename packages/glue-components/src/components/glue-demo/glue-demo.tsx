import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop() first: string;
  @State() showShare = false;
  @State() list = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, ,];
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        {/* <glue-popup show={true}>
          <div style={{ padding: '30px 50px' }}>内容</div>
        </glue-popup> */}
        {/* <glue-popup show={true} position="left" style={{ height: '30%' }} /> */}
        <glue-popup show={true} closeable position="bottom" close-icon="close" style={{ height: '30%' }} close-icon-position="top-left" duration={1000} teleport="body" />
      </div>
    );
  }
}
