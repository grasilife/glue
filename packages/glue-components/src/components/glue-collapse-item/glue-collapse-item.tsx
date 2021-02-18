import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-collapse-item',
  styleUrl: 'glue-collapse-item.less',
  shadow: false,
})
export class GlueCollapseItem {
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
  @Prop() arrowDirection: string;
  @Prop() border = true;
  @Prop() name: string;

  @Prop() disabled: boolean;
  @Event() clickTitle: EventEmitter;
  clickTitleHandle = event => {
    if (!this.disabled) {
      this.toggle();
    }
  };
  private wrapperRef: HTMLElement;
  private contentRef: HTMLElement;

  currentName = () => this.name;
  expanded = () => '';
  // show = ref(expanded.value);
  onTransitionEnd = () => {
    if (!this.expanded()) {
      // show.value = false;
    } else {
      this.wrapperRef!.style.height = '';
    }
  };
  toggle = () => {
    // parent.toggle(currentName.value, value);
  };
  renderTitle = () => {
    const { border, disabled } = this;

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
        title="1111"
        {...this}
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
