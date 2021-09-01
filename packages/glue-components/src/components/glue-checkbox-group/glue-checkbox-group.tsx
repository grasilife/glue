import { Component, Prop, h, Element, State, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-action-bar-button');
import { getElementChildren, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-checkbox-group',
  styleUrl: 'glue-checkbox-group.less',
  shadow: false
})
export class GlueCheckboxGroup {
  @Element() el!: HTMLGlueCheckboxGroupElement;
  @Prop() first: string;
  @Prop() max: number | string;
  @Prop() disabled: string;
  @Prop() direction: string;
  @Prop() iconSize: number | string;
  @Prop() checkedColor: string;
  @Prop({ reflect: true }) model_value: any;
  @State() children;
  componentDidLoad() {
    console.log(this.model_value, 'mmmmmm');
    this.children = getElementChildren(this.el);
    console.log(this.children, 'this.children');
    this.toggleAll();
  }
  toggleAll = (options = { checked: '', skipDisabled: '' }) => {
    console.log(options);
    const { checked, skipDisabled } = options;
    let checkedChildren = [];
    for (let i = 0; i < this.children.length; i++) {
      console.log(this.children[i], 'ejfiheiuj');
      let item = this.children[i];
      if (!getAttribute(item, 'bind-group')) {
        break;
      }
      if (getAttribute(item, 'disabled') && skipDisabled) {
        checkedChildren.push(getAttribute(item, 'name'));
      }
      if (checked) {
        checkedChildren.push(getAttribute(item, 'name'));
      }
    }
    console.log(checkedChildren, 'checkedChildren');
  };
  render() {
    return (
      <Host class={classNames(bem([this.direction]))}>
        <slot></slot>
      </Host>
    );
  }
}
