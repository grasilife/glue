import { Component, h, State } from '@stencil/core';
import Toast from '../glue-toast/index';
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
  componentDidLoad() {
    Toast('提示内容');
  }
  render() {
    return (
      <div class="container">
        {/* <glue-badge content="5" offset={[5, 5]}>
          <div class="child" />
        </glue-badge> */}
        <glue-badge content="#slot" offset={[5, 5]}>
          <div class="child" />
          <glue-icon name="success" class="badge-icon" slot="content" size="12" />
        </glue-badge>
      </div>
    );
  }
}
