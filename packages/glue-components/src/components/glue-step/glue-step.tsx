import { Component, Prop, h, Host, Event, EventEmitter, Element, Method, State } from '@stencil/core';
import { createNamespace } from '../../utils/create/index';
import { BORDER } from '../../global/constant/constant';
import classNames from 'classnames';
import { getElementParent } from '../../utils/base';
const [bem] = createNamespace('glue-step');
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
  @State() parentDirection;
  @State() parentActive;
  @State() parentInactiveColor;
  @State() parentActiveColor;
  @State() parentFinishIcon;
  @State() parentActiveIcon;
  @State() parentInactiveIcon;
  @State() index: number;
  @Event() clickStep: EventEmitter;
  @Method()
  async setIndex(index: number) {
    this.index = index;
    console.log(this.index, 'this.index');
  }
  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  @Method()
  async getParentValue() {
    let parent = getElementParent(this.el, 'GLUE-STEPS');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-STEPS') {
      this.parentDirection = parent.direction;
      this.parentActive = parent.active;
      this.parentInactiveColor = parent.inactiveColor;
      this.parentActiveColor = parent.activeColor;
      this.parentFinishIcon = parent.finishIcon;
      this.parentActiveIcon = parent.activeIcon;
      this.parentInactiveIcon = parent.inactiveIcon;
    }
    console.log(this.parentDirection, 'this.direction');
  }
  getStatus = () => {
    const active = +this.parentActive;
    if (this.index < this.parentActive) {
      return 'finish';
    }
    return this.index === active ? 'process' : 'waiting';
  };

  isActive = () => this.getStatus() === 'process';

  lineStyle = () => ({
    background: this.getStatus() === 'finish' ? this.parentActiveColor : this.parentInactiveColor,
  });

  titleStyle = () => {
    if (this.isActive()) {
      return { color: this.parentActiveColor };
    }
    if (!this.getStatus()) {
      return { color: this.parentInactiveColor };
    }
  };

  onClickStep = () => {
    // parent.onClickStep(index.value);
  };
  componentDidLoad() {
    this.getParentValue();
  }
  renderCircle = () => {
    if (this.isActive()) {
      console.log(this.parentActiveColor, 'this.parentActiveColor');
      return <glue-icon class="glue-step__icon" name={this.parentActiveIcon} color={this.parentActiveColor} />;
    }

    if (this.getStatus() === 'finish' && this.parentFinishIcon) {
      return <glue-icon class="glue-step__icon glue-step__icon--finish" name={this.parentFinishIcon} color={this.parentActiveColor} />;
    }

    if (this.parentInactiveIcon) {
      return <glue-icon class="glue-step__icon" name={this.parentInactiveIcon} />;
    }

    return <i class="glue-step__circle" style={this.lineStyle()} />;
  };
  render() {
    console.log(this, this.el, 'hauhauhuah');
    const status = this.getStatus();
    return (
      <Host
        class={classNames('glue-step', BORDER, bem([this.parentDirection, status]), {
          'glue-step__active': this.isActive(),
        })}
      >
        <div
          class={classNames('glue-step__title', {
            'glue-step__title--active': this.isActive(),
          })}
          style={this.titleStyle()}
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
