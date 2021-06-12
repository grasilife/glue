import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { useRect } from '../../utils/useRect';
import { range } from '../../utils/format/number';
import { isHidden } from '../../utils/dom/style';
import { preventDefault } from '../../utils/dom/event';
import '@glue/touch-emulator';
import { UseTouch } from '../../utils/composables/use-touch';
let touch = new UseTouch();
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-swipe',
  styleUrl: 'glue-swipe.less',
  shadow: false,
})
export class GlueSwipe {
  @Element() el!: HTMLElement;
  @Prop() width: number;
  @Prop() height: number;
  @Prop() autoplay: number;
  @Prop() vertical: boolean;
  @Prop() lazyRender: boolean;
  @Prop() indicatorColor: string;
  @Prop() loop = false;
  @Prop() duration: string | number = 500;
  @Prop() touchable = false;
  @Prop() initialSwipe = 0;
  @Prop() showIndicators = false;
  @Prop() stopPropagation = false;
  @State() rect = null;
  @State() touchStartTime;
  @State() autoplayTimer;
  // @State() width = 0;
  // @State() height = 0;
  @State() offset = 0;
  @State() active = 0;
  @State() swiping = false;
  @State() children = [];
  //   const windowSize = useWindowSize();
  // const { children, linkChildren } = useChildren(SWIPE_KEY);

  count = () => this.children.length;

  size = () => {
    if (this.vertical) {
      return this.height;
    } else {
      return this.width;
    }
  };

  delta = () => (this.vertical ? touch.deltaY : touch.deltaX);

  minOffset = () => {
    return (this.vertical ? this.rect.height : this.rect.width) - this.size() * this.count();
  };

  maxCount = () => Math.ceil(Math.abs(this.minOffset()) / this.size());

  trackSize = () => this.count() * this.size();

  activeIndicator = () => (this.active + this.count()) % this.count();

  isCorrectDirection = () => {
    const expect = this.vertical ? 'vertical' : 'horizontal';
    return touch.direction === expect;
  };

