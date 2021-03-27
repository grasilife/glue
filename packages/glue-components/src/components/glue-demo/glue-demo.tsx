import { Component, Prop, h, State } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-demo',
  styleUrl: 'glue-demo.less',
  shadow: false,
})
export class GlueDemo {
  @Prop() first: string;
  @State() showShare = false;
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <glue-cell-group>
          <glue-cell title="单元格" value="内容"></glue-cell>
          <glue-cell title="单元格" value="内容" label="描述信息"></glue-cell>
        </glue-cell-group>
        <glue-cell title="单元格" value="内容" size="large"></glue-cell>
        <glue-cell title="单元格" value="内容" size="large" label="描述信息"></glue-cell>
        <glue-cell title="单元格" icon="location-o" value="内容"></glue-cell>
        <glue-cell value="内容"></glue-cell>
        <glue-cell title="单元格" is-link></glue-cell>
        <glue-cell title="单元格" is-link value="内容"></glue-cell>
        <glue-cell title="单元格" is-link arrow-direction="down" value="内容"></glue-cell>
        <glue-cell-group title="分组1">
          <glue-cell title="单元格" value="内容"></glue-cell>
        </glue-cell-group>
        <glue-cell-group title="分组2">
          <glue-cell title="单元格" value="内容"></glue-cell>
        </glue-cell-group>
        <glue-cell value="内容" is-link></glue-cell>
        <glue-cell value="内容" title="#slot">
          <div slot="title">
            <span class="custom-title">单元格2</span>
          </div>
        </glue-cell>
        <glue-cell value="#slot" title="单元格">
          <div slot="value">
            <span class="custom-title">单元格1112</span>
          </div>
        </glue-cell>
        <glue-cell value="1111" title="单元格" label="#slot">
          <div slot="label">
            <span class="custom-title">单元格1112</span>
          </div>
        </glue-cell>
        <glue-cell title="单元格" icon="#slot">
          <div slot="icon">
            <glue-icon name="search" class="search-icon"></glue-icon>
          </div>
        </glue-cell>
        <glue-cell title="单元格" icon="shop-o" right-icon="#slot">
          <div slot="rightIcon">
            <glue-icon name="search" class="search-icon"></glue-icon>
          </div>
        </glue-cell>
        <glue-cell center title="单元格" value="内容" label="描述信息" />
        <glue-icon name="chat-o"></glue-icon>
        <glue-icon name="chat-o" badge="99+"></glue-icon>
        <glue-badge content="5" slot-content>
          <div class="child"></div>
        </glue-badge>
      </div>
    );
  }
}
