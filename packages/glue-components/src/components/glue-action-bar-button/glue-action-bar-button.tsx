import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
// import { format } from '../../utils/utils';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-action-bar-button');
@Component({
  tag: 'glue-action-bar-button',
  styleUrl: 'glue-action-bar-button.less',
  shadow: false,
})
export class GlueActionBarButton {
  @Prop() type: string;

  @Prop() text: string;

  @Prop() icon: string;

  @Prop() color: string;
  @Prop() loading: boolean;
  @Prop() disabled: boolean;
  @Event({
    eventName: 'change',
  })
  onClick: EventEmitter;
  handleClick = event => {
    if (!this.loading && !this.disabled) {
      this.onClick.emit(event);
    }
  };
  //TODO:又一个黄色的未知的边框,未修复
  render() {
    const { type, icon, text, color, loading, disabled } = this;
    console.log(text);
    return (
      <Host>
        <glue-button
          size="large"
          type={type}
          icon={icon}
          color={color}
          loading={loading}
          disabled={disabled}
          onClick={this.handleClick}
          round
          class={classNames('glue-action-bar-button', bem([type]))}
        >
          <slot></slot>
        </glue-button>
      </Host>
    );
  }
}
