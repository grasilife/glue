import { Component, Prop, h } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.less',
  shadow: false,
})
export class MyComponent {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
