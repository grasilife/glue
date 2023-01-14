import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
import { zhCNData } from './data-zh';
@Component({
  tag: 'glue-tree-select-demo',
  styleUrl: 'glue-tree-select-demo.less',
  shadow: false,
})
export class GlueTreeSelectDemo {
  @State() basicUsage: string = '基础用法';
  @State() showBadge: string = '徽标提示';
  @State() radioMode: string = '单选模式';
  @State() multipleMode: string = '多选模式';
  @State() customContent: string = '自定义内容';
  @State() data: any[] = zhCNData;
  @State() dataSimple: any[] = [{ text: '分组 1' }, { text: '分组 2' }];
  @State() activeId: number = 1;
  @State() activeId2: number = 1;
  @State() activeIds: any[] = [1, 2];
  @State() activeIndex: number = 0;
  @State() activeIndex2: number = 0;
  @State() activeIndex3: number = 0;
  @State() activeIndex4: number = 0;
  badgeItems() {
    const data = JSON.parse(JSON.stringify(this.data)).slice(0, 2);

    data[0].dot = true;
    data[1].badge = 5;

    return data;
  }
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle={this.basicUsage}>
            <glue-tree-select
              items={this.data}
              activeId={this.activeId}
              mainActiveIndex={this.activeIndex}
            ></glue-tree-select>
          </glue-doc-block>
          <glue-doc-block gtitle={this.multipleMode}>
            <glue-tree-select
              items={this.data}
              activeId={this.activeIds}
              mainActiveIndex={this.activeIndex2}
            ></glue-tree-select>
          </glue-doc-block>
          <glue-doc-block gtitle={this.customContent}>
            <glue-tree-select
              height="55vw"
              content="#slot"
              items={this.dataSimple}
              mainActiveIndex={this.activeIndex3}
              onGlueClickNav={(e) => {
                console.log(e.detail, 'e.detail;');
                this.activeIndex3 = e.detail;
              }}
            >
              {this.activeIndex3 === 0 ? (
                <glue-image
                  showLoading={false}
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
                ></glue-image>
              ) : (
                <glue-image
                  showLoading={false}
                  src="https://img.yzcdn.cn/vant/apple-2.jpg"
                ></glue-image>
              )}
            </glue-tree-select>
          </glue-doc-block>
          <glue-doc-block gtitle={this.showBadge}>
            <glue-tree-select
              height="55vw"
              items={this.badgeItems()}
              activeId={this.activeId2}
              mainActiveIndex={this.activeIndex4}
            ></glue-tree-select>
          </glue-doc-block>
        </glue-doc-section>
      </div>
    );
  }
}
