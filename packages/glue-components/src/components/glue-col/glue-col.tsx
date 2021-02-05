import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-col');
@Component({
  tag: 'glue-col',
  styleUrl: 'glue-col.less',
  shadow: false,
})
export class GlueCol {
  @Prop() offset = 0;

  @Prop() span = 0;
  style = () => {
    return {
      // paddingLeft: left ? `${left}px` : null,
      // paddingRight: right ? `${right}px` : null,
    };
  };
  render() {
    const { span, offset } = this;
    console.log(span, offset, 'offset');
    return (
      <Host style={this.style()} class={classNames('glue-col', bem([span, [`offset-${offset}`]]))}>
        <slot></slot>
      </Host>
    );
  }
}
