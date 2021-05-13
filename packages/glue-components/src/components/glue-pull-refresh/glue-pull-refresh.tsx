import { Component, Prop, h, Host, State, Watch, EventEmitter, Event } from '@stencil/core';
// import classNames from 'classnames';
import { getScrollTop } from '../../utils/dom/scroll';
import { preventDefault } from '../../utils/dom/event';
import { UseTouch } from '../../utils/composables/use-touch';
const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];
@Component({
  tag: 'glue-pull-refresh',
  styleUrl: 'glue-pull-refresh.less',
  shadow: false,
})
export class GluePullRefresh {
  @Prop() disabled: boolean;
  @Prop() successText: string;
  @Prop() pullingText: string;
  @Prop() loosingText: string;
  @Prop() loadingText: string;
  @Prop() modelValue = false;
  @Prop() successDuration = 500;
  @Prop() animationDuration = 300;
  @Prop() headHeight = DEFAULT_HEAD_HEIGHT;
  @State() status = 'normal';
  @State() distance = 0;
  @State() duration = 0;
  @State() reachTop;
  @Event() refresh: EventEmitter;
  @Watch('modelValue')
  watchHandler(value) {
    this.duration = +this.animationDuration;
    if (value) {
      this.setStatus(+this.headHeight, true);
    } else if (this.successText) {
      this.showSuccessTip();
    } else {
      this.setStatus(0, false);
    }
  }
  touch = new UseTouch();
  root: HTMLElement;
  scrollParent;
  ease = (distance: number) => {
    const headHeight = +this.headHeight;

    if (distance > headHeight) {
      if (distance < headHeight * 2) {
        distance = headHeight + (distance - headHeight) / 2;
      } else {
        distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
      }
    }

    return Math.round(distance);
  };
  getHeadStyle = () => {
    if (this.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${this.headHeight}px`,
      };
    }
  };

  isTouchable = () => this.status !== 'loading' && this.status !== 'success' && !this.disabled;

  setStatus = (distance: number, isLoading?: boolean) => {
    this.distance = distance;

    if (isLoading) {
      this.status = 'loading';
    } else if (distance === 0) {
      this.status = 'normal';
    } else if (distance < this.headHeight) {
      this.status = 'pulling';
    } else {
      this.status = 'loosing';
    }
  };

  getStatusText = () => {
    const { status } = this;
    if (status === 'normal') {
      return '';
    }
    return (this as any)[`${status}Text`] || status;
  };

  renderStatus = () => {
    const { status } = this;

    const nodes = [];

    if (TEXT_STATUS.indexOf(status) !== -1) {
      nodes.push(<div class="glue-pull-refresh__text">{this.getStatusText()}</div>);
    }
    if (status === 'loading') {
      nodes.push(<glue-loading size="16">{this.getStatusText()}</glue-loading>);
    }

    return nodes;
  };

  showSuccessTip = () => {
    this.status = 'success';

    setTimeout(() => {
      this.setStatus(0);
    }, +this.successDuration);
  };

  checkPosition = (event: TouchEvent) => {
    this.reachTop = getScrollTop(this.scrollParent!) === 0;

    if (this.reachTop) {
      this.duration = 0;
      this.touch.start(event);
    }
  };

  onTouchStart = (event: TouchEvent) => {
    if (this.isTouchable()) {
      this.checkPosition(event);
    }
  };

  onTouchMove = (event: TouchEvent) => {
    if (this.isTouchable()) {
      if (!this.reachTop) {
        this.checkPosition(event);
      }

      const { deltaY } = this.touch;
      this.touch.move(event);

      if (this.reachTop && deltaY >= 0 && this.touch.isVertical()) {
        preventDefault(event);
        this.setStatus(this.ease(deltaY));
      }
    }
  };

  onTouchEnd = () => {
    if (this.reachTop && this.touch.deltaY && this.isTouchable()) {
      this.duration = +this.animationDuration;

      if (this.status === 'loosing') {
        this.setStatus(+this.headHeight, true);
        this.modelValue = true;
        this.refresh.emit();
      } else {
        this.setStatus(0);
      }
    }
  };
  render() {
    const trackStyle = {
      transitionDuration: `${this.duration}ms`,
      transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : '',
    };
    return (
      <Host ref={dom => (this.root = dom)} class="glue-pull-refresh">
        <div
          class="glue-pull-refresh__track"
          style={trackStyle}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchEnd}
        >
          <div class="glue-pull-refresh__head" style={this.getHeadStyle()}>
            {this.renderStatus()}
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
