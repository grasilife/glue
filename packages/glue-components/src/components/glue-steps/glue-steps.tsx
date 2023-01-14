import {
  Component,
  Prop,
  h,
  EventEmitter,
  Event,
  Watch,
  Element,
  State,
  Host,
} from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-steps');
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-steps',
  styleUrl: 'glue-steps.less',
  shadow: false,
})
export class GlueSteps {
  @Element() el!: HTMLGlueStepsElement;
  @Prop() finishIcon: string;
  @Prop() activeColor: string = '#07c160';
  @Prop() inactiveIcon: string;
  @Prop() inactiveColor: string;
  @Prop() active: string | number = 0;
  @Prop() direction = 'horizontal';
  @Prop() activeIcon = 'checked';
  @State() children;
  @Event() clickStep: EventEmitter;
  onClickStep = (index: number) => {
    this.clickStep.emit(index);
  };
  @Watch('active')
  watchModelValue() {
    this.children = getElementChildren(this.el, 'GLUE-STEP');
    console.log(this.children, 'this.children');
    for (let i = 0; i < this.children.length; i++) {
      let element = this.children[i];
      element.setIndex(i);
      let name = element.name;
      //只能使用方法设置state
      console.log(element, name, 'namenamename');
      // if (this.modelValue === name) {
      //   console.log(element.setValue, 'element.setValue');
      //   element.setValue('checked', true);
      // } else {
      //   element.setValue('checked', false);
    }
  }
  componentDidLoad() {
    this.watchModelValue();
  }
  render() {
    return (
      <Host class={classNames('glue-steps', bem([this.direction]))}>
        <div class="glue-steps__items">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
