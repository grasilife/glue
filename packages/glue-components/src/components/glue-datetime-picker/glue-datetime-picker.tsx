import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
const currentYear = new Date().getFullYear();
// import { pick } from '../../utils/base';
@Component({
  tag: 'glue-datetime-picker',
  styleUrl: 'glue-datetime-picker.less',
  shadow: false,
})
export class GlueDatetimePicker {
  //TimePicker
  @Prop() minHour: number = 0;
  @Prop() maxHour: number = 23;
  @Prop() minMinute: number = 0;
  @Prop() fimaxMinuterst: string | number = 59;

  //DatePicker
  @Prop() type: string = 'datetime';
  @Prop() minDate = new Date(currentYear - 10, 0, 1);
  @Prop() maxDate = new Date(currentYear + 10, 11, 31);
  //sharedProps
  @Prop() filter;
  @Prop() modelValue = null;
  @Prop() columnsOrder: [];
  @Prop() formatter;
  //pickerProps
  @Prop() title: string;
  @Prop() loading: boolean;
  @Prop() readonly: boolean;
  @Prop() allowHtml: boolean;
  @Prop() cancelButtonText: string;
  @Prop() confirmButtonText: string;
  @Prop() itemHeight: number = 44;
  @Prop() showToolbar = false;
  @Prop() visibleItemCount = 6;
  @Prop() swipeDuration = 1000;
  renderComponent = () => {
    const isTimePicker = this.type === 'time';
    if (isTimePicker) {
      return <glue-time-picker {...this}></glue-time-picker>;
    } else {
      return <glue-date-picker {...this}></glue-date-picker>;
    }
  };
  render() {
    return <Host class={classNames('cunstom')}>{this.renderComponent()}</Host>;
  }
}
