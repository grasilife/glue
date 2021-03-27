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
        <glue-icon name="chat-o"></glue-icon>
        <glue-icon name="chat-o" badge="99+"></glue-icon>
        <glue-badge content="5" slot-content>
          <div class="child"></div>
        </glue-badge>
      </div>
    );
  }
}
