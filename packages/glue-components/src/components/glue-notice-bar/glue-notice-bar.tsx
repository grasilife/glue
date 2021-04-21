import { Component, Prop, h, Host, State, Event, EventEmitter, Watch } from '@stencil/core';
export type NoticeBarMode = 'closeable' | 'link';
import classNames from 'classnames';
import { useRect } from '../../utils/useRect';
import { EASING } from '../../global/constant/constant';
import anime from 'animejs/lib/anime.es.js';
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
  @Prop() rightIcon: string;
  @Prop() wrapable = false;
  @Prop() background: string;
  @Prop() scrollable = false;
  @Prop() delay = 1;
  @Prop() speed = 80;
  @State() state = {
    show: true,
    offset: 0,
    duration: 0,
  };
  @State() wrapWidth = 0;
  @State() contentWidth = 0;
  @State() startTimer = null;
  @Event() glueClose: EventEmitter;
  @Event() glueReplay: EventEmitter;
  wrapRef: HTMLElement;
  contentRef: HTMLElement;
  @Watch('text')
  textStartHandle() {
    this.start();
  }
  @Watch('scrollable')
  scrollableStartHandle() {
    this.start();
  }
  renderLeftIcon = () => {
    if (this.leftIcon) {
      if (this.leftIcon == '#slot') {
        return <slot name="left-icon"></slot>;
      } else {
        return <glue-icon class="glue-notice-bar__left-icon" name={this.leftIcon} />;
      }
    }
  };
  renderMarquee = () => {
    const ellipsis = this.scrollable === false && !this.wrapable;
    console.log(ellipsis, 'ellipsis');
    return (
      <div ref={el => (this.wrapRef = el)} role="marquee" class="glue-notice-bar__wrap">
        <div
          ref={el => (this.contentRef = el)}
          class={classNames('glue-notice-bar__content', {
            'glue-ellipsis': ellipsis,
          })}
        >
          {this.text}
        </div>
      </div>
    );
  };
  reset = () => {
    this.wrapWidth = 0;
    this.contentWidth = 0;
    this.state.offset = 0;
    this.state.duration = 0;
  };

  start = () => {
    if (this.scrollable) {
      console.log(this.contentRef, 'this.contentRef');
      const wrapRefWidth = useRect(this.wrapRef).width;
      const contentRefWidth = useRect(this.contentRef).width;
      //长度除以速度等于时间
      console.log(wrapRefWidth, contentRefWidth, 'spenhg');
      anime({
        targets: this.contentRef,
        easing: EASING,
        translateX: [
          {
            duration: (contentRefWidth / this.speed) * 1000,
            value: -contentRefWidth,
          },
          {
            duration: 0,
            value: wrapRefWidth,
          },
          {
            duration: (wrapRefWidth / this.speed) * 1000,
            value: 0,
          },
        ],
        begin: () => {},
        complete: anim => {
          this.glueReplay.emit();
          anim.restart();
        },
      });
    }
  };
  componentDidLoad() {
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
      this.glueClose.emit(event);
    }
  };
  renderRightIcon = () => {
    if (this.rightIcon == '#slot') {
      return <slot name="right-icon"></slot>;
    }
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
          'glue-notice-bar--wrapable': wrapable,
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
