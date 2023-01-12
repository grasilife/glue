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
  @State() listObj: any = {
    items: [],
    refreshing: false,
    loading: false,
    error: false,
    finished: false,
  };
  getData() {
    return new Promise((resolve, _reject) => {
      let items = [];
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = items.length + 1;
          items.push(text < 10 ? '0' + text : text);
        }
        return resolve(items);
      }, 1000);
    });
  }
  onLoad() {
    this.listObj = { ...this.listObj, loading: true };
    this.getData()
      .then((res: any[]) => {
        console.log(res, 'resresres');
        if (this.listObj.items.length >= 40) {
          this.listObj = { ...this.listObj, finished: true };
          console.log(this.listObj, 'this.listObj.finished');
          return;
        }
        this.listObj = {
          ...this.listObj,
          loading: false,
          items: [...this.listObj.items, ...res],
        };
        console.log(this.listObj, 'this.listObj2');
      })
      .catch(() => {
        this.listObj = { ...this.listObj, error: true };
        this.listObj = { ...this.listObj, loading: false };
      });
    console.log(this.listObj, 'this.listObj');
  }
  glueUpdateLoad(loading) {
    this.listObj = { ...this.listObj, loading: loading };
  }
  glueUpdateError(error) {
    this.listObj = { ...this.listObj, error: error };
  }
  onRefresh() {
    this.listObj = { ...this.listObj, finished: false };
    this.onLoad();
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
              loading={this.listObj.loading}
              finished={this.listObj.finished}
              finishedText={this.finishedText}
              onGlueLoad={() => {
                this.onLoad();
              }}
              onGlueUpdateLoad={(e) => {
                console.log(e, 'jijiiji');
                this.glueUpdateLoad(e.detail);
              }}
              onGlueUpdateError={(e) => {
                console.log(e, 'jijiiji');
                this.glueUpdateError(e.detail);
              }}
            >
              {this.listObj.items.map((_item, index) => {
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
