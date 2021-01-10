import { Component, Prop, h } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
