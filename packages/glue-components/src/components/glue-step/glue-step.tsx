import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  Element,
  Method,
  State,
} from '@stencil/core';
// import { BORDER } from '../../global/constant/constant';
import classNames from 'classnames';
import { getElementParent } from '../../utils/base';
@Component({
  tag: 'glue-step',
  styleUrl: 'glue-step.less',
  shadow: false,
})
export class GlueStep {
  @Element() el: HTMLGlueStepElement;
  @Prop() first = 1;

  @Prop() middle: string;

  @Prop() last: string;
  @State() direction;
  @Event() clickStep: EventEmitter;
  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  @Method()
  async getParentValue() {
    let parent = getElementParent(this.el, 'GLUE-STEPS');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-STEPS') {
      this.direction = parent.direction;
    }
    console.log(this.direction, 'this.direction');
  }
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
  componentDidLoad() {
    this.getParentValue();
  }
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
