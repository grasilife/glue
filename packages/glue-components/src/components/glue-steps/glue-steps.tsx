import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-steps');
@Component({
  tag: 'glue-steps',
  styleUrl: 'glue-steps.less',
  shadow: false,
})
export class GlueSteps {
  @Prop() finishIcon: string;

  @Prop() activeColor: string;

  @Prop() inactiveIcon: string;
  @Prop() inactiveColor: string;
  @Prop() active: string | number = 0;
  @Prop() direction = 'horizontal';
  @Prop() activeIcon = 'checked';
  @Event() clickStep: EventEmitter;
  onClickStep = (index: number) => {
    this.clickStep.emit(index);
  };

  render() {
    return (
      <div class={classNames(bem([this.direction]))}>
        <div class="glue-steps__items">
          <slot></slot>
        </div>
      </div>
    );
  }
}
