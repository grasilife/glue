import {
  Component,
  Prop,
  h,
  Host,
  State,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-checkbox',
  styleUrl: 'glue-checkbox.less',
  shadow: false,
})
export class GlueCheckbox {
  @Element() el!: HTMLGlueCheckboxElement;
  //checkerProps
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) name: number | string;
  @Prop({ reflect: true }) disabled: string;
  @Prop({ reflect: true }) iconSize: number | string = 16;
  @Prop({ mutable: true, reflect: true }) modelValue = false;
  @Prop({ reflect: true }) checkedColor: string;
  @Prop({ reflect: true }) labelPosition: string;
  @Prop({ reflect: true }) labelDisabled: string;
  @Prop({ reflect: true }) shape = 'round';
  @Prop({ reflect: true }) bindGroup: boolean = false;
  @State() parent: any;
  @State() parentMax: any;
  @State() parentModelValue;
  @Event() glueCilck: EventEmitter;
  @Event() glueChange: EventEmitter;
  // const { parent } = useParent(CHECKBOX_KEY);
  componentDidLoad() {
    let parent = getElementParent(this.el);
    console.log(parent.tagName, 'parent111');
    //如果没有group就不获取
    if (parent.tagName == 'GLUE-CHECKBOX-GROUP') {
      this.parent = parent;
      console.log(this.parent, 'this.parent111');
      this.modelValue = getAttribute(this.parent, 'model-value');
      this.parentMax = getAttribute(this.parent, 'max');
      console.log(this.modelValue, 'this.modelValue');
    }
  }
  setParentValue = (checked) => {
    const { name } = this;
    const { parentMax, parentModelValue } = this;
    console.log(parentModelValue, 'modelValue');
    const value = parentModelValue.slice();

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
    return this.modelValue;
  };

  toggle = (newValue) => {
    console.log('fjhuahiguiangi');
    if (this.parent && this.bindGroup) {
      this.setParentValue(newValue);
    } else {
      this.modelValue = !this.modelValue;
      this.glueChange.emit(this.modelValue);
    }
  };
  click = () => {
    this.glueCilck.emit();
  };
  render() {
    console.log(this.label, this.modelValue, 'fjaijfia');
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
