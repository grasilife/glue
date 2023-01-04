import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Element,
  Watch,
  State,
  Method
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
  @Prop({ reflect: true }) modelValue: any;
  @Prop() border = false;
  @Prop() fixed = false;
  @State() children;
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
  @Watch('modelValue')
  watchModelValue() {
    this.children = getElementChildren(this.el);
    console.log(this.children, 'this.children');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      let name = element.name;
      //只能使用方法设置state
      console.log(element, name, 'namenamename');
      if (name) {
        if (this.modelValue === name) {
          console.log(element.setValue, 'element.setValue');
          element.setValue('selected', true);

        } else {
          element.setValue('selected', false);
        }
      } else {
        console.log(this.modelValue, i, 'jigjiajigjia');
        if (this.modelValue === i) {
          console.log(element.setValue, 'element.setValue');
          element.setValue('selected', true);
          element.setValue('index', i);
        } else {
          element.setValue('selected', false);
          element.setValue('index', i);
        }
      }

    }
  }
  @Method()
  async setValue(key, value) {
    console.log(key, value, 'hhijioa');
    this[key] = value;
  }
  componentWillLoad() {
    this.watchModelValue();
  }
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
