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
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <glue-button type="primary" onGlueClick={this.handleClick}>
          主要按钮
        </glue-button>
        <glue-button type="success">成功按钮</glue-button>
        <glue-button type="default">默认按钮</glue-button>
        <glue-button type="warning">警告按钮</glue-button>
        <glue-button type="danger">危险按钮</glue-button>
        {/* 朴素按钮 */}
        <glue-button plain type="primary">
          朴素按钮
        </glue-button>
        <glue-button plain type="success">
          朴素按钮
        </glue-button>
        {/* 细边框 */}
        <glue-button hairline plain type="primary">
          细边框按钮
        </glue-button>
        <glue-button plain hairline type="success">
          细边框按钮
        </glue-button>
        <glue-button disabled type="primary">
          禁用状态
        </glue-button>
        <glue-button disabled type="success">
          禁用状态
        </glue-button>
        <glue-button loading type="primary"></glue-button>
        <glue-button loading type="primary" loading-type="spinner"></glue-button>
        <glue-button loading type="primary" loading-text="加载中..."></glue-button>
        <glue-button square type="primary">
          方形按钮
        </glue-button>
        <glue-button round type="primary">
          圆形按钮
        </glue-button>
        <glue-button icon="plus" type="primary" />
        <glue-button icon="plus" type="primary">
          按钮
        </glue-button>
        <glue-button plain icon="https://img01.yzcdn.cn/vant/user-active.png" type="primary">
          按钮
        </glue-button>
        <glue-button type="primary" size="large">
          大号按钮
        </glue-button>
        <glue-button type="primary" size="normal">
          普通按钮
        </glue-button>
        <glue-button type="primary" size="small">
          小型按钮
        </glue-button>
        <glue-button type="primary" size="mini">
          迷你按钮
        </glue-button>
        <glue-button type="primary" block>
          块级元素
        </glue-button>
        {/* <glue-button type="primary" url="/vant/mobile.html">
          URL 跳转
        </glue-button>
        <glue-button type="primary" to="index">
          路由跳转
        </glue-button> */}
        <glue-button color="#7232dd">单色按钮</glue-button>
        <glue-button color="#7232dd" plain>
          单色按钮
        </glue-button>
        <glue-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</glue-button>
      </div>
    );
  }
}
