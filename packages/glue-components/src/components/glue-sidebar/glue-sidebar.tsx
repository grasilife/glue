import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Method,
  Element,
  Watch,
  State,
} from '@stencil/core';
// import classNames from 'classnames';
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-sidebar',
  styleUrl: 'glue-sidebar.less',
  shadow: false,
})
export class GlueSidebar {
  @Element() el!: HTMLGlueSidebarElement;
  @Prop({ reflect: true, mutable: true }) modelValue: any;
  @State() children;
  @Event() glueChange: EventEmitter;

  @Method()
  async setValue(key, value) {
    console.log(key, value, 'key, value');
    this[key] = value;
    if (key === 'modelValue') {
      this.glueChange.emit(value);
    }
  }
  @Watch('modelValue')
  watchModelValue() {
    this.children = getElementChildren(this.el, 'GLUE-SIDEBAR-ITEM');
    console.log(this.children, 'this.children');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      element.setIndex(i);
      element.getParentValue();
    }
  }
  componentDidLoad() {
    this.watchModelValue();
  }
  render() {
    return (
      <Host class="glue-sidebar">
        <slot></slot>
      </Host>
    );
  }
}
