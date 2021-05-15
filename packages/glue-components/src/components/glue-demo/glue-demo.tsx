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
  @State() actions = [
    { name: '选项一', color: '#ee0a24' },
    { name: '选项二', disabled: true },
    { name: '选项三', subname: '描述信息', loading: true },
  ];
  @State() options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
  ];
  @State() open: boolean = false;
  @State() show: boolean = false;
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
  closedHandle = () => {
    this.show = false;
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
  click = () => {
    this.show = true;
  };
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
        {/* <div
          class="sticky"
          ref={dom => {
            this.container = dom;
          }}
        >
          <glue-sticky offset-bottom-value={50} position="top">
            <glue-button type="primary">基础用法</glue-button>
          </glue-sticky>
        </div> */}
        {/* <glue-tag closeable type="primary">
          标签
        </glue-tag> */}
        {/* <glue-cell is-link title="基础用法" onClick={this.click} /> */}
        {/* <glue-action-sheet show={this.show} onGlueClosed={this.closedHandle} actions={this.actions} cancel-text="取消" description="这是一段描述信息" overlay /> */}
        {/* <glue-share-sheet show={this.show} title="立即分享给好友" options={this.options} overlay onGlueClosed={this.closedHandle} /> */}
        {/* <glue-swipe-cell left="#slot" right="#slot">
          <div slot="left">
            <glue-button square type="primary">
              选择
            </glue-button>
          </div>
          <glue-cell border={false} title="单元格" value="内容" />
          <div slot="right">
            <glue-button square type="danger">
              删除
            </glue-button>
            <glue-button square type="primary">
              收藏
            </glue-button>
          </div>
        </glue-swipe-cell> */}
        {/* <glue-action-bar>
          <glue-action-bar-icon icon="chat-o">客服</glue-action-bar-icon>
          <glue-action-bar-icon icon="cart-o">购物车</glue-action-bar-icon>
          <glue-action-bar-icon icon="shop-o">店铺</glue-action-bar-icon>
          <glue-action-bar-button type="warning" left-round={true}>
            加入购物车
          </glue-action-bar-button>
          <glue-action-bar-button type="danger" right-round={true}>
            立即购买
          </glue-action-bar-button>
        </glue-action-bar> */}
        {/* <glue-grid column-num="4" center direction="horizontal">
          <glue-grid-item icon="photo-o" text="文字" custom="#slot">
            <glue-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          </glue-grid-item>
          <glue-grid-item icon="home-o" text="文字" dot />
          <glue-grid-item icon="search" text="文字" badge="99+" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
          <glue-grid-item icon="photo-o" text="文字" />
        </glue-grid> */}
        {/* <glue-index-bar>
          <glue-index-anchor index="A" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-index-anchor index="B" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
          <glue-cell title="文本" />
        </glue-index-bar> */}
        {/* <glue-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow fixed placeholder border /> */}
        {/* <glue-pagination value={1} total-items="24" items-per-page="5" />
        <glue-pagination value={1} page-count="12" mode="simple" />
        <glue-pagination value={1} total-items="125" show-page-size="3" force-ellipses={true} /> */}
        <glue-rate vlaue={1} touchable count={10} color="#ffd21e" void-color="#eee" allow-half />
      </div>
    );
  }
}
