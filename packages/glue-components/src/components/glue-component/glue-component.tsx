import { Component, Prop, h } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-component',
  styleUrl: 'glue-component.less',
  shadow: false,
})
export class GlueComponent {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
