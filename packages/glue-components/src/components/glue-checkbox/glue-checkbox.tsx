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

  @Method()
  async setValue(key, value) {
    this[key] = value;
  }
  async toggle() {
    let parent = getElementParent(this.el, 'GLUE-CHECKBOX-GROUP');
    console.log(parent.tagName, 'parent.tagName');
    if (parent.tagName === 'GLUE-CHECKBOX-GROUP') {
      const { name } = this;
      const { max, modelValue } = parent;
      const value = modelValue.slice();
      const overlimit = max && value.length >= max;
      const index = value.indexOf(name);
      console.log(overlimit, 'overlimit');
      if (!overlimit) {
        if (index === -1) {
          //不存在
          value.push(name);
        } else {
          value.splice(index, 1);
        }
      } else {
        if (index !== -1) {
          value.splice(index, 1);
        }
      }
      parent.setValue(value);
    } else {
      this.checked = !this.checked;
    }
    // this.modelValue = this.checked;
    this.glueChange.emit(this.checked);
    console.log(this.checked, 'this.checked11');
  }
  click = () => {
    this.glueCilck.emit(this.checked);
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
