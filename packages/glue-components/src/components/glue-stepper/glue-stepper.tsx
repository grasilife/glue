import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-stepper');
import { preventDefault } from '../../utils/dom/event';
import { resetScroll } from '../../utils/dom/scroll';
import { isDef } from '../../utils/base';
import { formatNumber } from '../../utils/format/number';
import { getSizeStyle } from '../../utils/format/unit';
import { addUnit } from '../../utils/format/unit';
let actionType: 'plus' | 'minus';
let isLongPress: boolean;
let longPressTimer: NodeJS.Timeout;
const LONG_PRESS_INTERVAL = 200;
const LONG_PRESS_START_TIME = 600;
function equal(value1?: string | number, value2?: string | number) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}
@Component({
  tag: 'glue-stepper',
  styleUrl: 'glue-stepper.less',
  shadow: false,
})
export class GlueStepper {
  @Prop() theme: string;
  @Prop() integer: boolean;
  @Prop() disabled: boolean;
  @Prop() allowEmpty: boolean;
  @Prop() modelValue: string | number;
  @Prop() inputWidth: string | number;
  @Prop() buttonSize: string | number;
  @Prop() placeholder: string;
  @Prop() disablePlus: boolean;
  @Prop() disableMinus: boolean;
  @Prop() disableInput: boolean;
  @Prop() beforeChange: any;
  @Prop() decimalLength: string | number;
  @Prop() name = '';
  @Prop() min = 1;
  @Prop() max = Infinity;
  @Prop() step = 1;
  @Prop() defaultValue = 1;
  @Prop() showPlus = true;
  @Prop() showMinus = true;
  @Prop() showInput = true;
  @Prop() longPress = true;
  @Event() overlimit: EventEmitter;
  @Event() focus: EventEmitter;
  @Event() blur: EventEmitter;
  @Event() changeValue: EventEmitter;
  inputRef: HTMLElement;
  format = (value: string | number) => {
    const { min, max, allowEmpty, decimalLength } = this;

    if (allowEmpty && value === '') {
      return value;
    }

    value = formatNumber(String(value), !this.integer);
    value = value === '' ? 0 : +value;
    value = isNaN(value) ? +min : value;
    value = Math.max(Math.min(+max, value), +min);

    // format decimal
    if (isDef(decimalLength)) {
      value = value.toFixed(+decimalLength);
    }

    return value;
  };

  getInitialValue = () => {
    const defaultValue = this.modelValue ?? this.defaultValue;
    const value = this.format(defaultValue);

    if (!equal(value, this.modelValue)) {
      this.changeValue.emit(value);
    }

    return value;
  };
  current = this.getInitialValue();
  minusDisabled = () => this.disabled || this.disableMinus || this.current <= +this.min;

  plusDisabled = () => this.disabled || this.disablePlus || this.current >= +this.max;

  inputStyle = () => ({
    width: addUnit(this.inputWidth),
    height: addUnit(this.buttonSize),
  });

  buttonStyle = () => getSizeStyle(this.buttonSize);
  check = () => {
    const value = this.format(this.current);
    if (!equal(value, this.current)) {
      this.current = value;
    }
  };

  setValue = (value: string | number) => {
    if (this.beforeChange) {
      // callInterceptor({
      //   args: [value],
      //   interceptor: this.beforeChange,
      //   done() {
      //     this.current.value = value;
      //   },
      // });
    } else {
      this.current = value;
    }
  };

  onChange = () => {
    if ((actionType === 'plus' && this.plusDisabled()) || (actionType === 'minus' && this.minusDisabled())) {
      this.overlimit.emit(actionType);

      return;
    }

    const diff = actionType === 'minus' ? -this.step : +this.step;
    const value = this.format(add(+this.current, diff));

    this.setValue(value);
    // emit(actionType);
  };

  onInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const { value } = input;
    const { decimalLength } = this;

    let formatted = formatNumber(String(value), !this.integer);

    // limit max decimal length
    if (isDef(decimalLength) && formatted.indexOf('.') !== -1) {
      const pair = formatted.split('.');
      formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
    }

    if (this.beforeChange) {
      input.value = String(this.current);
    } else if (!equal(value, formatted)) {
      input.value = formatted;
    }

    // perfer number type
    const isNumeric = formatted === String(+formatted);
    this.setValue(isNumeric ? +formatted : formatted);
  };

  onFocus = (event: Event) => {
    // readonly not work in lagacy mobile safari
    if (this.disableInput && this.inputRef) {
      this.inputRef.blur();
    } else {
      this.focus.emit(event);
    }
  };

  onBlur = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = this.format(input.value);
    input.value = String(value);
    this.current = value;
    this.blur.emit(event);
    resetScroll();
  };
  longPressStep = () => {
    longPressTimer = setTimeout(() => {
      this.onChange();
      this.longPressStep();
    }, LONG_PRESS_INTERVAL);
  };
  onTouchStart = () => {
    if (this.longPress) {
      isLongPress = false;
      clearTimeout(longPressTimer);
      longPressTimer = setTimeout(() => {
        isLongPress = true;
        this.onChange();
        this.longPressStep();
      }, LONG_PRESS_START_TIME);
    }
  };

  onTouchEnd = (event: TouchEvent) => {
    if (this.longPress) {
      clearTimeout(longPressTimer);
      if (isLongPress) {
        preventDefault(event);
      }
    }
  };
  onMousedown = (event: MouseEvent) => {
    // fix mobile safari page scroll down issue
    // see: https://github.com/youzan/vant/issues/7690
    if (this.disableInput) {
      event.preventDefault();
    }
  };

  createListeners = (type: 'plus' | 'minus') => ({
    onClick: (event: MouseEvent) => {
      // disable double tap scrolling on mobile safari
      event.preventDefault();
      actionType = type;
      this.onChange();
    },
    onTouchstart: () => {
      actionType = type;
      this.onTouchStart();
    },
    onTouchEnd: this.onTouchEnd,
    onTouchcancel: this.onTouchEnd,
  });

  render() {
    return (
      <Host class={classNames(bem([this.theme]))}>
        <button
          v-show={this.showMinus}
          type="button"
          style={this.buttonStyle()}
          class={classNames('glue-stepper__minus', {
            'glue-stepper__disabled': this.minusDisabled(),
          })}
          {...this.createListeners('minus')}
        />
        <input
          v-show={this.showInput}
          ref={dom => {
            this.inputRef = dom;
          }}
          type={this.integer ? 'tel' : 'text'}
          role="spinbutton"
          class={bem('input')}
          value={this.current}
          style={this.inputStyle()}
          disabled={this.disabled}
          readonly={this.disableInput}
          // set keyboard in mordern browers
          inputmode={this.integer ? 'numeric' : 'decimal'}
          placeholder={this.placeholder}
          aria-valuemax={+this.max}
          aria-valuemin={+this.min}
          aria-valuenow={+this.current}
          onBlur={this.onBlur}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onMouseDown={this.onMousedown}
        />
        <button
          v-show={this.showPlus}
          type="button"
          style={this.buttonStyle()}
          class={classNames('glue-stepper__plus', {
            'glue-stepper__disabled': this.plusDisabled(),
          })}
          {...this.createListeners('plus')}
        />
      </Host>
    );
  }
}
