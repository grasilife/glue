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
        </glue-doc-section>
      </div>
    );
  }
}
