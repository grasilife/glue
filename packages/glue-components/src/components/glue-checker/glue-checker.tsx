import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
// import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-checker',
  styleUrl: 'glue-checker.less',
  shadow: false,
})
export class GlueChecker {
  @Element() el!: HTMLElement;
  //checkerProps
  @Prop() label: string;
  @Prop() name: null;
  @Prop() disabled: boolean;
  @Prop() iconSize: number | string;
  @Prop() modelValue = null;
  @Prop() checkedColor: string;
  @Prop() labelPosition: string;
  @Prop() labelDisabled: boolean;
  @Prop() shape = 'round';
  // this
  @Prop() role: string;
  @Prop() parent: any;
  @Prop() checked: boolean;
  @Prop() bindGroup = true;
  @Prop() bem = true;
  @Event() glueToggle: EventEmitter;
  @Event() glueCilck: EventEmitter;
  componentDidLoad() {}
  iconRef;
  getParentProp = (name: string) => {
    if (this.parent && this.bindGroup) {
      return this.parent.this[name];
    }
    return null;
  };

  disabledFn = () => this.getParentProp('disabled') || this.disabled;

  direction = () => this.getParentProp('direction') || null;

  onClick = (event: MouseEvent) => {
    const { target } = event;
    const icon = this.iconRef;
    const iconClicked = icon === target || icon!.contains(target as Node);

    if (!this.disabledFn() && (iconClicked || !this.labelDisabled)) {
      this.glueToggle.emit();
    }
    this.glueCilck.emit(event);
  };

  renderIcon = () => {
    const { shape, checked } = this;
    const iconSize = this.iconSize || this.getParentProp('iconSize');

    return (
      <div
        ref={dom => {
          this.iconRef = dom;
        }}
        class={classNames('glue-checker__icon', {
          ['glue-checker__icon--' + shape]: shape,
          ['glue-checker__icon--disabled']: this.disabledFn(),
          ['glue-checker__icon--checked']: checked,
        })}
        style={{ fontSize: addUnit(iconSize) }}
      >
        <glue-icon name="success" color={this.checkedColor} size={iconSize} />
      </div>
    );
  };

  renderLabel = () => {
    const iconSize = this.iconSize || this.getParentProp('iconSize');
    console.log(this.label, 'fjaijfia221');
    return (
      <span
        style={{ fontSize: addUnit(iconSize) }}
        class={classNames('glue-checker__label', {
          ['glue-checker__icon' + this.labelPosition]: this.labelPosition,
          ['glue-checker__icon--disabled']: this.disabledFn(),
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
          ['glue-checker__label-disabled']: this.labelDisabled,
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
