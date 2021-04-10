import { Component, Prop, h, Host, Event, EventEmitter, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { CellArrowDirection } from '../glue-cell/glue-cell-interface';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-collapse-item',
  styleUrl: 'glue-collapse-item.less',
  shadow: false,
})
export class GlueCollapseItem {
  @Element() el: HTMLElement;
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() title: string;
  @Prop() value: string | number;
  @Prop() label: string | number;
  @Prop() center: boolean;
  @Prop() isLink: boolean;
  @Prop() required: boolean;
  @Prop() clickable: boolean;
  @Prop() iconPrefix: string;
  @Prop() titleStyle = null;
  @Prop() titleClass = null;
  @Prop() valueClass = null;
  @Prop() tilabelClasstle = null;
  @Prop() arrowDirection: CellArrowDirection;
  @Prop() border = true;
  @Prop() name: string;

  @Prop() disabled: boolean;
  @State() show = false;
  @Event() clickTitle: EventEmitter;
  clickTitleHandle = () => {
    if (!this.disabled) {
      this.toggle();
    }
  };
  private wrapperRef: HTMLElement;
  private contentRef: HTMLElement;

  onTransitionEnd = () => {
    if (!this.expanded()) {
      this.show = false;
    } else {
      this.wrapperRef!.style.height = '';
    }
  };
  expanded = () => {
    let parentEl = getElementParent(this.el);
    console.log(parentEl, 'parentEl');
    console.log(parentEl.isExpanded(this.name), 'expanded');
    return parentEl.isExpanded(this.name);
  };
  toggle = () => {
    let parentEl = getElementParent(this.el);
    console.log(parentEl, 'parentEl');
    parentEl.toggle(this.name, this.expanded());
  };
  getParentGutter() {
    let parentEl = getElementParent(this.el);
    let gutter = getAttribute(parentEl, 'gutter');
    console.log(gutter, 'gutter');
    return gutter;
  }
  renderTitle = () => {
    const { border, disabled, title, isLink } = this;
    console.log(this.title, 'ahuhafuhfui');
    return (
      <glue-cell
        role="button"
        class={classNames({
          'glue-collapse-item__title': true,
          'glue-collapse-item--disabled': disabled,
          'glue-collapse-item--expanded': this.expanded,
          'glue-collapse-item--borderless': border,
        })}
        tabindex={disabled ? -1 : 0}
        aria-expanded={String(this.expanded())}
        onClick={this.clickTitleHandle}
        title={title}
        is-link={isLink}
      ></glue-cell>
    );
  };

  renderContent = () => (
    <div
      ref={dom => (this.wrapperRef = dom)}
      class={classNames({
        'glue-collapse-item__wrapper': true,
      })}
      onTransitionEnd={this.onTransitionEnd}
      style={{ display: this.show ? 'block' : 'none' }}
    >
      <div
        ref={dom => (this.contentRef = dom)}
        class={classNames({
          'glue-collapse-item__content': true,
        })}
      >
        <slot></slot>
      </div>
    </div>
  );
  render() {
    console.log(this.contentRef);
    return (
      <Host
        class={classNames('glue-collapse-item', {
          'glue-collapse-item--border': this.border,
        })}
      >
        {this.renderTitle()}
        {this.renderContent()}
      </Host>
    );
  }
}
