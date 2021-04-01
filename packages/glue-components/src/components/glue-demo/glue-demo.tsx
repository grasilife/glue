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
        {/* <glue-cell title="cell" value="content" icon="location-o" /> */}
        <glue-icon name="chat-o" />
        {/* <glue-badge content="5">
          <div class="child" />
        </glue-badge> */}
      </div>
    );
  }
}
