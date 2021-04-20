import { Component, Prop, h, Host, Event, EventEmitter, Element, Watch, Method } from '@stencil/core';
// import classNames from 'classnames';
import { useRect } from '../../utils/useRect';
import { useScrollParent } from '../../utils/useScrollParent';
import { isHidden } from '../../utils/dom/style';
@Component({
  tag: 'glue-list',
  styleUrl: 'glue-list.less',
  shadow: false,
})
export class GlueList {
  @Element() el: HTMLElement;
  @Prop() error: boolean;
  @Prop({ mutable: true }) loading;
  @Prop() finished: boolean;
  @Prop() errorText: string;
  @Prop() loadingText: string = '加载中...';
  @Prop() finishedText: string;
  @Prop() offset = 300;
  @Prop() direction = 'down';
  @Event() glueClickErrorText: EventEmitter;
  @Prop() immediateCheck = true;
  private root: HTMLElement;
  private placeholder: HTMLElement;
  @Watch('loading')
  loadingHandle() {
    this._check();
  }
  @Watch('finished')
  finishedHandle() {
    this._check();
  }
  @Watch('error')
  errorHandle() {
    this._check();
  }
  @Event() glueLoad: EventEmitter;
  @Method()
  async check() {
    this._check();
  }
  _check = () => {
    console.log(this.root, this.placeholder, 'ahgfyaufbabuf');
    if (this.loading || this.finished || this.error) {
      return;
    }
    const { offset, direction } = this;
    // let parentEl = getElementParent(this.el);
    let scrollParent = useScrollParent(this.el);
    const scrollParentRect = useRect(scrollParent);
    console.log(scrollParentRect, 'scrollParentRect');
    if (!scrollParentRect.height || isHidden(this.root)) {
      return false;
    }
    let isReachEdge = false;
    const placeholderRect = useRect(this.placeholder);
    console.log(scrollParentRect.top, placeholderRect.top, scrollParentRect.top - placeholderRect.top, '坐标');
    if (direction === 'up') {
      isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
    } else {
      isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset;
    }
    console.log(isReachEdge, 'isReachEdge');
    if (isReachEdge) {
      this.loading = true;
      this.glueLoad.emit();
    }
  };
  clickErrorTextHandle = () => {
    this.glueClickErrorText.emit(false);
    this._check();
  };
  renderErrorText = () => {
    if (this.error) {
      if (this.errorText == '#slot') {
        return <slot name="error-text"></slot>;
      }
      const text = this.errorText;
      if (text) {
        return (
          <div class="glue-list__error-text" onClick={this.clickErrorTextHandle}>
            {text}
          </div>
        );
      }
    }
  };

  renderLoading = () => {
    if (this.loading && !this.finished) {
      if (this.loadingText == '#slot') {
        return <slot name="loading-text"></slot>;
      }
      return (
        <div class="glue-list__loading">
          <glue-loading size={16}>{this.loadingText}</glue-loading>
        </div>
      );
    }
  };
  renderDirection = () => {
    if (this.direction === 'down') {
      return <slot></slot>;
    } else {
      return <div ref={dom => (this.placeholder = dom)} class="glue-list__placeholder" />;
    }
  };
  renderFinishedText = () => {
    if (this.finished) {
      if (this.finishedText == '#slot') {
        return <slot name="finished-text"></slot>;
      }
      const text = this.finishedText;
      if (text) {
        return <div class="glue-list__finished-text">{text}</div>;
      }
    }
  };
  componentDidLoad() {
    let scrollParent = useScrollParent(this.el);
    scrollParent.addEventListener('scroll', this._check);
    if (this.immediateCheck) {
      this._check();
    }
  }
  disconnectedCallback() {
    let scrollParent = useScrollParent(this.el);
    scrollParent.removeEventListener('scroll', this._check);
  }
  render() {
    const Content = <slot></slot>;
    const Placeholder = <div ref={dom => (this.placeholder = dom)} class="glue-list__placeholder" />;
    return (
      <Host ref={dom => (this.root = dom)} role="feed" class="glue-list" aria-busy={this.loading}>
        {this.direction === 'down' ? Content : Placeholder}
        {this.renderLoading()}
        {this.renderFinishedText()}
        {this.renderErrorText()}
        {this.direction === 'up' ? Content : Placeholder}
      </Host>
    );
  }
}
