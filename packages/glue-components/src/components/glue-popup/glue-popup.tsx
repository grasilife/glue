import { Component, Prop, h } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-popup',
  styleUrl: 'glue-popup.less',
  shadow: false,
})
export class GluePopup {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
