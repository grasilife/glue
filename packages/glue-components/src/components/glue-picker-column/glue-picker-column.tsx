import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { range } from '../../utils/format/number';
import { preventDefault } from '../../utils/dom/event';
import '@glue/touch-emulator';
import { UseTouch } from '../../utils/composables/use-touch';
import { createNamespace } from '../../utils/create/index';
import { deepClone } from '../../utils/deep-clone';
const [bem] = createNamespace('glue-picker-column');
import { isObject } from '../../utils/base';
let touch = new UseTouch();
const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;
function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}
@Component({
  tag: 'glue-picker-column',
  styleUrl: 'glue-picker-column.less',
  shadow: false,
})
export class GluePickerColumn {
  @Prop() first: string;
  @Prop() textKey: string;
  @Prop() readonly: boolean;
  @Prop() allowHtml: boolean;
  @Prop() className: string;
  @Prop() itemHeight: number;
  @Prop() defaultIndex: number;
  @Prop() swipeDuration: number | string;
  @Prop() visibleItemCount: number;
  @Prop() initialOptions = [];
  @State() index: number;
  @State() offset = 0;
  @State() duration = 0;
  @State() options: any;
  @State() moving: any;
  @State() startOffset: any;
  @State() touchStartTime: any;
  @State() momentumOffset: any;
  @State() transitionEndTrigger: any;
  componentWillLoad() {
    this.index = this.defaultIndex;
    this.options = deepClone(this.initialOptions);
    console.log('Component is about to be rendered');
  }
  wrapper;

  count = () => this.options.length;

  baseOffset = () => (this.itemHeight * (this.visibleItemCount - 1)) / 2;

  adjustIndex = index => {
    index = range(index, 0, this.count());

    for (let i = index; i < this.count(); i++) {
      if (!isOptionDisabled(this.options[i])) return i;
    }
    for (let i = index - 1; i >= 0; i--) {
      if (!isOptionDisabled(this.options[i])) return i;
    }
  };

  setIndex = (index, emitChange?) => {
    index = this.adjustIndex(index) || 0;

    const offset = -index * this.itemHeight;
    const trigger = () => {
      if (index !== this.index) {
        this.index = index;

        if (emitChange) {
          // emit('change', index);
        }
      }
    };

    // trigger the change event after transitionend when this.moving
    if (this.moving && offset !== this.offset) {
      this.transitionEndTrigger = trigger;
    } else {
      trigger();
    }

    this.offset = offset;
  };

  setOptions = options => {
    if (JSON.stringify(options) !== JSON.stringify(this.options)) {
      this.options = deepClone(options);
      this.setIndex(this.defaultIndex);
    }
  };

  onClickItem = index => {
    if (this.moving || this.readonly) {
      return;
    }

    this.transitionEndTrigger = null;
    this.duration = DEFAULT_DURATION;
    this.setIndex(index, true);
  };

  getOptionText = option => {
    if (isObject(option) && this.textKey in option) {
      return option[this.textKey];
    }
    return option;
  };

  getIndexByOffset = offset => range(Math.round(-offset / this.itemHeight), 0, this.count() - 1);

  momentum = (distance, duration) => {
    const speed = Math.abs(distance / duration);

    distance = this.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

    const index = this.getIndexByOffset(distance);

    this.duration = +this.swipeDuration;
    this.setIndex(index, true);
  };

  stopMomentum = () => {
    this.moving = false;
    this.duration = 0;

    if (this.transitionEndTrigger) {
      this.transitionEndTrigger();
      this.transitionEndTrigger = null;
    }
  };

  onTouchStart = event => {
    if (this.readonly) {
      return;
    }

    touch.start(event);

    if (this.moving) {
      const translateY = getElementTranslateY(this.wrapper);
      this.offset = Math.min(0, translateY - this.baseOffset());
      this.startOffset = this.offset;
    } else {
      this.startOffset = this.offset;
    }

    this.duration = 0;
    this.touchStartTime = Date.now();
    this.momentumOffset = this.startOffset;
    this.transitionEndTrigger = null;
  };

  onTouchMove = event => {
    if (this.readonly) {
      return;
    }

    touch.move(event);

    if (touch.isVertical()) {
      this.moving = true;
      preventDefault(event, true);
    }

    this.offset = range(this.startOffset + touch.deltaY, -(this.count() * this.itemHeight), this.itemHeight);

    const now = Date.now();
    if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
      this.touchStartTime = now;
      this.momentumOffset = this.offset;
    }
  };

  onTouchEnd = () => {
    if (this.readonly) {
      return;
    }

    const distance = this.offset - this.momentumOffset;
    const duration = Date.now() - this.touchStartTime;
    const allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

    if (allowMomentum) {
      this.momentum(distance, duration);
      return;
    }

    const index = this.getIndexByOffset(this.offset);
    this.duration = DEFAULT_DURATION;
    this.setIndex(index, true);

    // compatible with desktop scenario
    // use setTimeout to skip the click event Emitted after touchstart
    setTimeout(() => {
      this.moving = false;
    }, 0);
  };

  renderOptions = () => {
    const optionStyle = {
      height: `${this.itemHeight}px`,
    };

    return this.options.map((option, index) => {
      const text = this.getOptionText(option);
      const disabled = isOptionDisabled(option);

      const data = {
        role: 'button',
        style: optionStyle,
        tabindex: disabled ? -1 : 0,
        // class: bem('item', {
        //   disabled,
        //   selected: index === this.index,
        // }),
        onClick: () => {
          this.onClickItem(index);
        },
      };

      const childData = {
        class: 'van-ellipsis',
        [this.allowHtml ? 'innerHTML' : 'textContent']: text,
      };

      return (
        <li {...data}>
          <div {...childData} />
        </li>
      );
    });
  };

  setValue = value => {
    const { options } = this;
    for (let i = 0; i < options.length; i++) {
      if (this.getOptionText(options[i]) === value) {
        return this.setIndex(i);
      }
    }
  };

  getValue = () => this.options[this.index];
  render() {
    const wrapperStyle = {
      transform: `translate3d(0, ${this.offset + this.baseOffset()}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: this.duration ? 'all' : 'none',
    };
    return (
      <Host
        class={classNames(bem([this.className]), 'glue-picker-column')}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
      >
        <ul
          ref={dom => {
            this.wrapper = dom;
          }}
          style={wrapperStyle}
          class={bem('wrapper')}
          onTransitionEnd={this.stopMomentum}
        >
          {this.renderOptions()}
        </ul>
      </Host>
    );
  }
}
