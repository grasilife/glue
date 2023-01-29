import { Component, Prop, h, EventEmitter, Event, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-tag');
@Component({
  tag: 'glue-tag',
  styleUrl: 'glue-tag.less',
  shadow: false,
})
export class GlueTag {
  @Prop() first: string;

  @Prop() size: string;

  @Prop() mark: boolean;
  @Prop() color: string;
  @Prop() plain: boolean;
  @Prop() round: boolean;
  @Prop() textColor: string;
  @Prop() closeable: boolean;
  @Prop() type = 'default';
  @Event() glueIconClick: EventEmitter;
  closeHandle = event => {
    this.glueIconClick.emit(event);
  };

  getStyle = () => {
    if (this.plain) {
      return {
        color: this.textColor || this.color,
      };
    }
    return {
      color: this.textColor,
      background: this.color,
    };
  };
  render() {
    const { type, mark, plain, round, size, closeable } = this;
    const classes = { mark, plain, round };
    if (size) {
      classes[size] = size;
    }
    const CloseIcon = closeable && <glue-icon name="cross" class={classNames('glue-tag__close')} onClick={this.closeHandle} size={12} />;
    return (
      <Host style={this.getStyle()} class={classNames('glue-tag', bem([type, mark, plain, round, size]))}>
        <slot></slot>
        {CloseIcon}
      </Host>
    );
  }
}
