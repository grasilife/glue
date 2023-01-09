import { Component, State, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { Fragment } from '@stencil/core';
@Component({
  tag: 'glue-index-bar-demo',
  styleUrl: 'glue-index-bar-demo.less',
  shadow: false,
})
export class GlueIndexBarDemo {
  @State() basicUsage: string = '基础用法';
  @State() customIndexListTitle: string = '自定义索引列表';
  @State() text: string = '文本';
  @State() gtitle: string = '标题';
  @State() indexList: string[] = [];
  @State() customIndexList: number[] = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  componentWillLoad() {
    const charCodeOfA = 'A'.charCodeAt(0);
    this.indexList = Array(26)
      .fill(0)
      .map((item: any, index: number) => {
        console.log(item, 'item');
        return String.fromCharCode(charCodeOfA + index);
      });
  }
  render() {
    return (
      <Host class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-index-bar>
            {this.indexList.map((index: string) => {
              return (
                <div key={index}>
                  <glue-index-anchor index={index} />
                  <glue-cell gtitle={this.text} />
                  <glue-cell gtitle={this.text} />
                  <glue-cell gtitle={this.text} />
                </div>
              );
            })}
          </glue-index-bar>
          {/* <glue-index-bar>
          {
            this.customIndexList.map((index: number) => {
              return (
                <div key={index}>
                  <glue-index-anchor index={index} gtitle={this.gtitle + index} />
                  <glue-cell gtitle={this.text} />
                  <glue-cell gtitle={this.text} />
                  <glue-cell gtitle={this.text} />
                </div>
              )
            })
          }
        </glue-index-bar> */}
        </glue-doc-section>
      </Host>
    );
  }
}
