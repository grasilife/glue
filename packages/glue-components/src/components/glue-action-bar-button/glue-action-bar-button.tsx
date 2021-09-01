import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
// import { format } from '../../utils/utils';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-action-bar-button');
@Component({
  tag: 'glue-action-bar-button',
  styleUrl: 'glue-action-bar-button.less',
  shadow: false
})
export class GlueActionBarButton {
  @Prop() type: string;
  @Prop() leftRound: boolean;
  @Prop() rightRound: boolean;
  @Prop() text: string;

  @Prop() icon: string;

  @Prop() color: string;
  @Prop() loading: boolean;
  @Prop() disabled: boolean;
  @Event() onClick: EventEmitter;
  handleClick = (event) => {
    if (!this.loading && !this.disabled) {
      this.onClick.emit(event);
    }
  };
  render() {
    const {
      type,
      icon,
      text,
      color,
      loading,
      disabled,
      leftRound,
      rightRound
    } = this;
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
          class={classNames(
            'glue-action-bar-button',
            {
              'glue-action-bar-button--first': leftRound,
              'glue-action-bar-button--last': rightRound
            },
            bem([type])
          )}
        >
          <slot></slot>
        </glue-button>
      </Host>
    );
  }
}
