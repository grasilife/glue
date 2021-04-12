import { Component, Prop, h, Host, Event, EventEmitter, State, Element, Listen, Watch } from '@stencil/core';
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
  @Prop() arrowDirection: CellArrowDirection = 'down';
  @Prop() border = true;
  @Prop() name: string;

  @Prop() disabled: boolean;
  @State() show = false;
  @State() parentModelValue;
  @Watch('parentModelValue')
  parentModelValuehandle(newValue) {
    console.log(newValue, 'newValue');
  }
  @Listen('glueToggle')
  handleScroll(ev) {
    console.log('the body was scrolled', ev);
  }
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
  async expanded() {
    let parentEl = getElementParent(this.el);
    const isExpanded = await parentEl.isExpanded(this.name);
    return isExpanded;
  }
  toggle = () => {
    // this.show = !this.show;
    // this.arrowDirection = this.show ? 'up' : 'down';
    // console.log(this.show, 'this.show');
    //先传递到父组件
    let parentEl = getElementParent(this.el);
    console.log(parentEl, 'parentEl');

    parentEl.isExpanded(this.name).then(expanded => {
      // this.show = expanded;
      parentEl.toggle(this.name, expanded);
      console.log(this.show, 'this.show33');
    });
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
        arrow-direction={this.arrowDirection}
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
  async componentDidLoad() {
    let parentEl = getElementParent(this.el);
    const expanded = await parentEl.isExpanded(this.name);
    this.show = expanded;
    console.log(this.show, 'this.show');
  }
  async componentShouldUpdate() {
    // console.log();
    // let parentEl = getElementParent(this.el);
    // const expanded = await parentEl.isExpanded(this.name);
    // this.show = expanded;
    // console.log(this.show, 'this.show2');
  }
  componentWillLoad() {
    let parentEl = getElementParent(this.el);
    this.parentModelValue = parentEl.modelValue;
  }
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
