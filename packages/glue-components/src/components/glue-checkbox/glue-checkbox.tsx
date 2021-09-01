import { Component, Prop, h, Host, State, Element, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
// import judge from 'judgejs';
import { isDef, resetBoolean } from '../../utils/base';
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
  @Prop({ reflect: true }) name: number | string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) iconSize: number | string = 16;
  @Prop({ mutable: true, reflect: true }) modelValue;
  @Prop({ reflect: true }) checkedColor: string;
  @Prop({ reflect: true }) labelPosition: string;
  @Prop({ reflect: true }) labelDisabled: boolean;
  @Prop({ reflect: true }) shape = 'round';
  @Prop({ reflect: true }) bindGroup = false;
  @State() parent: any;
  @State() parentMax: any;
  @State() parentModelValue;
  @Event() glueCilck: EventEmitter;
  @Event() glueChange: EventEmitter;
  // const { parent } = useParent(CHECKBOX_KEY);
  componentWillLoad() {
    console.log(typeof this.modelValue, '11efefe');
    if (!Array.isArray(this.modelValue)) {
      this.modelValue = resetBoolean(this.modelValue);
    }
    this.labelDisabled = resetBoolean(this.labelDisabled);
    this.disabled = resetBoolean(this.disabled);
    this.bindGroup = resetBoolean(this.bindGroup);
    console.log(this.modelValue, 'Component is about to be rendered');
  }
  componentDidLoad() {
    let parent = getElementParent(this.el);
    //如果没有group就不获取
    if (parent.tagName == 'GLUE-CHECKBOX-GROUP') {
      this.parent = parent;
      console.log(this.parent, 'this.parent');
      this.modelValue = getAttribute(this.parent, 'model-value');
      this.parentMax = getAttribute(this.parent, 'max');
      console.log(this.modelValue, 'this.modelValue');
    }
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
    console.log(this.parent, this.bindGroup, 'this.bindGroup');
    if (this.parent && this.bindGroup) {
      return this.parentModelValue.indexOf(this.name) !== -1;
    }
    console.log(this.modelValue, 'this.modelValue1');
    if (isDef(this.modelValue)) {
      return true;
    } else {
      return false;
    }
  };

  toggle = newValue => {
    console.log('fjhuahiguiangi');
    if (parent && this.bindGroup) {
      this.setParentValue(newValue);
    } else {
      this.modelValue = !this.modelValue;
      console.log(this.modelValue, 'this.modelValue');
      this.glueChange.emit(this.modelValue);
    }
  };
  click = e => {
    console.log(e, 'hauhauhua');
    this.glueCilck.emit();
  };
  render() {
    console.log(this.label, this.checked(), this.modelValue, 'fjaijfia');
    return (
      <Host class={classNames('glue-checkbox')}>
        <glue-checker
          class="glue-checkbox"
          role="checkbox"
          parent={this.parent}
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
