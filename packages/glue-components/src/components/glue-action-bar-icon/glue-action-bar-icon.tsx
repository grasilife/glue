import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-action-bar-icon',
  styleUrl: 'glue-action-bar-icon.less',
  shadow: false,
})
export class GlueActionBarIcon {
  @Prop() dot: boolean;

  @Prop() text: string;

  @Prop() icon: string;

  @Prop() color: string;
  @Prop() badge: string | number;
  @Prop() iconClass: null;
  @Event()
  onClick: EventEmitter;
  handleClick = event => {
    this.onClick.emit(event);
  };
  renderIcon = () => {
    const { dot, badge, icon, color, iconClass } = this;
    console.log(iconClass);
    // return <glue-badge dot={dot} content={badge} class={classNames('glue-action-bar-icon__icon')}></glue-badge>;

    return <glue-icon tag="div" dot={dot} name={icon} badge={badge} color={color} class={classNames('glue-action-bar-icon__icon')} />;
  };
  render() {
    return (
      <Host class={classNames('glue-action-bar-icon')} tabindex={0} onClick={this.handleClick}>
        {this.renderIcon()}
        <slot></slot>
      </Host>
    );
  }
}
