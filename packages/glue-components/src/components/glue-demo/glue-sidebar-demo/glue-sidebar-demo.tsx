import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-sidebar-demo',
  styleUrl: 'glue-sidebar-demo.less',
  shadow: false,
})
export class GlueSidebarDemo {
  @State() basicUsage: string = '基础用法';
  @State() title: string = '标签名';
  @State() showBadge: string = '徽标提示';
  @State() disabled: string = '禁用选项';
  @State() changeEvent: string = '监听切换事件';
  @State() selectTip: string = '你切换到了';
  @State() activeKey1: number = 0;
  @State() activeKey2: number = 0;
  @State() activeKey3: number = 0;
  @State() activeKey4: number = 0;
  onChange(e) {
    console.log(e.details, 'onChange');
  }
  render() {
    return (
      <div class={classNames('glue-sidebar-demo')}>
        <glue-doc-section>
          <glue-grid columnNum={2} border={false}>
            <glue-grid-item custom="#slot">
              <h3 class="demo-sidebar-title">{this.basicUsage}</h3>
              <glue-sidebar modelValue={this.activeKey1}>
                <glue-sidebar-item gtitle={this.title}></glue-sidebar-item>
                <glue-sidebar-item gtitle={this.title}></glue-sidebar-item>
                <glue-sidebar-item gtitle={this.title}></glue-sidebar-item>
              </glue-sidebar>
            </glue-grid-item>
            <glue-grid-item custom="#slot">
              <h3 class="demo-sidebar-title">{this.showBadge}</h3>
              <glue-sidebar modelValue={this.activeKey2}>
                <glue-sidebar-item gtitle={this.title} dot></glue-sidebar-item>
                <glue-sidebar-item
                  gtitle={this.title}
                  badge="5"
                ></glue-sidebar-item>
                <glue-sidebar-item
                  gtitle={this.title}
                  badge="99+"
                ></glue-sidebar-item>
              </glue-sidebar>
            </glue-grid-item>
            <glue-grid-item custom="#slot">
              <h3 class="demo-sidebar-title">{this.disabled}</h3>
              <glue-sidebar modelValue={this.activeKey3}>
                <glue-sidebar-item gtitle={this.title}></glue-sidebar-item>
                <glue-sidebar-item
                  gtitle={this.title}
                  disabled
                ></glue-sidebar-item>
                <glue-sidebar-item gtitle={this.title}></glue-sidebar-item>
              </glue-sidebar>
            </glue-grid-item>
            <glue-grid-item custom="#slot">
              <h3 class="demo-sidebar-title">{this.changeEvent}</h3>
              <glue-sidebar
                modelValue={this.activeKey3}
                onGlueChange={(e) => {
                  this.onChange(e);
                }}
              >
                <glue-sidebar-item gtitle={this.title + 1}></glue-sidebar-item>
                <glue-sidebar-item gtitle={this.title + 2}></glue-sidebar-item>
                <glue-sidebar-item gtitle={this.title + 3}></glue-sidebar-item>
              </glue-sidebar>
            </glue-grid-item>
          </glue-grid>
        </glue-doc-section>
      </div>
    );
  }
}
