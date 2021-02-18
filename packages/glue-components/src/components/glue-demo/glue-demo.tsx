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
  onLoad(index) {
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
        <glue-list finished={false} finished-text="没有更多了">
          {this.list[0].items.map((item, key) => {
            console.log(item, key);
            return <glue-cell key={key} title={item} />;
          })}
        </glue-list>
      </div>
    );
  }
}
