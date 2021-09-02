import {
  Component,
  Prop,
  h,
  Host,
  Method,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';
import classNames from 'classnames';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { isDef } from '../../utils/base';
// import { callInterceptor } from '../../utils/interceptor';
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-tabbar',
  styleUrl: 'glue-tabbar.less',
  shadow: false,
})
export class GlueTabbar {
  @Element() el!: HTMLGlueTabbarElement;
  @Prop() zIndex: string;
  @Prop() placeholder: boolean;
  @Prop({ reflect: true }) activeColor: string;
  @Prop() beforeChange: any;
  @Prop({ reflect: true }) inactiveColor: string;
  @Prop({ mutable: true, reflect: true }) modelValue: any;
  @Prop() border = false;
  @Prop() fixed = false;
  @Prop() safeAreaInsetBottom: boolean;
  @Event() glueChange: EventEmitter;
  root;
  isUnfit = () => {
    if (isDef(this.safeAreaInsetBottom)) {
      return !this.safeAreaInsetBottom;
    }
    // enable safe-area-inset-bottom by default when fixed
    return !this.fixed;
  };

  renderTabbar = () => {
    const { fixed, zIndex, border } = this;

    const unfit = this.isUnfit();
    console.log(fixed, unfit, border, BORDER_TOP_BOTTOM, 'fixed');
    return (
      <div
        ref={(dom) => {
          this.root = dom;
        }}
        style={{ zIndex: zIndex }}
        class={classNames({
          'glue-tabbar--fixed': fixed,
          'glue-tabbar--unfit': unfit,
          [BORDER_TOP_BOTTOM]: border,
        })}
      >
        <slot></slot>
      </div>
    );
  };

  @Method()
  async setActive(active) {
    this.modelValue = active;
    console.log(active, 'activeactive');
    this.glueChange.emit(active);
    let children = getElementChildren(this.el);
    for (let i = 0; i < children.length; i++) {
      console.log(children[i], this.modelValue, 'children[i]');
      children[i].setActive(this.modelValue);
    }
  }

  @Method()
  async getActive() {
    return this.modelValue;
  }
  render() {
    const { fixed, zIndex, border } = this;

    const unfit = this.isUnfit();
    return (
      <Host
        ref={(dom) => {
          this.root = dom;
        }}
        style={{ zIndex: zIndex }}
        class={classNames('glue-tabbar', {
          'glue-tabbar--fixed': fixed,
          'glue-tabbar--unfit': unfit,
          [BORDER_TOP_BOTTOM]: border,
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
