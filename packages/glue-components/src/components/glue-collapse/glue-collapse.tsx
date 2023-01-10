import {
  Component,
  Prop,
  h,
  Host,
  Method,
  Event,
  EventEmitter,
  Watch,
  Element,
  State,
} from '@stencil/core';
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
  @Prop({ reflect: true }) accordion: boolean;

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
      if (this.modelValue.indexOf(name) === -1) {
        element.setValue('show', false);
        element.setValue('arrowDirection', 'up');
      } else {
        element.setValue('show', true);
        element.setValue('arrowDirection', 'down');
      }
    }
  }
  @Method()
  async toggle(name, expanded) {
    console.log(name, expanded, this.modelValue, 'toggle');
    if (this.accordion) {
      if (name === this.modelValue) {
        this.modelValue = '';
      }
    } else if (expanded) {
      this.modelValue = this.modelValue.filter((activeName) => {
        return activeName !== name;
      });
    } else {
      this.modelValue = [...this.modelValue, name];
    }
    console.log(name, this.modelValue, 'change');
    this.glueChange.emit(name);
  }

  @Method()
  async isExpanded(name) {
    const { accordion, modelValue } = this;
    if (
      !accordion &&
      !Array.isArray(modelValue) &&
      process.env.NODE_ENV !== 'production'
    ) {
      console.error(
        '[Vant] Collapse: type of prop "modelValue" should be Array'
      );
      return;
    }
    console.log(modelValue, name, modelValue.indexOf(name), 'isExpanded11');
    return accordion ? modelValue === name : modelValue.indexOf(name) !== -1;
  }
  render() {
    return (
      <Host
        class={classNames(
          'glue-collapse',
          BORDER_TOP_BOTTOM,
          bem([this.border])
        )}
      >
        <slot></slot>
      </Host>
    );
  }
}
