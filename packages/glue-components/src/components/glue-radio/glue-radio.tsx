import {
  Component,
  Prop,
  h,
  Host,
  State,
  Element,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';
import classNames from 'classnames';
// import { createNamespace } from '../../utils/create/index';
// const [bem] = createNamespace('glue-button');
import { getElementParent } from '../../utils/base';
@Component({
  tag: 'glue-radio',
  styleUrl: 'glue-radio.less',
  shadow: false,
})
export class GlueRadio {
  @Element() el!: HTMLGlueRadioElement;
  // //checkerProps
  @Prop({ reflect: true }) label: string;
  @Prop() icon: string;
  @Prop({ reflect: true }) name: number | string;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) iconSize: number | string = 16;
  @Prop({ reflect: true }) modelValue = false;
  @Prop({ reflect: true }) checkedColor: string = '#1989fa';
  @Prop({ reflect: true }) labelPosition: string;
  @Prop({ reflect: true }) labelDisabled: boolean = false;
  @Prop({ reflect: true }) shape = 'round';
  @Prop({ reflect: true }) bindGroup: boolean = true;
  @State() parent: any;
  @State() checked = false;
  @Event() glueCilck: EventEmitter;
  @Event() glueChange: EventEmitter;

  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  async toggle() {
    let parent = getElementParent(this.el, 'GLUE-RADIO-GROUP');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-RADIO-GROUP') {
      const { name } = this;
      parent.setValue(name);
    } else {
      this.checked = !this.checked;
    }
    this.glueChange.emit(this.checked);
    console.log(this.checked, 'this.checked11');
  }
  click = () => {
    this.glueCilck.emit(this.checked);
  };
  render() {
    return (
      <Host class={classNames('glue-radio')} role="radio">
        <glue-checker
          class="glue-radio"
          role="checkbox"
          icon={this.icon}
          parent={this.parent}
          checked={this.checked}
          bindGroup={this.bindGroup}
          onGlueToggle={() => {
            this.toggle();
          }}
          onGlueCilck={this.click}
          label={this.label}
          name={this.name}
          disabled={this.disabled}
          iconSize={this.iconSize}
          modelValue={this.modelValue}
          checkedColor={this.checkedColor}
          labelPosition={this.labelPosition}
          labelDisabled={this.labelDisabled}
          shape={this.shape}
        >
          <slot name="icon"></slot>
        </glue-checker>
      </Host>
    );
  }
}
