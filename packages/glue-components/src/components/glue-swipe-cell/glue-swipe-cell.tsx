import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { useTouch } from '../../utils/composables/use-touch';
import { createNamespace } from '../../utils/create/index';
import { range } from '../../utils/format/number';
import { preventDefault } from '../../utils/dom/event';
import { isDef } from '../../utils/base';
const [bem] = createNamespace('glue-swipe-celll');
export type SwipeCellSide = 'left' | 'right';
export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';
@Component({
  tag: 'glue-swipe-cell',
  styleUrl: 'glue-swipe-cell.less',
  shadow: false,
})
export class GlueSwipeell {
  @Prop() disabled: boolean;
  @Prop() leftWidth: any;
  @Prop() rightWidth: string | number;
  @Prop() beforeClose;
  @Prop() stopPropagation: boolean;
  @Prop() name = '';
  @State() offset: any = 0;
  @State() dragging = false;
  @State() opened: boolean;
  @State() lockClick: boolean;
  @State() startOffset: number;
  @Event() openChange: EventEmitter;
  @Event() closeChange: EventEmitter;
  @Event() click: EventEmitter;
  root: HTMLElement;
  leftRef: HTMLElement;
  rightRef: HTMLElement;
  touch = useTouch();

  getWidthByRef = ref => (ref.value ? ref.width : 0);
  componentDidLoad() {
    this.leftWidth = isDef(this.leftWidth) ? +this.leftWidth : this.getWidthByRef(this.leftRef);
    this.rightWidth = isDef(this.rightWidth) ? +this.rightWidth : this.getWidthByRef(this.rightRef);
  }

  open = (side: SwipeCellSide) => {
    this.opened = true;
    this.offset = side === 'left' ? this.leftWidth : -this.rightWidth;
    this.openChange.emit({
      name: this.name,
      position: side,
    });
  };

  close = (position: SwipeCellPosition) => {
    this.offset = 0;

    if (this.opened) {
      this.opened = false;
      this.closeChange.emit({
        name: this.name,
        position,
      });
    }
  };

  toggle = (side: SwipeCellSide) => {
    const offset = Math.abs(this.offset);
    const THRESHOLD = 0.15;
    const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;
    const width = side === 'left' ? this.leftWidth : this.rightWidth;

    if (width && offset > width * threshold) {
      this.open(side);
    } else {
      this.close(side);
    }
  };

  onTouchStart = (event: TouchEvent) => {
    if (!this.disabled) {
      this.startOffset = this.offset;
      this.touch.start(event);
    }
  };

  onTouchMove = (event: TouchEvent) => {
    if (this.disabled) {
      return;
    }

    const { deltaX } = this.touch;
    this.touch.move(event);

    if (this.touch.isHorizontal()) {
      this.lockClick = true;
      this.dragging = true;

      const isEdge = !this.opened || deltaX * this.startOffset < 0;
      if (isEdge) {
        preventDefault(event, this.stopPropagation);
      }

      this.offset = range(deltaX + this.startOffset, -this.rightWidth, this.leftWidth);
    }
  };

  onTouchEnd = () => {
    if (this.dragging) {
      this.dragging = false;
      this.toggle(this.offset > 0 ? 'left' : 'right');

      // compatible with desktop scenario
      setTimeout(() => {
        this.lockClick = false;
      }, 0);
    }
  };

  onClick = (position: SwipeCellPosition = 'outside') => {
    this.click.emit(position);

    if (this.opened && !this.lockClick) {
      // callInterceptor({
      //   interceptor: this.beforeClose,
      //   args: [
      //     {
      //       name: this.name,
      //       position,
      //     },
      //   ],
      //   done: () => {
      //     this.close(position);
      //   },
      // });
    }
  };

  getClickHandler = (position: SwipeCellPosition, stop?: boolean) => (event: MouseEvent) => {
    if (stop) {
      event.stopPropagation();
    }
    this.onClick(position);
  };

  renderSideContent = (side, ref) => {
    const contentSlot = true;
    if (contentSlot) {
      return (
        <div ref={ref} class={classNames(bem([side]))} onClick={this.getClickHandler(side, true)}>
          {/* {contentSlot()} */}
        </div>
      );
    }
  };

  render() {
    const wrapperStyle = {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transitionDuration: this.dragging ? '0s' : '.6s',
    };
    return (
      <Host
        ref={dom => {
          this.root = dom;
        }}
        class="glue-swipe-cell"
        onClick={this.getClickHandler('cell')}
        onTouchstart={this.onTouchStart}
        onTouchmove={this.onTouchMove}
        onTouchend={this.onTouchEnd}
        onTouchcancel={this.onTouchEnd}
      >
        <div class="glue-swipe-cell__wrapper" style={wrapperStyle}>
          {this.renderSideContent('left', this.leftRef)}
          <slot></slot>
          {this.renderSideContent('right', this.rightRef)}
        </div>
      </Host>
    );
  }
}
