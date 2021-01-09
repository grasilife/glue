import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
import { BORDER_SURROUND } from '../../global/constant/constant';
const [bem] = createNamespace('button');
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
  private getStyle = () => {
    const { color, plain } = this;
    if (color) {
      const style = {
        color: '',
        background: '',
        border: 0,
        borderColor: '',
      };

      style.color = plain ? color : 'white';

      if (!plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style.background = color;
      }

      // hide border when color is linear-gradient
      if (color.indexOf('gradient') !== -1) {
        style.border = 0;
      } else {
        style.borderColor = color;
      }

      return style;
    }
  };
  renderLoadingIcon = () => {
    // if (slots.loading) {
    //   return slots.loading();
    // }

    return <div />;
  };
  renderIcon = () => {
    if (this.loading) {
      return this.renderLoadingIcon();
    }

    if (this.icon) {
      return <div></div>;
    }
  };
  render() {
    const { tag, type, size, block, round, plain, square, loading, disabled, hairline, nativeType, iconPosition } = this;
    const classes = [classNames(bem([type, size, { plain, block, round, square, loading, disabled, hairline }])), { [BORDER_SURROUND]: this.hairline }];
    return (
      <div class={classNames(classes)} onClick={this.handleClick}>
        {/* <div class={classNames(bem('content'))}>
          {iconPosition === 'left' && renderIcon()}
          {this.renderText()}
          {iconPosition === 'right' && renderIcon()}
        </div> */}
      </div>
    );
  }
}
