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
        {/* <glue-image width="100" height="100" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <glue-image width="10rem" height="10rem" fit="contain" src="https://img01.yzcdn.cn/vant/cat.jpeg" /> */}
        {/* <glue-image round width="10rem" height="10rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" /> */}
        {this.list.map(() => {
          return (
            <glue-image lazy-load src="https://img01.yzcdn.cn/vant/cat.jpeg" loading-icon="#slot" error-icon="#slot">
              <div slot="loadingIcon">
                <glue-loading type="spinner" size="20"></glue-loading>
              </div>
              <div slot="errorIcon">加载失败</div>
            </glue-image>
          );
        })}
        {/* <glue-image src="https://img01.yzcdn.cn/vant/cat.jpeg" loading-icon="#slot">
          <div slot="loadingIcon">
            <glue-loading type="spinner" size="20" />
          </div>
        </glue-image>
        <glue-image src="https://img01.yzcdn.cn/vant/cat" error-icon="#slot">
          <div slot="errorIcon">加载失败</div>
        </glue-image> */}
      </div>
    );
  }
}
