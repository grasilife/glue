import { Component, Prop, h, Host, Method, Event, EventEmitter, Watch, Element, State } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { createNamespace } from '../../utils/create/index';
import { getElementChildren } from '../../utils/base';
const [bem] = createNamespace('glue-collapse');
@Component({
  tag: 'glue-collapse',
  styleUrl: 'glue-collapse.less',
  shadow: false,
})
export class GlueCollapse {
  @Element() el!: HTMLGlueCollapseElement;
  //手风琴模式
  @Prop({ reflect: true }) accordion: boolean = false;

  @Prop({ reflect: true, mutable: true }) modelValue: any = [];

  @Prop({ reflect: true }) border = false;
  @State() children;
  @Event() glueChange: EventEmitter;
  @Watch('modelValue')
  watchModelValue() {
    this.children = getElementChildren(this.el, 'GLUE-COLLAPSE-ITEM');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      let name = element.name;
      //只能使用方法设置state
      if (this.accordion) {
        console.log(this.modelValue, name, 'h8fgahufaui');
        if (this.modelValue === name) {
          element.setValue('show', true);
        } else {
          element.setValue('show', false);
        }
      } else {
        if (this.modelValue.indexOf(name) === -1) {
          element.setValue('show', false);
        } else {
          element.setValue('show', true);
        }
      }
    }
  }
  @Method()
  async toggle(name, expanded) {
    console.log(name, expanded, this.modelValue, this.accordion, 'toggle');
    if (this.accordion) {
      if (name === this.modelValue) {
        if (expanded) {
          this.modelValue = '';
        } else {
          this.modelValue = name;
        }
      } else {
        this.modelValue = name;
      }
    } else {
      if (expanded) {
        this.modelValue = this.modelValue.filter(activeName => {
          return activeName !== name;
        });
      } else {
        this.modelValue = [...this.modelValue, name];
      }
    }

    console.log(name, this.modelValue, 'change');
    this.glueChange.emit(name);
  }

  @Method()
  async isExpanded(name) {
    console.log(name, this.accordion, 'namenamename');
    if (!this.accordion && !Array.isArray(this.modelValue)) {
      console.error('[Vant] Collapse: type of prop "modelValue" should be Array');
      return;
    }
    return this.accordion ? this.modelValue === name : this.modelValue.indexOf(name) !== -1;
  }
  render() {
    return (
      <Host class={classNames('glue-collapse', BORDER_TOP_BOTTOM, bem([this.border]))}>
        <slot></slot>
      </Host>
    );
  }
}
