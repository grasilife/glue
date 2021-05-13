import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import '@vant/touch-emulator';
import { UseTouch } from '../../utils/composables/use-touch';
import { range } from '../../utils/format/number';
import { preventDefault } from '../../utils/dom/event';
import { isDef } from '../../utils/base';
export type SwipeCellSide = 'left' | 'right';
export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside';
import { useRect } from '../../utils/useRect';
let touch = new UseTouch();
@Component({
  tag: 'glue-swipe-cell',
  styleUrl: 'glue-swipe-cell.less',
  shadow: false,
})
export class GlueSwipeCell {
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) leftWidth: number;
  @Prop({ mutable: true }) rightWidth: number;
  @Prop() beforeClose;
  @Prop() stopPropagation: boolean;
  @Prop() name = '';
  @Prop() left = '';
  @Prop() right = '';
  @State() offset: any = 0;
  @State() dragging = false;
  @State() opened: boolean;
  @State() lockClick: boolean;
  @State() startOffset: number;
  @Event() glueOpenChange: EventEmitter;
  @Event() glueCloseChange: EventEmitter;
  @Event() click: EventEmitter;
  root: HTMLElement;
  leftRef: HTMLElement;
  rightRef: HTMLElement;

  getWidthByRef = ref => (ref ? useRect(ref).width : 0);
  componentDidLoad() {
    console.log(touch, 'touch');
    this.leftWidth = isDef(this.leftWidth) ? +this.leftWidth : this.getWidthByRef(this.leftRef);
    this.rightWidth = isDef(this.rightWidth) ? +this.rightWidth : this.getWidthByRef(this.rightRef);
    console.log(this.leftWidth, this.rightWidth, useRect(this.leftRef), 'agjhiauhuahu');
  }

  open = (side: SwipeCellSide) => {
    this.opened = true;
    this.offset = side === 'left' ? this.leftWidth : -this.rightWidth;
    this.glueOpenChange.emit({
      name: this.name,
      position: side,
    });
  };

  close = (position: SwipeCellPosition) => {
    this.offset = 0;
    if (this.opened) {
      this.opened = false;
      this.glueCloseChange.emit({
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
      console.log(this.startOffset, 'this.startOffset');
      touch.start(event);
    }
  };

  onTouchMove = (event: TouchEvent) => {
    if (this.disabled) {
      return;
    }
    touch.move(event);
    const { deltaX } = touch;
    console.log(deltaX, 'deltaX11');
    if (touch.isHorizontal()) {
      this.lockClick = true;
      this.dragging = true;

      const isEdge = !this.opened || deltaX * this.startOffset < 0;
      if (isEdge) {
        preventDefault(event, this.stopPropagation);
      }

      this.offset = range(deltaX + this.startOffset, -this.rightWidth, this.leftWidth);
      console.log(this.offset, deltaX, this.startOffset, -this.rightWidth, this.leftWidth, 'this.offset');
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
    console.log(position, 'position');
    // this.click.emit(position);
    if (this.opened && !this.lockClick) {
      this.close(position);
      //这里的异步关闭没理解干嘛的
    }
  };

  getClickHandler = (position: SwipeCellPosition, stop?: boolean) => (event: MouseEvent) => {
    if (stop) {
      event.stopPropagation();
    }
    this.onClick(position);
  };
  renderSideContentLeft = () => {
    if (this.left == '#slot') {
      return (
        <div
          class={classNames('glue-swipe-cell__left')}
          onClick={this.getClickHandler('left', true)}
          ref={dom => {
            this.leftRef = dom;
          }}
        >
          <slot name="left"></slot>
        </div>
      );
    }
  };
  renderSideContentRight = () => {
    return (
      <div
        class={classNames('glue-swipe-cell__right')}
        onClick={this.getClickHandler('right', true)}
        ref={dom => {
          this.rightRef = dom;
        }}
      >
        <slot name="right"></slot>
      </div>
    );
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
          {this.renderSideContentLeft()}
          <slot></slot>
          {this.renderSideContentRight()}
        </div>
      </Host>
    );
  }
}
