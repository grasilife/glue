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
import { createNamespace } from '../../utils/create/index';
import { getElementParent, getAttribute } from '../../utils/base';
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
  @Prop({ mutable: true, reflect: true }) modelValue = false;
  @Prop({ reflect: true }) checkedColor: string = '#1989fa';
  @Prop({ reflect: true }) labelPosition: string;
  @Prop({ reflect: true }) labelDisabled: boolean = false;
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
    console.log(parent.tagName, this.el, 'parent111');
    console.log(this.modelValue, 'parent222');
    //如果没有group就不获取
    if (parent.tagName == 'GLUE-CHECKBOX-GROUP') {
      this.parent = parent;
      console.log(this.parent, 'this.parent111');
      this.modelValue = getAttribute(this.parent, 'model-value');
      this.parentMax = getAttribute(this.parent, 'max');
      console.log(this.modelValue, this.parentMax, 'this.modelValue');
    }
  }
  getParentProp = (name) => {
    console.log(this.parent, name, 'this.parentthis.parent');
    if (this.parent) {
      let parentAttr = getAttribute(this.parent, name);
      console.log(parentAttr, 'parentAttr');
      return parentAttr;
    }
    return null;
  };
  direction = () => this.getParentProp('direction') || null;
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
    // if (this.parent && this.bindGroup) {
    //   return this.parentModelValue.indexOf(this.name) !== -1;
    // }
    console.log(this.modelValue, 'this.modelValue1');
    return this.modelValue;
  };

  toggle = (newValue) => {
    console.log(newValue, this.modelValue, 'fjhuahiguiangi111');
    this.modelValue = !this.modelValue;
    this.glueChange.emit(this.modelValue);
    if (this.parent && this.bindGroup) {
      this.setParentValue(newValue);
    }
  };
  click = (event) => {
    console.log(event.detail, 'jijijijijijiji');
    this.glueCilck.emit(event.detail);
  };
  render() {
    console.log(this.label, this.modelValue, 'fjaijfia');
    return (
      <Host class={classNames('glue-checkbox', bem([this.direction()]))}>
        <glue-checker
          class="glue-checkbox"
          role="checkbox"
          icon={this.icon}
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
        >
          <slot name="icon"></slot>
        </glue-checker>
      </Host>
    );
  }
}
