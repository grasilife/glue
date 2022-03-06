import {
  Component,
  Prop,
  h,
  Host,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';
import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
import { getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-checker',
  styleUrl: 'glue-checker.less',
  shadow: false,
})
export class GlueChecker {
  @Element() el!: HTMLGlueCheckerElement;
  //checkerProps
  @Prop({ reflect: true }) label: string;
  @Prop() name: number | string;
  @Prop() disabled: boolean = false;
  @Prop() iconSize: number | string;
  @Prop({ mutable: true, reflect: true }) modelValue = false;
  @Prop() checkedColor: string;
  @Prop() labelPosition: string;
  @Prop() labelDisabled: boolean = false;
  @Prop() shape: string = 'round';
  @Prop() icon: string = '';
  // this
  @Prop() role: string;
  @Prop() parent: any;
  @Prop() checked: boolean = false;
  @Prop() bindGroup: boolean = true;
  @Prop() bem: string = 'true';
  @Event() glueToggle: EventEmitter;
  @Event() glueCilck: EventEmitter;
  componentDidLoad() {}
  iconRef;
  getParentProp = (name) => {
    console.log(this.parent, name, 'this.parentthis.parent');
    if (this.parent) {
      let parentAttr = getAttribute(this.parent, name);
      console.log(parentAttr, 'parentAttr');
      return parentAttr;
    }
    return null;
  };

  disabledFn = () => {
    console.log(this.getParentProp('disabled'), this.disabled, 'jijijijijiji');
    return this.getParentProp('disabled') || this.disabled;
  };

  onClick = (event: MouseEvent) => {
    const { target } = event;
    const icon = this.iconRef;
    const iconClicked = icon === target || icon!.contains(target as Node);

    if (!this.disabledFn() && (iconClicked || !this.labelDisabled)) {
      this.glueToggle.emit();
    }
    this.glueCilck.emit(this.name);
  };
  renderGlueIcon = (iconSize) => {
    if (this.icon == '#slot') {
      return <slot name="icon"></slot>;
    }
    console.log(this.checkedColor, 'this.checkedColor');
    return (
      <glue-icon
        name="success"
        // color={this.checkedColor}
        backgroundColor={this.checkedColor}
        size={iconSize}
      />
    );
  };
  renderIcon = () => {
    const { shape, checked } = this;
    const iconSize = this.iconSize || this.getParentProp('iconSize');

    return (
      <div
        ref={(dom) => {
          this.iconRef = dom;
        }}
        class={classNames('glue-checker__icon', {
          ['glue-checker__icon--' + shape]: shape,
          ['glue-checker__icon--disabled']: this.disabledFn(),
          ['glue-checker__icon--checked']: checked,
        })}
        style={{ fontSize: addUnit(iconSize) }}
      >
        {this.renderGlueIcon(iconSize)}
      </div>
    );
  };

  renderLabel = () => {
    console.log(this.disabledFn(), 'kkkkkk');
    const iconSize = this.iconSize || this.getParentProp('iconSize');
    return (
      <span
        style={{ fontSize: addUnit(iconSize) }}
        class={classNames('glue-checker__label', {
          // ['glue-checker__icon' + this.labelPosition]: this.labelPosition,
          ['glue-checker__label--disabled']: this.disabledFn(),
        })}
      >
        {this.label}
      </span>
    );
  };
  render() {
    const nodes = [this.renderIcon()];

    if (this.labelPosition === 'left') {
      nodes.unshift(this.renderLabel());
    } else {
      nodes.push(this.renderLabel());
    }
    return (
      <Host
        role={this.role}
        class={classNames({
          ['glue-checker__disabled']: this.disabledFn(),
          ['glue-checker__label-disabled']: this.disabledFn(),
        })}
        tabindex={this.disabledFn() ? -1 : 0}
        aria-checked={this.checked}
        onClick={this.onClick}
      >
        {nodes}
      </Host>
    );
  }
}
