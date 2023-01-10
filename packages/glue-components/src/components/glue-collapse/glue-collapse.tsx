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
  modelValue: any = [];

  @Prop({
    reflect: true,
  })
  border = false;

  @Method()
  async toggle(name, expanded) {
    console.log(name, expanded, 'toggle');
    const { accordion, modelValue } = this;

    // if (accordion) {
    //   if (name === modelValue) {
    //     name = '';
    //   }
    // } else if (expanded) {
    //   name = modelValue.concat(name);
    // } else {
    //   name = modelValue.filter(activeName => activeName !== name);
    // }
    console.log(this.accordion, !expanded, 'fhiahufhuiai');
    if (accordion) {
      //只展开一个
      if (!expanded) {
        //展开
        name = modelValue.filter((activeName) => activeName === name);
      } else {
        //关闭
        name = '';
      }
    } else {
      if (!expanded) {
        //展开
        modelValue.push(name);
      } else {
        //关闭
        let i = modelValue.length;
        //删除掉传过来的值
        while (i--) {
          if (modelValue[i] === name) {
            modelValue.splice(i, 1);
          }
        }
      }
    }
    console.log(name, modelValue, 'change');
    // emit('change', name);
    // emit('update:modelValue', name);
  }

  @Method()
  async isExpanded(name) {
    const { accordion, modelValue } = this;

    if (
      !accordion &&
      !Array.isArray(modelValue) &&
      process.env.NODE_ENV !== 'production'
    ) {
      console.error(
        '[Vant] Collapse: type of prop "modelValue" should be Array'
      );
      return;
    }
    console.log(modelValue, name, modelValue.indexOf(name), 'isExpanded');
    return accordion ? modelValue === name : modelValue.indexOf(name) !== -1;
  }
  render() {
    return (
      <Host
        class={classNames(
          'glue-collapse',
          BORDER_TOP_BOTTOM,
          bem([this.border])
        )}
      >
        <slot></slot>
      </Host>
    );
  }
}
