import { Component, State, h, Host } from '@stencil/core';
// import classNames from 'classnames';
// import produce from 'immer';
@Component({
  tag: 'glue-list-demo',
  styleUrl: 'glue-list-demo.less',
  shadow: false,
})
export class GlueListDemo {
  @State() basicUsage: string = '基础用法';
  @State() errorInfo: string = '错误提示';
  @State() errorText: string = '请求失败，点击重新加载';
  @State() pullRefresh: string = '下拉刷新';
  @State() finishedText: string = '没有更多了';
  @State() list: any[] = [
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
    {
      items: [],
      refreshing: false,
      loading: false,
      error: false,
      finished: false,
    },
  ];
  onLoad(index) {
    const list = JSON.parse(JSON.stringify(this.list[index]));
    list.loading = true;

    setTimeout(() => {
      if (list.refreshing) {
        list.items = [];
        list.refreshing = false;
      }

      for (let i = 0; i < 10; i++) {
        const text = list.items.length + 1;
        list.items.push(text < 10 ? '0' + text : text);
      }

      list.loading = false;
      console.log(list.loading, 'list.loading');
      list.refreshing = false;

      // show error info in second demo
      if (index === 1 && list.items.length === 10 && !list.error) {
        list.error = true;
      } else {
        list.error = false;
      }

      if (list.items.length >= 40) {
        list.finished = true;
      }
      //数据不可变
      this.list = this.list.map((item, index2) => {
        if (index2 == index) {
          return list;
        } else {
          return item;
        }
      });
    }, 1000);

    console.log(this.list, 'this.list');
  }

  onRefresh(index) {
    this.list[index].finished = false;
    this.onLoad(index);
  }
  // componentWillLoad() {
  //   this.onLoad(0);
  // }
  render() {
    return (
      <Host>
        <glue-doc-section>
          <glue-doc-block gtitle={this.basicUsage}>
            <glue-list
              loading={this.list[0].loading}
              finished={this.list[0].finished}
              finishedText={this.finishedText}
              onGlueLoad={() => {
                this.onLoad(0);
              }}
            >
              {this.list[0].items.map((_item, index) => {
                return (
                  <glue-cell gtitle={index.toString()} key={index}></glue-cell>
                );
              })}
            </glue-list>
          </glue-doc-block>
          {/* <glue-doc-block gtitle={this.errorInfo}>
            <glue-list
              loading={this.list[1].loading}
              finished={this.list[1].finished}
              finishedText={this.finishedText}
              error={this.list[1].error}
              errorText={this.errorText}
              onGlueLoad={() => {
                this.onLoad(1);
              }}
            >
              {this.list[1].items.map((_item, index) => {
                return (
                  <glue-cell gtitle={index.toString()} key={index}></glue-cell>
                );
              })}
            </glue-list>
          </glue-doc-block> */}
        </glue-doc-section>
      </Host>
    );
  }
}
