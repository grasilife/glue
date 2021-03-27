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
        <glue-icon name="chat-o" />
        <glue-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <glue-icon name="chat-o" dot />
        <glue-icon name="chat-o" badge="9" />
        <glue-icon name="chat-o" badge="99+" />
        <glue-icon name="cart-o" color="#1989fa" />
        <glue-icon name="fire-o" color="#ee0a24" />
        <glue-icon name="chat-o" size="40" />
        <glue-icon name="chat-o" size="3rem" />
      </div>
    );
  }
}
