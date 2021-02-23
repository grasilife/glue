import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-sidebar-item',
  styleUrl: 'glue-sidebar-item.less',
  shadow: false,
})
export class GlueSidebarItem {
  @Prop() dot: boolean;
  @Prop() title: string;
  @Prop() badge: string;
  @Prop() disabled: boolean;
  @Event() click: EventEmitter;
  onClick = () => {
    if (this.disabled) {
      return;
    }
    this.click.emit(true);
    // parent.setActive(index.value);
  };
  //TODO:样式错乱,应该是selected引起的
  render() {
    const { dot, badge, title, disabled } = this;
    // const selected = index.value === parent.getActive();
    const selected = true;
    return (
      <Host
        class={classNames('glue-sidebar-item', {
          'glue-sidebar-item--select': selected,
          'glue-sidebar-item__disabled': disabled,
        })}
        onClick={this.onClick}
      >
        <glue-badge dot={dot} content={badge} class="glue-sidebar-item__text">
          {title}
        </glue-badge>
      </Host>
    );
  }
}
