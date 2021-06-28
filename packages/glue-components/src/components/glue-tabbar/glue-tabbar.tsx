import { Component, Prop, h, Host, Method, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { isDef } from '../../utils/base';
import { callInterceptor } from '../../utils/interceptor';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-tabbar');
@Component({
  tag: 'glue-tabbar',
  styleUrl: 'glue-tabbar.less',
  shadow: false,
})
export class GlueTabbar {
  @Prop() first: string;
  @Prop() zIndex: string;
  @Prop() placeholder: boolean;
  @Prop() activeColor: string;
  @Prop() beforeChange: any;
  @Prop() inactiveColor: string;
  @Prop({ mutable: true }) modelValue = 0;
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
    return (
      <div
        ref={dom => {
          this.root = dom;
        }}
        style={{ zIndex: zIndex }}
        class={
          (classNames(bem([unfit, fixed])),
          {
            [BORDER_TOP_BOTTOM]: border,
          })
        }
      >
        <slot></slot>
      </div>
    );
  };

  @Method()
  async setActive(active) {
    let _this = this;
    if (active !== this.modelValue) {
      callInterceptor({
        interceptor: this.beforeChange,
        args: [active],
        done() {
          _this.modelValue = active;
          _this.glueChange.emit(active);
        },
      });
    }
  }
  render() {
    return <Host class={classNames('cunstom')}>{this.renderTabbar()}</Host>;
  }
}
