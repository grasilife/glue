import {
  Component,
  Prop,
  h,
  Element,
  State,
  Host,
  Event,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-checkbox-group');
import { getElementChildren, getAttribute } from '../../utils/base';
export type CheckerDirection = 'horizontal' | 'vertical';
@Component({
  tag: 'glue-checkbox-group',
  styleUrl: 'glue-checkbox-group.less',
  shadow: false,
})
export class GlueCheckboxGroup {
  @Element() el!: HTMLGlueCheckboxGroupElement;
  @Prop() first: string;
  @Prop({ reflect: true }) max: number | string;
  @Prop() disabled: string;
  @Prop({ reflect: true }) direction: CheckerDirection = 'vertical';
  @Prop() iconSize: number | string;
  @Prop() checkedColor: string;
  @Prop({ reflect: true }) modelValue: any;
  @State() children;
  @Event()
  glueChange: EventEmitter;
  handleChange = (event) => {
    console.log(event, 111);
    this.glueChange.emit(event);
  };
  componentDidLoad() {
    console.log(this.modelValue, this.el.children, 'mmmmmm');
    this.children = getElementChildren(this.el);
    console.log(this.children, 'this.children');
    // this.toggleAll();
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
      <Host class={classNames('glue-checkbox-group', bem([this.direction]))}>
        <slot></slot>
      </Host>
    );
  }
}
