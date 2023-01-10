import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-tabbar-demo',
  styleUrl: 'glue-tabbar-demo.less',
  shadow: false,
})
export class GlueTabbarDemo {
  @State() basicUsage: string = '基础用法';
  @State() matchByName: string = '通过名称匹配';
  @State() badge: string = '徽标提示';
  @State() customIcon: string = '自定义图标';
  @State() customColor: string = '自定义颜色';
  @State() switchEvent: string = '监听切换事件';
  @State() tab: string = '标签';
  @State() active: number = 0;
  @State() activeName: string = 'home';

  render() {
    return <div class={classNames('cunstom')}>
      <glue-doc-section>
        <glue-doc-block card={true} gtitle={this.basicUsage}>
          <glue-tabbar modelValue={this.active}>
            <glue-tabbar-item icon="home-o" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" gtitle={this.tab}></glue-tabbar-item>
          </glue-tabbar>

        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.matchByName}>
          <glue-tabbar modelValue={this.activeName}>
            <glue-tabbar-item icon="home-o" name="home" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" name="search" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" name="friends" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" name="setting" gtitle={this.tab}></glue-tabbar-item>
          </glue-tabbar>
        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.badge}>
          <glue-tabbar modelValue={this.activeName}>
            <glue-tabbar-item icon="home-o" name="home" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" name="search" gtitle={this.tab} dot></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" name="friends" gtitle={this.tab} badge="5"></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" name="setting" gtitle={this.tab} badge="20"></glue-tabbar-item>
          </glue-tabbar>
        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.customIcon}>
          <glue-tabbar modelValue={this.activeName}>
            <glue-tabbar-item icon="home-o" name="home" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" name="search" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" name="friends" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" name="setting" gtitle={this.tab}></glue-tabbar-item>
          </glue-tabbar>
        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.customColor}>
          <glue-tabbar modelValue={this.activeName} activeColor="#ee0a24" inactiveColor="#000">
            <glue-tabbar-item icon="home-o" name="home" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" name="search" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" name="friends" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" name="setting" gtitle={this.tab}></glue-tabbar-item>
          </glue-tabbar>
        </glue-doc-block>
        <glue-doc-block card={true} gtitle={this.switchEvent}>
          <glue-tabbar modelValue={this.activeName}>
            <glue-tabbar-item icon="home-o" name="home" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="search" name="search" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="friends-o" name="friends" gtitle={this.tab}></glue-tabbar-item>
            <glue-tabbar-item icon="setting-o" name="setting" gtitle={this.tab}></glue-tabbar-item>
          </glue-tabbar>
        </glue-doc-block>
      </glue-doc-section>

    </div>;
  }
}
