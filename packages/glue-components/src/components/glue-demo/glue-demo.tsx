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

  render() {
    return (
      <div>
        <glue-button type="primary">主要按钮</glue-button>
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
      </div>
    );
  }
}
