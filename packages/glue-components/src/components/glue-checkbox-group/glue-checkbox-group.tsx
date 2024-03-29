import {
  Component,
  Prop,
  h,
  Element,
  State,
  Host,
  Event,
  EventEmitter,
  Method,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-checkbox-group');
import { getElementChildren } from '../../utils/base';
export type CheckerDirection = 'horizontal' | 'vertical';
@Component({
  tag: 'glue-checkbox-group',
  styleUrl: 'glue-checkbox-group.less',
  shadow: false,
})
export class GlueCheckboxGroup {
  @Element() el!: HTMLGlueCheckboxGroupElement;
  @Prop({ reflect: true }) max: number | string;
  @Prop() disabled: string;
  @Prop({ reflect: true }) direction: CheckerDirection = 'vertical';
  @Prop() iconSize: number | string;
  @Prop() checkedColor: string;
  @Prop({ reflect: true, mutable: true }) modelValue: any;
  @State() children;
  @Event()
  glueChange: EventEmitter;
  handleChange = (event) => {
    console.log(event, 111);
    this.glueChange.emit(event);
  };
  @Watch('modelValue')
  watchModelValue() {
    this.children = getElementChildren(this.el, 'GLUE-CHECKBOX');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      let name = element.name;
      //只能使用方法设置state
      if (this.modelValue.indexOf(name) === -1) {
        element.setValue('checked', false);
      } else {
        element.setValue('checked', true);
      }
    }
  }
  componentWillLoad() {
    this.watchModelValue();
  }

  @Method()
  async toggleAll(checked) {
    this.children = getElementChildren(this.el, 'GLUE-CHECKBOX');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      element.setValue('checked', checked);
    }
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
      max: this.max,
      disabled: this.disabled,
      direction: this.direction,
      iconSize: this.iconSize,
      checkedColor: this.checkedColor,
    };
  }
  render() {
    return (
      <Host class={classNames('glue-checkbox-group', bem([this.direction]))}>
        <slot></slot>
      </Host>
    );
  }
}
