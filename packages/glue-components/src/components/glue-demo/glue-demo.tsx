import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @State() list = [
    {
      items: ['1', '2', '3'],
      refreshing: false,
      loading: false,
      error: false,
      finished: false,
    },
    {
      items: [],
      refreshing: false,
      loading: false,
      error: false,
      finished: false,
    },
    {
      items: [],
      refreshing: false,
      loading: false,
      error: false,
      finished: false,
    },
  ];
  @State() actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];
  onLoad(index) {
    console.log(index);
    // const list = this.list[index];
    // list.loading = true;
    // setTimeout(() => {
    //   if (list.refreshing) {
    //     list.items = [];
    //     list.refreshing = false;
    //   }
    //   for (let i = 0; i < 10; i++) {
    //     const text = list.items.length + 1;
    //     list.items.push(text < 10 ? '0' + text : text);
    //   }
    //   list.loading = false;
    //   list.refreshing = false;
    //   // show error info in second demo
    //   if (index === 1 && list.items.length === 10 && !list.error) {
    //     list.error = true;
    //   } else {
    //     list.error = false;
    //   }
    //   if (list.items.length >= 40) {
    //     list.finished = true;
    //   }
    // }, 1000);
  }

  onRefresh(index) {
    this.list[index].finished = false;
    this.onLoad(index);
  }
  render() {
    return (
      <div>
        {/* <glue-list finished={false} finished-text="没有更多了">
          {this.list[0].items.map((item, key) => {
            console.log(item, key);
            return <glue-cell key={key} title={item} />;
          })}
        </glue-list> */}
        {/* <glue-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"></glue-notice-bar>
        <glue-notice-bar scrollable text="技术是开发它的人的共同灵魂。"></glue-notice-bar>
        <glue-progress percentage="50"></glue-progress>
        <glue-skeleton titleState row="3"></glue-skeleton>
        <glue-steps active="0">
          <glue-step>买家下单</glue-step>
          <glue-step>商家接单</glue-step>
          <glue-step>买家提货</glue-step>
          <glue-step>交易完成</glue-step>
        </glue-steps>
        <glue-sticky offset-top-value="50">
          <glue-button type="primary">吸顶距离</glue-button>
        </glue-sticky>
        <glue-action-bar>
          <glue-action-bar-icon icon="chat-o" text="客服">
            客服
          </glue-action-bar-icon>
          <glue-action-bar-icon icon="cart-o" text="购物车">
            购物车
          </glue-action-bar-icon>
          <glue-action-bar-icon icon="shop-o" text="店铺">
            店铺
          </glue-action-bar-icon>
          <glue-action-bar-button type="danger" text="立即购买">
            立即购买
          </glue-action-bar-button>
        </glue-action-bar> */}
        {/* <glue-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow></glue-nav-bar>
        <glue-pagination model-value="1" total-items="24" items-per-page="5"></glue-pagination>
        <glue-pagination model-value="1" page-count="12" mode="simple"></glue-pagination>
        <glue-sidebar model-value="0">
          <glue-sidebar-item title="标签名称"></glue-sidebar-item>
          <glue-sidebar-item title="标签名称"></glue-sidebar-item>
          <glue-sidebar-item title="标签名称"></glue-sidebar-item>
        </glue-sidebar> */}
        {/* <glue-action-sheet show={true} actions={this.actions}></glue-action-sheet> */}
        <glue-pull-refresh model-value="state.loading">
          <p>刷新次数: </p>
        </glue-pull-refresh>
      </div>
    );
  }
}
