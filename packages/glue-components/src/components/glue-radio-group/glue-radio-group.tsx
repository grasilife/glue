import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-radio-group',
  styleUrl: 'glue-radio-group.less',
  shadow: false,
})
export class GlueRadioGroup {
  @Prop() disabled: boolean;

  @Prop() iconSize: string | number;
  @Prop() direction: string;
  @Prop() modelValue = null;
  @Prop() checkedColor: string;
  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm </div>;
  }
}
