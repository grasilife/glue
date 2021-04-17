import { Component, Prop, h, Host, Event, EventEmitter, Element } from '@stencil/core';
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
  @Prop() loadingText: string;
  @Prop() finishedText: string;
  @Prop() offset = 300;
  @Prop() direction = 'down';
  @Event() clickErrorText: EventEmitter;
  @Prop()
  immediateCheck = true;
  private root: HTMLElement;
  private placeholder: HTMLElement;
  check = () => {
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
      // emit('update:loading', true);
      // emit('load');
    }
  };
  clickErrorTextHandle = () => {
    this.clickErrorText.emit(false);
    this.check();
  };
  renderErrorText = () => {
    if (this.error) {
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
      const text = this.finishedText;
      if (text) {
        return <div class="glue-list__finished-text">{text}</div>;
      }
    }
  };
  componentDidLoad() {
    let scrollParent = useScrollParent(this.el);
    scrollParent.addEventListener('scroll', this.check);
  }
  disconnectedCallback() {
    let scrollParent = useScrollParent(this.el);
    scrollParent.removeEventListener('scroll', this.check);
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
