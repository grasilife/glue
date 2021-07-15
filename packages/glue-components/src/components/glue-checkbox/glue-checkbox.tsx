import { Component, Prop, h, Host, State, Element, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-checkbox',
  styleUrl: 'glue-checkbox.less',
  shadow: false,
})
export class GlueCheckbox {
  @Element() el!: HTMLElement;
  //checkerProps
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) name: null;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) iconSize: number | string = 16;
  @Prop({ mutable: true, reflect: true }) modelValue = null;
  @Prop({ reflect: true }) checkedColor: string;
  @Prop({ reflect: true }) labelPosition: string;
  @Prop({ reflect: true }) labelDisabled: boolean;
  @Prop({ reflect: true }) shape = 'round';
  @Prop({ reflect: true }) bindGroup = false;
  @State() parent: any;
  @State() parentMax: any;
  @State() parentModelValue;
  @Event() glueCilck: EventEmitter;
  // const { parent } = useParent(CHECKBOX_KEY);
  componentDidLoad() {
    this.parent = getElementParent(this.el);
    this.modelValue = getAttribute(parent, 'model-value');
    this.parentMax = getAttribute(parent, 'max');
  }
  setParentValue = checked => {
    const { name } = this;
    const { parentMax, modelValue } = this;
    const value = modelValue.slice();

    if (checked) {
      const overlimit = parentMax && value.length >= parentMax;

      if (!overlimit && value.indexOf(name) === -1) {
        value.push(name);

        if (this.bindGroup) {
          // parent.emit('update:modelValue', value);
        }
      }
    } else {
      const index = value.indexOf(name);

      if (index !== -1) {
        value.splice(index, 1);

        if (this.bindGroup) {
          // parent.emit('update:modelValue', value);
        }
      }
    }
  };

  checked = () => {
    if (parent && this.bindGroup) {
      return this.parentModelValue.indexOf(this.name) !== -1;
    }
    return this.modelValue;
  };

  toggle = newValue => {
    if (parent && this.bindGroup) {
      this.setParentValue(newValue);
    } else {
      // emit('update:modelValue', newValue);
    }
  };
  click = () => {
    this.glueCilck.emit();
  };
  render() {
    console.log(this.label, 'fjaijfia');
    return (
      <Host class={classNames('glue-checkbox')}>
        <glue-checker
          class="glue-checkbox"
          role="checkbox"
          parent={parent}
          checked={this.checked()}
          bindGroup={this.bindGroup}
          onGlueToggle={this.toggle}
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
        ></glue-checker>
      </Host>
    );
  }
}