  trackStyle = () => {
    const mainAxis = this.vertical ? 'height' : 'width';
    const crossAxis = this.vertical ? 'width' : 'height';
    const style = {
      transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
      transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`,
    };

    if (this.size()) {
      style[mainAxis] = `${this.trackSize()}px`;
      style[crossAxis] = this[crossAxis] ? `${this[crossAxis]}px` : '';
    }

    return style;
  };

  getTargetActive = pace => {
    const { active } = this;

    if (pace) {
      if (this.loop) {
        return range(active + pace, -1, this.count());
      }
      return range(active + pace, 0, this.maxCount());
    }
    return active;
  };

  getTargetOffset = (targetActive, offset = 0) => {
    let currentPosition = targetActive * this.size();
    if (!this.loop) {
      currentPosition = Math.min(currentPosition, -this.minOffset());
    }

    let targetOffset = offset - currentPosition;
    if (!this.loop) {
      targetOffset = range(targetOffset, this.minOffset(), 0);
    }

    return targetOffset;
  };

  move = ({ pace = 0, offset = 0, emitChange }) => {
    if (this.count() <= 1) {
      return;
    }

    const { active } = this;
    const targetActive = this.getTargetActive(pace);
    const targetOffset = this.getTargetOffset(targetActive, offset);

    // auto move first and last swipe in loop mode
    if (this.loop) {
      if (this.children[0] && targetOffset !== this.minOffset()) {
        const outRightBound = targetOffset < this.minOffset();
        this.children[0].setOffset(outRightBound ? this.trackSize() : 0);
      }

      if (this.children[this.count() - 1] && targetOffset !== 0) {
        const outLeftBound = targetOffset > 0;
        this.children[this.count() - 1].setOffset(outLeftBound ? -this.trackSize() : 0);
      }
    }

    this.active = targetActive;
    this.offset = targetOffset;

    if (emitChange && targetActive !== active) {
      // emit('change', activeIndicator.value);
    }
  };

  correctPosition = () => {
    this.swiping = true;

    if (this.active <= -1) {
      // move({ pace: count.value });
    }
    if (this.active >= this.count()) {
      // move({ pace: -count.value });
    }
  };

  prev = () => {
    this.correctPosition();
    touch.reset();

    // doubleRaf(() => {
    //   this.swiping = false;
    //   this.move({
    //     pace: -1,
    //     emitChange: true,
    //   });
    // });
  };

  next = () => {
    this.correctPosition();
    touch.reset();

    // doubleRaf(() => {
    //   this.swiping = false;
    //   this.move({
    //     pace: 1,
    //     emitChange: true,
    //   });
    // });
  };

  // let autoplayTimer;

  stopAutoplay = () => {
    clearTimeout(this.autoplayTimer);
  };

  autoplayFn = () => {
    if (this.autoplay > 0 && this.count() > 1) {
      this.stopAutoplay();
      this.autoplayTimer = setTimeout(() => {
        this.next();
        this.autoplayFn();
      }, this.autoplay);
    }
  };

  // initialize swipe position
  initialize = (active = +this.initialSwipe) => {
    if (!this.el || isHidden(this.el)) {
      return;
    }

    this.stopAutoplay();

    const rect = useRect(this.el);

    this.rect = rect;
    this.swiping = true;
    this.active = active;
    this.width = +this.width || rect.width;
    this.height = +this.height || rect.height;
    this.offset = this.getTargetOffset(active);
    // this.children.forEach(swipe => {
    //   swipe.setOffset(0);
    // });

    this.autoplayFn();
  };

  resize = () => {
    this.initialize(this.active);
  };

  // let touchStartTime;

  onTouchStart = event => {
    if (!this.touchable) return;

    touch.start(event);
    this.touchStartTime = Date.now();

    this.stopAutoplay();
    this.correctPosition();
  };

  onTouchMove = event => {
    if (this.touchable && this.swiping) {
      touch.move(event);

      if (this.isCorrectDirection()) {
        preventDefault(event, this.stopPropagation);
        // this.move({ offset: this.delta() });
      }
    }
  };

  onTouchEnd = () => {
    if (!this.touchable || !this.swiping) {
      return;
    }

    const duration = Date.now() - this.touchStartTime;
    const speed = this.delta() / duration;
    const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(this.delta()) > this.size() / 2;

    if (shouldSwipe && this.isCorrectDirection()) {
      const offset = this.vertical ? touch.offsetY : touch.offsetX;

      let pace = 0;

      if (this.loop) {
        pace = offset > 0 ? (this.delta() > 0 ? -1 : 1) : 0;
      } else {
        pace = -Math[this.delta() > 0 ? 'ceil' : 'floor'](this.delta() / this.size());
      }

      this.move({
        pace,
        emitChange: true,
      });
    } else if (this.delta()) {
      // this.move({ pace: 0 });
    }

    this.swiping = false;
    this.autoplayFn();
  };

  swipeTo = (index, options = {}) => {
    console.log(index, options);

    this.correctPosition();
    touch.reset();

    // doubleRaf(() => {
    //   let targetIndex;
    //   if (this.loop && index === this.count()) {
    //     targetIndex = this.active === 0 ? 0 : index;
    //   } else {
    //     targetIndex = index % this.count();
    //   }

    //   if (options.immediate) {
    //     doubleRaf(() => {
    //       this.swiping = false;
    //     });
    //   } else {
    //     this.swiping = false;
    //   }

    //   this.move({
    //     pace: targetIndex - this.active,
    //     emitChange: true,
    //   });
    // });
  };

  renderDot = (_, index) => {
    const active = index === this.activeIndicator();
    const style = active ? { backgroundColor: this.indicatorColor } : null;
    return (
      <i
        style={style}
        class={classNames({
          'glue-swipe__indicators--active': active,
        })}
      />
    );
  };

  renderIndicator = () => {
    // if (slots.indicator) {
    //   return slots.indicator();
    // }
    if (this.showIndicators && this.count() > 1) {
      return (
        <div
          class={classNames({
            'glue-swipe__indicators--vertical': this.vertical,
          })}
        >
          {Array(...Array(this.count())).map(this.renderDot)}
        </div>
      );
    }
  };
  componentDidLoad() {
    console.log('Component has been rendered');
    this.children = getElementChildren(this.el);
  }
  render() {
    return (
      <Host class="glue-swipe">
        <div
          style={this.trackStyle()}
          class={classNames({
            'glue-swipe__track--vertical': this.vertical,
          })}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchEnd}
        >
          <slot></slot>
        </div>
        {this.renderIndicator()}
      </Host>
    );
  }
}
