import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
import { BORDER_LEFT, BORDER_SURROUND } from '../../global/constant/constant';
@Component({
  tag: 'glue-password-input',
  styleUrl: 'glue-password-input.less',
  shadow: false,
})
export class GluePasswordInput {
  @Prop() info: string;
  @Prop() gutter: string | number;
  @Prop() focused: boolean;
  @Prop() errorInfo: string;
  @Prop() mask = true;
  @Prop() value = '';
  @Prop() length = 6;
  @Event() glueFocus: EventEmitter;
  onTouchStart = (event: TouchEvent) => {
    event.stopPropagation();
    this.glueFocus.emit(event);
  };

  renderPoints = () => {
    const Points = [];
    const { mask, value, length, gutter, focused } = this;

    for (let i = 0; i < length; i++) {
      const char = value[i];
      const showBorder = i !== 0 && !gutter;
      const showCursor = focused && i === value.length;
      console.log(i, value, 'value1');
      let style;
      if (i !== 0 && gutter) {
        style = { marginLeft: addUnit(gutter) };
      }

      Points.push(
        <li
          class={classNames('glue-password-input__item', {
            [BORDER_LEFT]: showBorder,
            'glue-password-input__focus': showCursor,
          })}
          style={style}
        >
          {mask ? (
            <i style={{ visibility: char ? 'visible' : 'hidden' }} />
          ) : (
            char
          )}
          {showCursor && <div class="glue-password-input__cursor" />}
        </li>
      );
    }
    console.log(Points, 'Points');
    return Points;
  };
  render() {
    const info = this.errorInfo || this.info;
    return (
      <Host class="glue-password-input">
        <ul
          class={classNames('glue-password-input__security', {
            [BORDER_SURROUND]: !this.gutter,
          })}
          onTouchStart={this.onTouchStart}
        >
          {this.renderPoints()}
        </ul>
        {info && (
          <div
            class={classNames('glue-password-input__security', {
              [BORDER_SURROUND]: !this.gutter,
              ['glue-password-input__' + this.errorInfo]: this.errorInfo,
              ['glue-password-input__info']: !this.errorInfo,
            })}
          >
            {info}
          </div>
        )}
      </Host>
    );
  }
}
