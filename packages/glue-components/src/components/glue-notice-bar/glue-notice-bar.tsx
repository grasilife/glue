import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import { isDef } from '../../utils/base';
import { doubleRaf, raf } from '../../utils/dom/raf';
export type NoticeBarMode = 'closeable' | 'link';
import classNames from 'classnames';
@Component({
  tag: 'glue-notice-bar',
  styleUrl: 'glue-notice-bar.less',
  shadow: false,
})
export class GlueNoticeBar {
  @Prop() text: string;

  @Prop() mode: NoticeBarMode;

  @Prop() color: string;
  @Prop() leftIcon: string;
  @Prop() wrapable: string;
  @Prop() background: string;
  @Prop() scrollable = null;
  @Prop() delay = 1;
  @Prop() speed = 50;
  @State() state = {
    show: true,
    offset: 0,
    duration: 0,
  };
  @State() wrapWidth = 0;
  @State() contentWidth = 0;
  @State() startTimer = null;
  // @Event() onClickRightIcon: EventEmitter;
  @Event() close: EventEmitter;
  @Event() replay: EventEmitter;
  wrapRef: HTMLElement;
  contentRef: HTMLElement;
  renderLeftIcon = () => {
    if (this.leftIcon) {
      return <glue-icon class="glue-notice-bar__left-icon" name={this.leftIcon} />;
    }
  };
  renderMarquee = () => {
    const ellipsis = this.scrollable === false && !this.wrapable;
    const style = {
      transform: this.state.offset ? `translateX(${this.state.offset}px)` : '',
      transitionDuration: `${this.state.duration}s`,
    };
    console.log(style, 'style');
    return (
      <div ref={el => (this.wrapRef = el)} role="marquee" class="glue-notice-bar__wrap">
        <div
          ref={el => (this.contentRef = el)}
          style={style}
          class={classNames('glue-notice-bar__content', {
            'glue-notice-bar__van-ellipsis': ellipsis,
          })}
          onTransitionEnd={this.onTransitionEnd}
        >
          {this.text}
        </div>
      </div>
    );
  };
  onTransitionEnd = () => {
    //TODO:动画有问题
    this.state.offset = 0;
    this.state.duration = 0;

    // wait for Vue to render offset
    // using nextTick won't work in iOS14
    raf(() => {
      // use double raf to ensure animation can start
      doubleRaf(() => {
        this.state.offset = -this.contentWidth;
        this.state.duration = (this.contentWidth + this.wrapWidth) / +this.speed;
        this.replay.emit('replay');
      });
    });
  };
  reset = () => {
    this.wrapWidth = 0;
    this.contentWidth = 0;
    this.state.offset = 0;
    this.state.duration = 0;
  };

  start = () => {
    console.log(this.wrapRef, 'wrapRef');
    const { delay, speed, scrollable } = this;
    const ms = isDef(delay) ? +delay * 1000 : 0;

    this.reset();

    clearTimeout(this.startTimer);
    this.startTimer = setTimeout(() => {
      if (!this.wrapRef || !this.contentRef || scrollable === false) {
        return;
      }

      const wrapRefWidth = this.wrapRef.offsetWidth;
      const contentRefWidth = this.contentRef.offsetWidth;

      if (scrollable || contentRefWidth > wrapRefWidth) {
        this.wrapWidth = wrapRefWidth;
        this.contentWidth = contentRefWidth;
        this.state.offset = -this.contentWidth;
        this.state.duration = this.contentWidth / +speed;
      }
    }, ms);
  };
  componentDidLoad() {
    console.log(this.wrapRef.offsetHeight, 'wrapRef');
    this.start();
  }
  getRightIconName = () => {
    if (this.mode === 'closeable') {
      return 'cross';
    }
    if (this.mode === 'link') {
      return 'arrow';
    }
  };
  onClickRightIconHandle = (event: MouseEvent) => {
    if (this.mode === 'closeable') {
      this.state.show = false;
      this.close.emit(event);
    }
  };
  renderRightIcon = () => {
    const name = this.getRightIconName();
    if (name) {
      return <glue-icon name={name} class="glue-notice-bar__right-icon" onClick={this.onClickRightIconHandle} />;
    }
  };
  render() {
    const { color, wrapable, background } = this;
    return (
      <Host
        hidden={this.state.show}
        role="alert"
        class={classNames('glue-notice-bar', {
          'glue-notice-bar__wrapable': wrapable,
        })}
        style={{ color, background }}
      >
        {this.renderLeftIcon()}
        {this.renderMarquee()}
        {this.renderRightIcon()}
      </Host>
    );
  }
}
