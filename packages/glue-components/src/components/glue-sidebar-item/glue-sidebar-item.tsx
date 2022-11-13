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
import { getElementParent, getAttribute } from '../../utils/base';
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
  @Prop() value: number | string;
  @Prop() disabled: boolean;
  @State() selected: boolean;
  @State() parentEl: any;
  @Event() glueChange: EventEmitter;
  onClick = () => {
    if (this.disabled) {
      return;
    }
    this.glueChange.emit(this.value);
  };

  @Method()
  async setParentActive() {
    //由父元素触发
    if (this.disabled) {
      return;
    }
    await this.parentEl.setActive(this.value);
    console.log(this.value, 'parentModelValue333');
  }

  @Method()
  async setActive() {
    //由父元素触发
    if (this.disabled) {
      return;
    }
    let parentModelValue = await this.parentEl.getActive();
    console.log(
      parentModelValue,
      parentModelValue === this.value,
      this.value,
      'parentModelValue22'
    );
    this.selected = parentModelValue == this.value;
  }

  //TODO:样式错乱,应该是selected引起的
  componentDidLoad() {
    console.log(this.value, 'Component has been rendered');
    this.parentEl = getElementParent(this.el);
    let parentModelValue = getAttribute(this.parentEl, 'model-value');
    console.log(parentModelValue, this.value, 'parentModelValue');
    this.selected = parentModelValue == this.value;
  }
  render() {
    const { dot, badge, gtitle, disabled } = this;
    return (
      <Host
        class={classNames('glue-sidebar-item', {
          'glue-sidebar-item--select': this.selected,
          'glue-sidebar-item--disabled': disabled,
        })}
        onClick={() => {
          this.onClick();
          this.setParentActive();
        }}
      >
        <glue-badge dot={dot} content={badge} class="glue-sidebar-item__text">
          {gtitle}
        </glue-badge>
      </Host>
    );
  }
}
