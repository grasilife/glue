import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Element,
  Method,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { CellArrowDirection } from '../glue-cell/glue-cell-interface';
import { getElementParent } from '../../utils/base';
@Component({
  tag: 'glue-collapse-item',
  styleUrl: 'glue-collapse-item.less',
  shadow: false,
})
export class GlueCollapseItem {
  @Element() el: HTMLGlueCollapseItemElement;
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() gtitle: string;
  @Prop() value: string | number;
  @Prop() label: string | number;
  @Prop() center: boolean;
  @Prop() isLink: boolean = true;
  @Prop() required: boolean;
  @Prop() clickable: boolean;
  @Prop() iconPrefix: string;
  @Prop() titleStyle = null;
  @Prop() titleClass = null;
  @Prop() valueClass = null;
  @Prop() tilabelClasstle = null;
  @Prop({ mutable: true }) arrowDirection: CellArrowDirection = 'down';
  @Prop() border: boolean = true;
  @Prop() name: string | number;

  @Prop() disabled: boolean;
  @State() show = false;
  @Event() clickTitle: EventEmitter;
  @Watch('show')
  watchShow() {
    this.arrowDirection = this.show ? 'up' : 'down';
  }
  private clickTitleHandle = () => {
    console.log('22121212121');
    if (!this.disabled) {
      this.toggle();
    }
  };
  private wrapperRef: HTMLElement;
  private contentRef: HTMLElement;

  private onTransitionEnd = () => {
    if (!this.expanded()) {
      this.show = false;
    } else {
      this.wrapperRef!.style.height = '';
    }
  };
  private async expanded() {
    let parentEl = getElementParent(this.el);
    const isExpanded = await parentEl.isExpanded(this.name);
    return isExpanded;
  }
  private toggle = () => {
    //先传递到父组件
    let parentEl = getElementParent(this.el);
    console.log(parentEl, 'parentEl');

    parentEl.isExpanded(this.name).then((expanded) => {
      parentEl.toggle(this.name, expanded);
      console.log(this.name, expanded, 'this.show33');
    });
  };
  @Method()
  async setValue(key: any, value: any) {
    this[key] = value;
  }
  renderTitle = () => {
    const { border, disabled, gtitle, isLink } = this;
    console.log(this.gtitle, 'ahuhafuhfui');
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
        gtitle={gtitle}
        isLink={isLink}
        arrow-direction={this.arrowDirection}
      ></glue-cell>
    );
  };

  renderContent = () => (
    <div
      ref={(dom) => (this.wrapperRef = dom)}
      class={classNames({
        'glue-collapse-item__wrapper': true,
      })}
      onTransitionEnd={this.onTransitionEnd}
      style={{ display: this.show ? 'block' : 'none' }}
    >
      <div
        ref={(dom) => (this.contentRef = dom)}
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
    console.log(parentEl, 'parentEl');
    const expanded = await parentEl.isExpanded(this.name);
    console.log(expanded, this.name, 'expanded');
    this.show = expanded;
    console.log(this.show, 'this.show');
  }

  // componentWillLoad() {
  //   let parentEl = getElementParent(this.el);
  //   this.parentModelValue = parentEl.modelValue;
  // }
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
