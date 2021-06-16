import { Component, Prop, h, Host, State, Element, Watch, Method, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { useRect } from '../../utils/useRect';
import { doubleRaf } from '../../utils/animation';
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
  @Prop({ mutable: true }) vertical: boolean = false;
  @Prop({ mutable: true }) lazyRender: boolean;
  @Prop() indicatorColor: string = '#1989fa';
  @Prop({ mutable: true }) loop = false;
  @Prop() duration: string | number = 500;
  @Prop() touchable = false;
  @Prop() initialSwipe = 0;
  @Prop() showIndicators: any = false;
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
  @Event() glueChange: EventEmitter;

  trackRef;
  @Watch('autoplay')
  autoplayHandle(value) {
    if (value > 0) {
      this.autoplayFn();
    } else {
      this.stopAutoplay();
    }
  }
  @Watch('children.length')
  childrenHandle() {
    const active = Math.min(this.children.length - 1, this.active);
    this.initialize(active);
  }
  @Watch('initialSwipe')
  initialSwipeHandle() {
    this.initialize();
  }
  count = () => this.children.length;

  size = () => {
    if (this.vertical) {
      return this.height;
    } else {
      return this.width;
    }
  };
  @Method()
  async getSize() {
    return this.size();
  }
  delta = () => (this.vertical ? touch.deltaY : touch.deltaX);

  minOffset = () => {
    return (this.vertical ? this.rect.height : this.rect.width) - this.size() * this.count();
  };

  maxCount = () => Math.ceil(Math.abs(this.minOffset()) / this.size());

  trackSize = () => this.count() * this.size();

  activeIndicator = () => {
    console.log(this.active, this.count(), (this.active + this.count()) % this.count(), 'agiuaui');
    return (this.active + this.count()) % this.count();
  };

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
    console.log(this.trackSize(), this[crossAxis], 'this.trackSize()');
    if (this.size()) {
      style[mainAxis] = `${this.trackSize()}px`;
      style[crossAxis] = this[crossAxis] ? `${this[crossAxis]}px` : '';
    }

    return style;
  };

  getTargetActive = pace => {
    console.log(pace, 'pace');

    const { active } = this;

    if (pace) {
      if (this.loop) {
        console.log(range(active + pace, -1, this.count()), active, pace, this.count(), 'active111');
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
    console.log(this.loop, 'this.loop');
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
    console.log(targetActive, 'targetActive');
    this.active = targetActive;
    this.offset = targetOffset;

    if (emitChange && targetActive !== active) {
      console.log(this.activeIndicator(), 'this.activeIndicator()');
      this.glueChange.emit(this.activeIndicator());
    }
  };

  correctPosition = () => {
    this.swiping = true;

    if (this.active <= -1) {
      this.move({ pace: this.count(), emitChange: false });
    }
    if (this.active >= this.count()) {
      this.move({ pace: -this.count(), emitChange: false });
    }
  };

  prev = () => {
    this.correctPosition();
    touch.reset();

    doubleRaf(() => {
      this.swiping = false;
      this.move({
        pace: -1,
        emitChange: true,
      });
    });
  };

  next = () => {
    this.correctPosition();
    touch.reset();

    doubleRaf(() => {
      this.swiping = false;
      this.move({
        pace: 1,
        emitChange: true,
      });
    });
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
    console.log('initialize22w2w2');
    this.stopAutoplay();

    const rect = useRect(this.el);

    this.rect = rect;
    this.swiping = true;
    this.active = active;
    this.width = +this.width || rect.width;
    this.height = +this.height || rect.height;
    this.offset = this.getTargetOffset(active);
    for (let i = 0; i < this.children.length; i++) {
      let swipe = this.children[i];
      console.log(swipe, 'swipeswipe');
      swipe.setOffset(0);
    }

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

  swipeTo = (index, options: any = {}) => {
    console.log(index, options);

    this.correctPosition();
    touch.reset();

    doubleRaf(() => {
      let targetIndex;
      if (this.loop && index === this.count()) {
        targetIndex = this.active === 0 ? 0 : index;
      } else {
        targetIndex = index % this.count();
      }

      if (options.immediate) {
        doubleRaf(() => {
          this.swiping = false;
        });
      } else {
        this.swiping = false;
      }

      this.move({
        pace: targetIndex - this.active,
        emitChange: true,
      });
    });
  };

  renderDot = (_, index) => {
    //指示器
    const active = index === this.activeIndicator();
    const style = active ? { backgroundColor: this.indicatorColor } : null;
    return (
      <i
        style={style}
        class={classNames('glue-swipe__indicator', {
          'glue-swipe__indicator--active': active,
        })}
      />
    );
  };

  renderIndicator = () => {
    if ((this.showIndicators = '#slot')) {
      return <slot name="show-indicators"></slot>;
    }
    if (this.showIndicators && this.count() > 1) {
      return (
        <div
          class={classNames('glue-swipe__indicators', {
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
    this.children = getElementChildren(this.trackRef);
    console.log(this.children, 'this.children');
    this.initialize();
  }
  render() {
    return (
      <Host class="glue-swipe">
        <div
          ref={dom => {
            this.trackRef = dom;
          }}
          style={this.trackStyle()}
          class={classNames('glue-swipe__track', {
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
