import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
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
    const charCodeOfA = "A".charCodeAt(0);
    this.indexList = Array(26).fill(0).map((item) => {
      return String.fromCharCode(charCodeOfA + item)
    })

  }
  render() {
    return <div class={classNames('cunstom')}>
      <glue-doc-section>
        <glue-doc-block card={true} gtitle={this.basicUsage}>
          <glue-index-bar>
            {
              this.indexList.map((index: string) => {
                return (
                  <div key={index}>
                    <glue-index-anchor index={index} />
                    <glue-cell gtitle={this.text} />
                    <glue-cell gtitle={this.text} />
                    <glue-cell gtitle={this.text} />
                  </div>
                )
              })
            }
          </glue-index-bar>
        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.customIndexListTitle}>
          <glue-index-bar>
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
          </glue-index-bar>
        </glue-doc-block>
      </glue-doc-section>

    </div>;
  }
}
