import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_SURROUND } from '../../global/constant/constant';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-button');
@Component({
  tag: 'glue-button',
  styleUrl: 'glue-button.less',
  shadow: false
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

  @Event()
  glueClick: EventEmitter;
  handleClick = (event) => {
    if (this.loading) {
      event.preventDefault();
    }
    if (!this.loading && !this.disabled) {
      this.glueClick.emit(event);
    }
  };
  getStyle = () => {
    const { color, plain } = this;
    if (color) {
      const style = {
        color: '',
        background: '',
        border: '0px',
        borderColor: ''
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
    return (
      <glue-loading
        class={classNames({
          'glue-button__loading': true
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
      return (
        <glue-icon
          name={this.icon}
          class={classNames({
            'glue-button__icon': true
          })}
          classPrefix={this.iconPrefix}
        />
      );
    }
  };

  renderText = () => {
    console.log(this.loading, 'texttext');
    if (this.loading && this.loadingText) {
      return (
        <span
          class={classNames({
            'glue-button__text': true
          })}
        >
          {this.loadingText}
        </span>
      );
    } else {
      return <slot></slot>;
    }
  };
  render() {
    const {
      type,
      size,
      block,
      round,
      plain,
      square,
      loading,
      disabled,
      hairline,
      iconPosition
    } = this;
    console.log(bem([type, size]), type, block, 'ahuhauhauhu');
    const classes = [classNames(bem([type, size]))];
    return (
      <Host
        class={classNames('glue-button', classes, {
          'glue-button--block': block,
          'glue-button--round': round,
          'glue-button--plain': plain,
          'glue-button--square': square,
          'glue-button--loading': loading,
          'glue-button--disabled': disabled,
          'glue-button--hairline': hairline,
          [BORDER_SURROUND]: hairline
        })}
        onClick={this.handleClick}
        style={this.getStyle()}
      >
        <div
          class={classNames({
            'glue-button__content': true
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
