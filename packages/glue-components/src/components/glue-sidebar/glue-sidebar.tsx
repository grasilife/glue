import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Method,
  Element,
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
  @Prop({ reflect: true }) modelValue: any;
  componentDidLoad() {
    let children = getElementChildren(this.el, 'GLUE-SIDEBAR-ITEM');
    console.log(children, 'children');
  }
  @Event() glueChange: EventEmitter;

  @Method()
  async setActive(value) {
    console.log(value, 'valuevalue');
    this.modelValue = value;
    this.glueChange.emit(value);
    let children = getElementChildren(this.el, 'GLUE-SIDEBAR-ITEM');
    for (let i = 0; i < children.length; i++) {
      console.log(children[i], 'children[i]');
      children[i].setActive();
    }
  }

  @Method()
  async getActive() {
    return this.modelValue;
  }
  // @Watch('active')
  // watchShowHandler(newValue) {
  //   this.setActive();
  // }
  render() {
    return (
      <Host class="glue-sidebar">
        <slot></slot>
      </Host>
    );
  }
}
