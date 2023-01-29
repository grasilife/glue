import { Component, Prop, h, Event, EventEmitter, Host, Method, Watch, Element, State } from '@stencil/core';
import classNames from 'classnames';

import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-radio-group');
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-radio-group',
  styleUrl: 'glue-radio-group.less',
  shadow: false,
})
export class GlueRadioGroup {
  @Element() el!: HTMLGlueRadioGroupElement;
  @Prop() disabled: boolean;

  @Prop() iconSize: string | number;
  @Prop() direction: string;
  @Prop({ reflect: true, mutable: true }) modelValue: any;
  @Prop() checkedColor: string;
  @State() children;
  @Event() glueUpdate: EventEmitter;

  // this.glueBlur.emit();
  @Watch('modelValue')
  watchModelValue() {
    this.children = getElementChildren(this.el, 'GLUE-RADIO');
    console.log(this.children, 'this.children');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      let name = element.name;
      //只能使用方法设置state
      console.log(element, name, 'namenamename');
      if (this.modelValue === name) {
        console.log(element.setValue, 'element.setValue');
        element.setValue('checked', true);
      } else {
        element.setValue('checked', false);
      }
    }
  }
  componentWillLoad() {
    this.watchModelValue();
  }
  @Method()
  async setValue(value: any) {
    this.modelValue = value;
    console.log(value, 'setValue');
  }
  @Method()
  async getProps() {
    return {
      modelValue: this.modelValue,
      disabled: this.disabled,
      direction: this.direction,
      iconSize: this.iconSize,
      checkedColor: this.checkedColor,
    };
  }
  render() {
    const classes = [classNames(bem([this.direction]))];
    return (
      <Host class={classNames('glue-radio-group', classes)}>
        <slot />
      </Host>
    );
  }
}
