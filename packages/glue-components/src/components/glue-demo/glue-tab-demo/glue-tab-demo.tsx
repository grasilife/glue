import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-tab-demo',
  styleUrl: 'glue-tab-demo.less',
  shadow: false,
})
export class GlueTabDemo {
  @State() basicUsage: string = '基础用法';
  @State() matchByName: string = '通过名称匹配';
  @State() title2: string = '标签栏滚动';
  @State() title3: string = '禁用标签';
  @State() title4: string = '样式风格';
  @State() title5: string = '点击事件';
  @State() title6: string = '粘性布局';
  @State() title7: string = '自定义标签';
  @State() title8: string = '切换动画';
  @State() title9: string = '滑动切换';
  @State() title10: string = '滚动导航';
  @State() beforeChangeTitle: string = '异步切换';
  @State() tab: string = '标签';
  @State() content: string = '内容';
  @State() active: number = 2;
  @State() activeName: string = 'b';
  @State() tabs: number[] = [1, 2, 3, 4];
  glueDisabled(e) {
    console.log(e, 'glueDisabled');
  }
  onGlueClick(e) {
    console.log(e, 'onGlueClick');
  }
  render() {
    return (
      <div class={classNames('cunstom')}>
        <glue-doc-section>
          <glue-doc-block gtitle={this.basicUsage}>
            <glue-tabs active={this.active}>
              {this.tabs.map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          {/* <glue-doc-block gtitle={this.matchByName}>
            <glue-tabs active={this.active}>
              <glue-tab name="a" title={this.tab + 1}>
                {this.content + 1}
              </glue-tab>
              <glue-tab name="b" title={this.tab + 2}>
                {this.content + 2}
              </glue-tab>
              <glue-tab name="c" title={this.tab + 3}>
                {this.content + 3}
              </glue-tab>
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title2}>
            <glue-tabs>
              {new Array(8).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title3}>
            <glue-tabs
              onGlueDisabled={(e) => {
                this.glueDisabled(e);
              }}
            >
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab
                    gtitle={this.tab + index}
                    key={index}
                    disabled={index === 2}
                  >
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title4}>
            <glue-tabs type="card">
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title5}>
            <glue-tabs
              type="card"
              onGlueClick={(e) => {
                this.onGlueClick(e);
              }}
            >
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title6}>
            <glue-tabs active={this.active} sticky>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title7}>
            <glue-tabs active={this.active} sticky>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title8}>
            <glue-tabs animated>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title9}>
            <glue-tabs active={this.active} swipeable>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.title10}>
            <glue-tabs sticky swipeable>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block>
          <glue-doc-block gtitle={this.beforeChangeTitle}>
            <glue-tabs sticky swipeable>
              {new Array(3).fill(0).map((_item, index) => {
                return (
                  <glue-tab gtitle={this.tab + index} key={index}>
                    {this.content + index}
                  </glue-tab>
                );
              })}
            </glue-tabs>
          </glue-doc-block> */}
        </glue-doc-section>
      </div>
    );
  }
}
