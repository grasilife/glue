import { Component, Prop, h, Host } from '@stencil/core';
// import { parseFormat } from './utils';
// import classNames from 'classnames';
@Component({
  tag: 'glue-count-down',
  styleUrl: 'glue-count-down.less',
  shadow: false,
})
export class GlueCountDown {
  @Prop() millisecond: boolean;

  @Prop() time = 0;
  @Prop() format = 'HH:mm:ss';
  @Prop() autoStart = true;
  // timeText = () => parseFormat(this.format, current.value);
  render() {
    return (
      <Host class="glue-count-down">
        <slot></slot>
      </Host>
    );
  }
}
