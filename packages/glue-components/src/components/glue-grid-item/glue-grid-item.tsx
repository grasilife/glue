import { Component, Prop, h, Element, State, Host } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
import classNames from 'classnames';
export type GridDirection = 'horizontal' | 'vertical';
import { getElementParent, getAttribute } from '../../utils/base';
import { BORDER } from '../../global/constant/constant';
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-grid-item',
  styleUrl: 'glue-grid-item.less',
  shadow: false,
})
export class GlueGridItem {
  @Element() el!: HTMLGlueGridItemElement;
  @Prop() dot: boolean;
  @Prop() custom: string;
  @Prop() text: string;
  @Prop() icon: string;
  @Prop() badge: string | number;
  @Prop() iconPrefix: string;
  @Prop() clickable: boolean;
  //父元素传过来的
  @State() center: boolean;
  @State() border: boolean;
  @State() square: boolean;
  @State() gutter: number | string;
  @State() iconSize: number | string;
  @State() columnNum: number | string;
  @State() direction: number | string;
  rootStyle = () => {
    let parentEl = getElementParent(this.el);
    let children = getElementChildren(parentEl);
    //下面的方法好像不行
    // let index = null;
    // for (let i = 0; i < children.length; i++) {
    //   console.log(index, children[i], this.el, 'this.columnNum');
    //   if (children[i] == this.el) {
    //     index = i;
    //   }
    //   break;
    // }
    // console.log(index, children.length, 'index222');
    const percent = `${100 / +this.columnNum}%`;
    console.log(percent, 'percent');
    const style = {
      flexBasis: percent,
      paddingTop: '',
      paddingRight: '',
      marginTop: '',
    };

    if (this.square != undefined) {
      style.paddingTop = percent;
    } else if (this.gutter) {
      const gutterValue = addUnit(this.gutter);
      console.log(gutterValue, 'gutterValue');
      style.paddingRight = gutterValue;
      //TODO:index为子元素的下标,不好获取
      if (children.length >= this.columnNum) {
        style.marginTop = gutterValue;
      }
    }

    return style;
  };
  contentStyle = () => {
    if (this.square && this.gutter) {
      const gutterValue = addUnit(this.gutter);
      return {
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto',
      };
    }
  };

  renderIcon = () => {
    if (this.icon) {
      return <glue-icon dot={this.dot} name={this.icon} size={this.iconSize} badge={this.badge} class="glue-grid-item__icon" classPrefix={this.iconPrefix} />;
    }
  };

  renderText = () => {
    if (this.text) {
      return <span class="glue-grid-item__text">{this.text}</span>;
    }
  };

  componentWillLoad() {
    let parentEl = getElementParent(this.el);
    this.center = getAttribute(parentEl, 'center');
    this.border = getAttribute(parentEl, 'border');
    this.square = getAttribute(parentEl, 'square');
    this.gutter = getAttribute(parentEl, 'gutter');
    this.iconSize = getAttribute(parentEl, 'icon-size');
    this.columnNum = getAttribute(parentEl, 'column-num');
    this.direction = getAttribute(parentEl, 'direction');
    console.log(this.columnNum, 'this.columnNum');
  }
  renderContent = () => {
    if (this.custom == '#slot') {
      return <slot></slot>;
    }
    return [this.renderIcon(), this.renderText()];
  };
  render() {
    const { center, border, square, gutter, direction, clickable } = this;
    console.log(center, 'center');
    return (
      <Host
        class={classNames('glue-grid-item', {
          'glue-grid-item--square': square != undefined,
        })}
        style={this.rootStyle()}
      >
        <div
          class={classNames('glue-grid-item__content', {
            'glue-grid-item__content--horizontal': direction == 'horizontal',
            'glue-grid-item__content--square': square != undefined,
            'glue-grid-item__content--center': center != undefined,
            'glue-grid-item__content--clickable': clickable,
            'glue-grid-item__content--surround': border != undefined && gutter,
            [BORDER]: border != undefined,
          })}
          style={this.contentStyle()}
        >
          {this.renderContent()}
        </div>
      </Host>
    );
  }
}
