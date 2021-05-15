import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import '@vant/touch-emulator';
import { stopPropagation } from '../../utils/dom/event';
import { getSizeStyle } from '../../utils/format/unit';
import { UseTouch } from '../../utils/composables/use-touch';
let touch = new UseTouch();
import { preventDefault } from '../../utils/dom/event';
import { addUnit } from '../../utils/format/unit';
import { useRect } from '../../utils/useRect';

@Component({
  tag: 'glue-slider',
  styleUrl: 'glue-slider.less',
  shadow: false,
})
export class GlueSlider {
  @Prop() first: string;
  @Prop() range: boolean;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean;
  @Prop() vertical: boolean;
  @Prop() barHeight: number | string;
  @Prop() buttonSize: number | string;
  @Prop() activeColor: string;
  @Prop() inactiveColor: string;
  @Prop() min: number | string = 0;
  @Prop() max: number | string = 100;
  @Prop() step: number | string = 1;
  @Prop({ mutable: true }) value: number = 0;
  @State() buttonIndex;
  @State() startValue;
  @State() currentValue;
  @State() dragStatus;
  @Event() glueChange: EventEmitter;
  @Event() glueDragStart: EventEmitter;
  @Event() glueDragEnd: EventEmitter;
  root: HTMLElement;

  scope = () => Number(this.max) - Number(this.min);

  wrapperStyle = () => {
    const crossAxis = this.vertical ? 'width' : 'height';
    return {
      background: this.inactiveColor,
      [crossAxis]: addUnit(this.barHeight),
    };
  };
  isRange = (val: unknown): val is number[] => !!this.range && Array.isArray(val);

  // 计算选中条的长度百分比
  calcMainAxis = () => {
    const { value, min } = this;
    if (this.isRange(value)) {
      return `${((value[1] - value[0]) * 100) / this.scope()}%`;
    }
    return `${((this.value - Number(min)) * 100) / this.scope()}%`;
  };

  // 计算选中条的开始位置的偏移量
  calcOffset = () => {
    const { value, min } = this;
    if (this.isRange(value)) {
      return `${((value[0] - Number(min)) * 100) / this.scope()}%`;
    }
    return `0%`;
  };

  barStyle = () => {
    const mainAxis = this.vertical ? 'height' : 'width';
    return {
      [mainAxis]: this.calcMainAxis(),
      left: this.vertical ? undefined : this.calcOffset(),
      top: this.vertical ? this.calcOffset() : undefined,
      background: this.activeColor,
      transition: this.dragStatus ? 'none' : undefined,
    };
  };

  format = (value: number) => {
    const { min, max, step } = this;
    value = Math.max(+min, Math.min(value, +max));
    return Math.round(value / +step) * +step;
  };

  isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);

  // 处理两个滑块重叠之后的情况
  handleOverlap = (value: number[]) => {
    if (value[0] > value[1]) {
      return value.slice(0).reverse();
    }
    return value;
  };

  updateValue = (value, end?: boolean) => {
    console.log(value, 'value');
    if (this.isRange(value)) {
      value = this.handleOverlap(value).map(this.format);
    } else {
      value = this.format(value);
    }

    if (!this.isSameValue(value, this.value)) {
      console.log(value, 'value');
      this.value = value;
    }

    if (end && !this.isSameValue(value, this.startValue)) {
      this.glueChange.emit(value);
    }
  };

  onClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (this.disabled || this.readonly) {
      return;
    }

    const { min, vertical, value } = this;
    const rect = useRect(this.root);
    const delta = vertical ? event.clientY - rect.top : event.clientX - rect.left;
    const total = vertical ? rect.height : rect.width;
    console.log(delta, total, min, this.scope(), 'ajghiahig');
    const value2 = Number(min) + (delta / total) * this.scope();
    console.log(value2, 'value2');
    if (this.isRange(value)) {
      const [left, right] = value;
      const middle = (left + right) / 2;

      if (value2 <= middle) {
        this.updateValue([value2, right], true);
      } else {
        this.updateValue([left, value2], true);
      }
    } else {
      this.updateValue(value2, true);
    }
  };

  onTouchStart = event => {
    console.log(event, 'ahuahu');
    // if (typeof index === 'number') {
    //   this.buttonIndex = index;
    // }
    if (this.disabled || this.readonly) {
      return;
    }

    touch.start(event);
    this.currentValue = this.value;

    if (this.isRange(this.currentValue)) {
      this.startValue = this.currentValue.map(this.format);
    } else {
      this.startValue = this.format(this.currentValue);
    }

    this.dragStatus = 'start';
  };

  onTouchMove = event => {
    console.log(11111);
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dragStatus === 'start') {
      this.glueDragStart.emit();
    }

    preventDefault(event, true);
    touch.move(event);
    this.dragStatus = 'draging';

    const rect = useRect(this.root);
    const delta = this.vertical ? touch.deltaY : touch.deltaX;
    const total = this.vertical ? rect.height : rect.width;
    const diff = (delta / total) * this.scope();

    if (this.isRange(this.startValue)) {
      this.currentValue[this.buttonIndex] = this.startValue[this.buttonIndex] + diff;
    } else {
      this.currentValue = this.startValue + diff;
    }
    this.updateValue(this.currentValue);
  };

  onTouchEnd = () => {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dragStatus === 'draging') {
      this.updateValue(this.currentValue, true);
      this.glueDragEnd.emit();
    }

    this.dragStatus = '';
  };

  renderButton = (index?: number) => {
    const getClassName = () => {
      if (typeof index === 'number') {
        const position = ['left', 'right'];
        return `glue-slider__button-wrapper-${position[index]}`;
      }
      return `glue-slider__button-wrapper`;
    };

    const currentValue = typeof index === 'number' ? this.value[index] : (this.value as number);

    return (
      <div
        role="slider"
        class={classNames(getClassName())}
        tabindex={this.disabled || this.readonly ? -1 : 0}
        aria-valuemin={+this.min}
        aria-valuenow={currentValue}
        aria-valuemax={+this.max}
        aria-orientation={this.vertical ? 'vertical' : 'horizontal'}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
        onClick={stopPropagation}
      >
        <div class="glue-slider__button" style={getSizeStyle(this.buttonSize)} />
      </div>
    );
  };
  render() {
    return (
      <Host
        ref={dom => {
          this.root = dom;
        }}
        style={this.wrapperStyle()}
        class={classNames('glue-slider', {
          'glue-slider__vertical': this.vertical,
          'glue-slider__disabled': this.disabled,
        })}
        onClick={this.onClick}
      >
        <div class="glue-slider__bar" style={this.barStyle()}>
          {this.range ? [this.renderButton(0), this.renderButton(1)] : this.renderButton()}
        </div>
      </Host>
    );
  }
}
