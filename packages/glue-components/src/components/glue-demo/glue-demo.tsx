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
  @State() gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6',
  };
  @State() currentRate = 10;
  handleClick = () => {
    this.currentRate = this.currentRate + 10;
  };
  onGlueClose = () => {
    this.open = false;
  };
  onGlueChange = e => {
    console.log(e, 'hauhaihiuahihu');
  };
  componentDidLoad() {
    Toast('提示内容');
  }
  render() {
    return (
      <div class="container">
        {/* <div onClick={this.handleClick}>1111</div> */}
        <glue-collapse model-value={[]}>
          <glue-collapse-item title="标题1" name="1" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
          <glue-collapse-item title="标题2" name="2" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
          <glue-collapse-item title="标题3" name="3" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
        </glue-collapse>
      </div>
    );
  }
}
