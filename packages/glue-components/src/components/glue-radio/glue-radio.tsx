import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-radio',
  styleUrl: 'glue-radio.less',
  shadow: false,
})
export class GlueRadio {
  @Prop() name: null;
  @Prop() disabled: boolean;
  @Prop() iconSize: string | number;
  @Prop() modelValue: null;
  @Prop() checkedColor: string;
  @Prop() labelPosition: string;
  @Prop() labelDisabled: boolean;
  @Prop() shape = 'round';
  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm </div>;
  }
}
