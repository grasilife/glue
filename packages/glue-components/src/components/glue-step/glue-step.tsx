import { Component, Prop, h, Host, Event, EventEmitter, Element } from '@stencil/core';
// import { BORDER } from '../../global/constant/constant';
//TODO:如何获取父元素prop
import classNames from 'classnames';
@Component({
  tag: 'glue-step',
  styleUrl: 'glue-step.less',
  shadow: false,
})
export class GlueStep {
  @Element() el: HTMLElement;
  @Prop() first = 1;

  @Prop() middle: string;

  @Prop() last: string;
  @Event() clickStep: EventEmitter;
  getStatus = () => {
    // const el = this.el;
    // const parent = el.parentNode as any;
    // const active = +parent.active;
    // if (index.value < active) {
    //   return 'finish';
    // }
    // return index.value === active ? 'process' : 'waiting';
    return 'process';
  };

  isActive = () => this.getStatus() === 'process';

  lineStyle = () => ({
    // background: this.getStatus() === 'finish' ? this.el.parentNode.activeColor : parentProps.inactiveColor,
    background: 'red',
  });

  titleStyle = () => {
    if (this.isActive()) {
      // return { color: this.parentProps.activeColor };
      return { color: 'red' };
    }
    if (!this.getStatus()) {
      // return { color: parentProps.inactiveColor };
      return { color: 'red' };
    }
  };

  onClickStep = () => {
    // parent.onClickStep(index.value);
  };

  renderCircle = () => {
    console.log(this, this.el.getAttribute('first'), 'hauhauhuah');
    // const { finishIcon, activeIcon, activeColor, inactiveIcon } = parentProps;

    // if (this.isActive()) {
    //   return <glue-icon class="glue-step__icon glue-step__active" name={activeIcon} color={activeColor} />;
    // }

    // if (this.getStatus() === 'finish' && finishIcon) {
    //   return <glue-icon class="glue-step__icon glue-step__finish" name={finishIcon} color={activeColor} />;
    // }

    // if (inactiveIcon) {
    //   return <glue-icon class="glue-step__icon" name={inactiveIcon} />;
    // }

    return <i class="glue-step__circle" style={this.lineStyle()} />;
  };
  render() {
    console.log(this, this.el, 'hauhauhuah');
    return (
      <Host>
        <div
          class={classNames('glue-step__title', {
            'glue-step__active': this.isActive(),
          })}
          style={this.lineStyle()}
          onClick={this.onClickStep}
        >
          <slot></slot>
        </div>
        <div class="glue-step__circle-container" onClick={this.onClickStep}>
          {this.renderCircle()}
        </div>
        <div class="glue-step__line" style={this.lineStyle()} />
      </Host>
    );
  }
}
