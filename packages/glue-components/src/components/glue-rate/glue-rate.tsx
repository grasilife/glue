import { Component, Prop, h, Host, EventEmitter, Event, State } from '@stencil/core';
import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
import { UseTouch } from '../../utils/composables/use-touch';
// import { createNamespace } from '../../utils/create/index';
// const [bem] = createNamespace('glue-rate');
@Component({
  tag: 'glue-rate',
  styleUrl: 'glue-rate.less',
  shadow: false,
})
export class GlueRate {
  @Prop() first: string;

  @Prop() size: number;
  @Prop() color: string;
  @Prop() gutter: string;
  @Prop() readonly: boolean;
  @Prop() disabled: boolean;
  @Prop() allowHalf: boolean;
  @Prop() voidColor: string;
  @Prop() iconPrefix: string;
  @Prop() disabledColor: string;
  @Prop() modelValue = 0;
  @Prop() icon = 'star';
  @Prop() voidIcon = 'star-o';
  @Prop() count = 5;
  @Prop() touchable = '';
  @State() ranges = [];
  getRateStatus = (value, index, allowHalf) => {
    console.log(value, index, allowHalf, 'value, index, allowHalf');
    if (value >= index) {
      return 'full';
    }
    if (value + 0.5 >= index && allowHalf) {
      return 'half';
    }
    return 'void';
  };

  list = () => {
    const list = [];
    console.log(this.count, this.modelValue, 'this.count');
    for (let i = 1; i <= this.count; i++) {
      list.push(this.getRateStatus(this.modelValue, i, this.allowHalf));
    }
    console.log(list, 'list');
    return list;
  };
  @Event() select: EventEmitter;

  selectHandle = index => {
    if (!this.disabled && !this.readonly && index !== this.modelValue) {
      this.select.emit(index);
      this.select.emit(index);
    }
  };
  untouchable = () => this.readonly || this.disabled || !this.touchable;
  touch = new UseTouch();
  getScoreByPosition = x => {
    for (let i = this.ranges.length - 1; i > 0; i--) {
      if (x > this.ranges[i].left) {
        return this.ranges[i].score;
      }
    }
    return this.allowHalf ? 0.5 : 1;
  };
  componentDidRender() {
    console.log(this.count, this.modelValue, this.size, 'this.count');
    // this.opened;
    // if (this.show) {
    //   this.openHandle();
    // } else {
    //   this.closeHandle();
    // }
  }
  onTouchStart = event => {
    if (this.untouchable()) {
      return;
    }

    this.touch.start(event);

    // const rects = itemRefs.map(item => item.getBoundingClientRect());

    // this.ranges = [];
    // rects.forEach((rect, index) => {
    //   if (this.allowHalf) {
    //     this.ranges.push({ score: index + 0.5, left: rect.left }, { score: index + 1, left: rect.left + rect.width / 2 });
    //   } else {
    //     this.ranges.push({ score: index + 1, left: rect.left });
    //   }
    // });
  };

  onTouchMove = event => {
    if (this.untouchable()) {
      return;
    }

    this.touch.move(event);

    if (this.touch.isHorizontal()) {
      const { clientX } = event.touches[0];
      // preventDefault(event);
      this.selectHandle(this.getScoreByPosition(clientX));
    }
  };
  renderStar = (status, index) => {
    console.log(status, index, 'status, index');
    const { icon, size, color, count, gutter, voidIcon, disabled, voidColor, allowHalf, iconPrefix, disabledColor } = this;
    const score = index + 1;
    const isFull = status === 'full';
    const isVoid = status === 'void';

    let style;
    if (gutter && score !== +count) {
      style = {
        paddingRight: addUnit(gutter),
      };
    }
    console.log(isFull, 'isFull');
    return (
      <div key={index} role="radio" style={style} tabindex="0" class={classNames('glue-rate__item')} aria-setsize={count} aria-posinset={score} aria-checked={String(!isVoid)}>
        <glue-icon
          size={size}
          name={isFull ? icon : voidIcon}
          class={classNames('glue-rate__icon', {
            'glue-rate__icon--full': isFull,
            'glue-rate__icon--disabled': this.disabled,
          })}
          color={disabled ? disabledColor : isFull ? color : voidColor}
          classPrefix={iconPrefix}
          data-score={score}
          onClick={() => {
            this.selectHandle(score);
          }}
        />
        {allowHalf && (
          <glue-icon
            size={size}
            name={isVoid ? voidIcon : icon}
            class={classNames('glue-rate__icon', {
              'glue-rate__icon--full': !isVoid,
              'glue-rate__icon--disabled': this.disabled,
              'glue-rate__icon--half': true,
            })}
            color={disabled ? disabledColor : isVoid ? voidColor : color}
            classPrefix={iconPrefix}
            data-score={score - 0.5}
            onClick={() => {
              this.selectHandle(score - 0.5);
            }}
          />
        )}
      </div>
    );
  };
  render() {
    return (
      <Host
        role="radiogroup"
        class={classNames('glue-rate ', {
          'glue-rate--readonly': this.readonly,
          'glue-rate--disabled': this.disabled,
        })}
        tabindex="0"
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
      >
        {this.list().map(this.renderStar)}
      </Host>
    );
  }
}
