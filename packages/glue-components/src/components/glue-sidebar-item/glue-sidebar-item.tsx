import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Element,
  Method,
} from '@stencil/core';
import classNames from 'classnames';
import { getElementParent } from '../../utils/base';
@Component({
  tag: 'glue-sidebar-item',
  styleUrl: 'glue-sidebar-item.less',
  shadow: false,
})
export class GlueSidebarItem {
  @Element() el!: HTMLGlueSidebarItemElement;
  @Prop() dot: boolean;
  @Prop() gtitle: string;
  @Prop() badge: string;
  @Prop() disabled: boolean;
  @State() parentModelValue: any;
  @Event() glueChange: EventEmitter;
  @State() index: number;
  onClick = () => {
    if (this.disabled) {
      return;
    }
    let parent = getElementParent(this.el, 'GLUE-SIDEBAR');
    parent.setValue('modelValue', this.index);
    this.glueChange.emit(this.index);
  };
  @Method()
  async setIndex(index: number) {
    this.index = index;
    console.log(this.index, 'this.index');
  }
  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  @Method()
  async getParentValue() {
    let parent = getElementParent(this.el, 'GLUE-SIDEBAR');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-SIDEBAR') {
      this.parentModelValue = parent['modelValue'];
    }
  }
  componentDidLoad() {
    this.getParentValue();
  }
  render() {
    const { dot, badge, gtitle, disabled } = this;
    const selected = this.index === this.parentModelValue;
    return (
      <Host
        class={classNames('glue-sidebar-item', {
          'glue-sidebar-item--select': selected,
          'glue-sidebar-item--disabled': disabled,
        })}
        onClick={() => {
          this.onClick();
        }}
      >
        <glue-badge dot={dot} content={badge} class="glue-sidebar-item__text">
          {gtitle}
        </glue-badge>
      </Host>
    );
  }
}
