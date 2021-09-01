import { Component, Prop, h, Element, State } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-action-bar-button');
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-checkbox-group',
  styleUrl: 'glue-checkbox-group.less',
  shadow: false,
})
export class GlueCheckboxGroup {
  @Element() el!: HTMLElement;
  @Prop() first: string;
  @Prop() max: number | string;
  @Prop() disabled: boolean;
  @Prop() direction: string;
  @Prop() iconSize: number | string;
  @Prop() checkedColor: string;
  @Prop() modelValue: any;
  @State() children;
  componentDidLoad() {
    this.children = getElementChildren(this.el);
    this.toggleAll();
  }
  toggleAll = (options = { checked: '', skipDisabled: '' }) => {
    console.log(options);
    // const { checked, skipDisabled } = options;

    const checkedChildren = this.children.filter(item => {
      console.log(item, 'itemitem');
      // if (!item.props.bindGroup) {
      //   return false;
      // }
      // if (item.props.disabled && skipDisabled) {
      //   return item.checked.value;
      // }
      // return checked ?? !item.checked.value;
    });

    const names = checkedChildren.map(item => item.name);
    console.log(names, 'names');
    // emit('update:modelValue', names);
  };
  render() {
    return (
      <div class={classNames(bem([this.direction]))}>
        <slot></slot>
      </div>
    );
  }
}
