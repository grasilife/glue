import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_SURROUND } from '../../global/constant/constant';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-button');
@Component({
  tag: 'glue-button',
  styleUrl: 'glue-button.less',
  shadow: true,
})
export class GlueButton {
  @Prop() text: string;

  @Prop() icon: string;

  @Prop() color: string;
  @Prop() block: boolean;
  @Prop() plain: boolean;
  @Prop() round: boolean;
  @Prop() square: boolean;
  @Prop() loading: boolean;
  @Prop() hairline: boolean;
  @Prop() disabled: boolean;
  @Prop() iconPrefix: string;
  @Prop() loadingText: string;
  @Prop() loadingType: string;
  @Prop() tag = 'button';
  @Prop() type = 'default';
  @Prop() size = 'normal';
  @Prop() nativeType = 'button';
  @Prop() loadingSize = '20px';
  @Prop() iconPosition = 'left';

  @Event({
    eventName: 'checkboxchange',
  })
  onClick: EventEmitter;
  handleClick = event => {
    if (!this.loading && !this.disabled) {
      this.onClick.emit(event);
    }
  };
  getStyle = () => {
    const { color, plain } = this;
    if (color) {
      const style = {
        color: '',
        background: '',
        border: '0px',
        borderColor: '',
      };

      style.color = plain ? color : 'white';

      if (!plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style.background = color;
      }

      // hide border when color is linear-gradient
      if (color.indexOf('gradient') !== -1) {
        style.border = '0px';
      } else {
        style.borderColor = color;
      }

      return style;
    }
  };
  renderLoadingIcon = () => {
    if (this.loading) {
      // return this.loading();
    }

    return (
      <glue-loading
        class={classNames({
          'glue-loading__loading': true,
        })}
        size={this.loadingSize}
        type={this.loadingType}
        color="currentColor"
      />
    );
  };
  renderIcon = () => {
    if (this.loading) {
      return this.renderLoadingIcon();
    }

    if (this.icon) {
      return <glue-icon name={this.icon} class={bem('icon')} classPrefix={this.iconPrefix} />;
    }
  };

  renderText = () => {
    let text;
    if (this.loading) {
      text = this.loadingText;
    } else {
      text = this.text;
    }

    if (text) {
      return (
        <span
          class={classNames({
            'glue-button__text': true,
          })}
        >
          {text}
        </span>
      );
    }
  };
  render() {
    const { type, size, block, round, plain, square, loading, disabled, hairline, nativeType, iconPosition } = this;
    const classes = [classNames(bem([type, size, plain, block, round, square, loading, disabled, hairline]))];
    return (
      <Host class={classNames(classes)} onClick={this.handleClick} type={nativeType} style={this.getStyle()}>
        <div
          class={classNames({
            'glue-button__content': true,
          })}
        >
          {iconPosition === 'left' && this.renderIcon()}
          {this.renderText()}
          {iconPosition === 'right' && this.renderIcon()}
        </div>
      </Host>
    );
  }
}
