import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-switc');
@Component({
  tag: 'glue-switch',
  styleUrl: 'glue-switch.less',
  shadow: false,
})
export class GlueSwitch {
  @Prop() size: string | number;
  @Prop() loading: boolean;
  @Prop() disabled: boolean;
  @Prop() value: boolean;
  @Prop() activeColor: string;
  @Prop() inactiveColor: string;
  @Prop() activeValue = true;
  @Prop() inactiveValue = false;
  @Event() glueChange: EventEmitter;
  isChecked = () => this.value === this.activeValue;

  onClick = () => {
    if (!this.disabled && !this.loading) {
      const newValue = this.isChecked() ? this.inactiveValue : this.activeValue;
      this.glueChange.emit(newValue);
    }
  };

  renderLoading = () => {
    if (this.loading) {
      const color = this.isChecked() ? this.activeColor : this.inactiveColor;
      return <glue-loading class={bem('loading')} color={color} />;
    }
  };
  render() {
    const { size, loading, disabled, activeColor, inactiveColor } = this;
    const checked = this.isChecked();
    console.log(checked, this.value, this.activeValue, 'huhu');
    const style = {
      fontSize: addUnit(size),
      backgroundColor: checked ? activeColor : inactiveColor,
    };
    return (
      <Host
        role="switch"
        class={classNames('glue-switch', {
          'glue-switch--on': checked,
          'glue-switch--loading': loading,
          'glue-switch--disabled': disabled,
        })}
        style={style}
        aria-checked={checked}
        onClick={this.onClick}
      >
        <div class="glue-switch__node">{this.renderLoading()}</div>
      </Host>
    );
  }
}
