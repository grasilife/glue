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
import { createNamespace } from '../../utils/create/index';
import { getElementParent } from '../../utils/base';
const [bem] = createNamespace('glue-checkbox');
@Component({
  tag: 'glue-checkbox',
  styleUrl: 'glue-checkbox.less',
  shadow: false,
})
export class GlueCheckbox {
  @Element() el!: HTMLGlueCheckboxElement;
  //checkerProps
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
  @State() parentProps: any;
  @State() direction = null;
  @Event() glueCilck: EventEmitter;
  @Event() glueChange: EventEmitter;
  async componentDidLoad() {}
  async setParentValue() {
    let parent = getElementParent(this.el);
    const { name } = this;
    const { modelValue } = parent;
    const value = modelValue.slice();
    const index = value.indexOf(name);
    if (this.checked) {
      value.push(name);
    } else {
      value.splice(index, 1);
    }
    // if (index === -1) {
    //   //不存在
    //   // const overlimit = max && value.length >= max;
    //   // console.log(
    //   //   !overlimit,
    //   //   value.indexOf(name) === -1,
    //   //   value,
    //   //   name,
    //   //   'overlimit'
    //   // );
    //   // if (!overlimit && value.indexOf(name) === -1) {
    //   //   value.push(name);
    //   //   console.log(this.bindGroup, 'this.bindGroup');
    //   //   if (this.bindGroup) {
    //   //     console.log(value, '11111');
    //   //     parent.setValue(value);
    //   //   }
    //   // }
    //   value.push(name);
    // } else {
    //   //存在
    //   value.splice(index, 1);
    // }
    parent.setValue(value);
    console.log(this.checked, value, 'this.checked11');
  }

  @Method()
  async isChecked() {
    let parent = getElementParent(this.el);
    if (parent && this.bindGroup) {
      console.log(
        parent.modelValue,
        parent.modelValue.indexOf(this.name) !== -1,
        'mmmmmm'
      );
      this.checked = parent.modelValue.indexOf(this.name) !== -1;
    } else {
      this.checked = this.modelValue;
    }
  }
  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  async toggle() {
    this.checked = !this.checked;
    await this.setParentValue();
    this.glueChange.emit(this.checked);
  }
  click = (event) => {
    console.log(event.detail, 'jijijijijijiji');
    this.glueCilck.emit(event.detail);
  };

  render() {
    console.log(this.label, this.modelValue, 'fjaijfia');
    return (
      <Host class={classNames('glue-checkbox', bem([this.direction]))}>
        <glue-checker
          class="glue-checkbox"
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
