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
  @Prop() minHour: string | number = 0;
  @Prop() maxHour: string | number = 23;
  @Prop() minMinute: string | number = 0;
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
  @Prop() showToolbar = true;
  @Prop() visibleItemCount = 6;
  @Prop() swipeDuration = 1000;

  render() {
    const isTimePicker = this.type === 'time';
    const Component = isTimePicker ? <glue-time-picker></glue-time-picker> : <glue-date-picker></glue-date-picker>;
    return (
      <Host class={classNames('cunstom')}>
        <Component class="glue-datetime-picker" {...this} />
      </Host>
    );
  }
}
