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
        {/* <glue-popup round position="bottom" style={{ height: '30%' }} show={true} /> */}
        <glue-popup show={true}>
          <div style={{ padding: '30px 50px' }}>内容</div>
        </glue-popup>
        {/* <glue-image width="100%" height="27vw" loading-icon="#slot">
          <div slot="loadingIcon">
            <glue-loading type="spinner" size="20" />
          </div>
        </glue-image> */}
        {/* <glue-image width="100%" height="27vw" src="x" error-icon="#slot">
          <div slot="errorIcon">加载失败</div>
        </glue-image> */}
      </div>
    );
  }
}
