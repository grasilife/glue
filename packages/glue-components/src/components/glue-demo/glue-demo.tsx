import { Component, h, State } from '@stencil/core';
// import Toast from '../glue-toast/index';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  timeRef;
  container;
  @State() open: boolean = false;
  @State() gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6',
  };
  @State() currentRate = 10;
  @State() currentTime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  handleClick = () => {
    this.currentRate = this.currentRate + 10;
  };
  onGlueClose = () => {
    this.open = false;
  };
  onGlueChange = e => {
    console.log(e, 'hauhaihiuahihu');
    this.currentTime = { ...e.detail.currentTime };
  };
  start = () => {
    this.timeRef.start();
  };
  pause = () => {
    this.timeRef.pause();
  };
  reset = () => {
    this.timeRef.reset();
  };
  @State() list = [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1];
  @State() loading = true;
  @State() finished = false;
  onLoad = () => {};
  componentDidLoad() {
    console.log(this.container, 'ahuhfauh');
  }
  render() {
    return (
      <div class="container">
        {/* <div onClick={this.handleClick}>1111</div> */}
        {/* <glue-collapse model-value={[]}>
          <glue-collapse-item title="标题1" name="1" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
          <glue-collapse-item title="标题2" name="2" is-link>
            代码是写出来给人看的，附带能在机器上运行
          </glue-collapse-item>
        </glue-collapse> */}
        {/* <glue-count-down
          autoStart
          time={3000}
          millisecond
          format="HH:mm:ss:SS"
          onGlueChange={this.onGlueChange}
          custom
          ref={dom => {
            this.timeRef = dom;
          }}
        >
          <span class="block">{this.currentTime.hours}</span>
          <span class="colon">:</span>
          <span class="block"> {this.currentTime.minutes}</span>
          <span class="colon">:</span>
          <span class="block">{this.currentTime.seconds} </span>
        </glue-count-down>
        <button onClick={this.start}>开始</button>
        <button onClick={this.pause}>暂停</button>
        <button onClick={this.reset}>重置</button>
        <glue-divider /> */}
        {/* <glue-list loading={this.loading} finished={this.finished} finished-text="没有更多了" onLoad={this.onLoad} loading-text="#slot">
          <div slot="loading-text">自定义加载中</div>
          {this.list.map(item => {
            return <glue-cell title={item.toString()}></glue-cell>;
          })}
        </glue-list> */}

        {/* <glue-progress percentage={50} stroke-width={8} inactive /> */}
        {/* <glue-skeleton title-state row={3} avatar avatar-shape="round" round avatar-size={80} loading={false}>
          <div>实际内容</div>
        </glue-skeleton> */}
        <div
          class="sticky"
          ref={dom => {
            this.container = dom;
          }}
        >
          <glue-sticky offset-bottom-value={50} position="top">
            <glue-button type="primary">基础用法</glue-button>
          </glue-sticky>
        </div>
      </div>
    );
  }
}
