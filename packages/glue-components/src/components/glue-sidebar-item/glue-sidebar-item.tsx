import { Component, Prop, h, Host, Event, EventEmitter, State, Element, Method } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-sidebar-item',
  styleUrl: 'glue-sidebar-item.less',
  shadow: false,
})
export class GlueSidebarItem {
  @Element() el!: HTMLElement;
  @Prop() dot: boolean;
  @Prop() title: string;
  @Prop() badge: string;
  @Prop() value: string | number;
  @Prop() disabled: boolean;
  @State() selected: boolean;
  @State() parentEl: any;
  @Event() glueClick: EventEmitter;
  onClick = () => {
    if (this.disabled) {
      return;
    }
    this.glueClick.emit(true);
  };
  @Method()
  async setParentActive() {
    //由父元素触发
    if (this.disabled) {
      return;
    }
    let parentModelValue = await this.parentEl.setActive(this.value);
    console.log(parentModelValue, parentModelValue === this.value, 'parentModelValue22');
  }
  @Method()
  async setActive() {
    //由父元素触发
    if (this.disabled) {
      return;
    }
    let parentModelValue = await this.parentEl.setActive(this.value);
    console.log(parentModelValue, parentModelValue === this.value, 'parentModelValue22');
    this.selected = parentModelValue === this.value;
  }

  //TODO:样式错乱,应该是selected引起的
  componentDidLoad() {
    console.log('Component has been rendered');
    this.parentEl = getElementParent(this.el);
    let parentModelValue = getAttribute(this.parentEl, 'model-value');
    console.log(parentModelValue, 'parentModelValue');
    this.selected = parentModelValue === this.value;
  }
  render() {
    const { dot, badge, title, disabled } = this;
    return (
      <Host
        class={classNames('glue-sidebar-item', {
          'glue-sidebar-item--select': this.selected,
          'glue-sidebar-item__disabled': disabled,
        })}
        onClick={() => {
          this.onClick();
        }}
      >
        <glue-badge dot={dot} content={badge} class="glue-sidebar-item__text">
          {title}
        </glue-badge>
      </Host>
    );
  }
}
