import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-tabs',
  styleUrl: 'glue-tabs.less',
  shadow: false,
})
export class GlueTabs {
  @Prop() first: string;
  @Prop() color: string;
  @Prop() border: boolean;
  @Prop() sticky: boolean;
  @Prop() animated: boolean;
  @Prop() swipeable: boolean;
  @Prop() scrollspy: boolean;
  @Prop() background: string;
  @Prop() lineWidth: string | number;
  @Prop() lineHeight: string | number;
  @Prop() beforeChange: any;
  @Prop() titleActiveColor: string;
  @Prop() titleInactiveColor: string;
  @Prop() type = 'line';
  @Prop() active = 0;
  @Prop() ellipsis = true;
  @Prop() duration = 0.3;
  @Prop() offsetTopValue = 0;
  @Prop() lazyRender = true;
  @Prop() swipeThreshold = 5;

  render() {
    return <div class={classNames('cunstom')}>Hello, World! I'm {this.first}</div>;
  }
}
