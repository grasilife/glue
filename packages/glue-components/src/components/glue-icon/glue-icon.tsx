import { Component, Prop, h } from '@stencil/core';
// const [bem] = createNamespace('button');
@Component({
  tag: 'glue-icon',
  styleUrl: 'glue-icon.less',
  shadow: false,
})
export class GlueIcon {
  @Prop() dot: boolean;

  @Prop() name: string;

  @Prop() size: number | string;
  @Prop() badge: number | string;
  @Prop() color: string;
  @Prop() tag: string;
  @Prop() classPrefix: string;

  render() {
    return <div>Hello, World! I'm </div>;
  }
}
