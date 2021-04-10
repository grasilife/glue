import { Component, Prop, h, Host, Method } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-collapse');
@Component({
  tag: 'glue-collapse',
  styleUrl: 'glue-collapse.less',
  shadow: false,
})
export class GlueCollapse {
  @Prop({
    reflect: true,
  })
  //手风琴模式
  accordion: boolean;

  @Prop({
    reflect: true,
  })
  modelValue = [];

  @Prop({
    reflect: true,
  })
  border = false;
  @Method()
  async toggle(name, expanded) {
    const { accordion, modelValue } = this;

    if (accordion) {
      if (name === modelValue) {
        name = '';
      }
    } else if (expanded) {
      name = modelValue.concat(name);
    } else {
      name = modelValue.filter(activeName => activeName !== name);
    }
    console.log(name, 'change');
    // emit('change', name);
    // emit('update:modelValue', name);
  }
  @Method()
  async isExpanded(name) {
    const { accordion, modelValue } = this;

    if (!accordion && !Array.isArray(modelValue) && process.env.NODE_ENV !== 'production') {
      console.error('[Vant] Collapse: type of prop "modelValue" should be Array');
      return;
    }

    return accordion ? modelValue === name : modelValue.indexOf(name) !== -1;
  }
  render() {
    return (
      <Host class={classNames('glue-collapse', BORDER_TOP_BOTTOM, bem([this.border]))}>
        <slot></slot>
      </Host>
    );
  }
}
