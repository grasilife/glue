import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { padZero } from '../../utils/format/string';
import { times } from '../glue-datetime-picker/utils';
import { range } from '../../utils/format/number';
@Component({
  tag: 'glue-time-picker',
  styleUrl: 'glue-time-picker.less',
  shadow: false,
})
export class GlueTimePicker {
  //sharedProps
  @Prop() filter;
  @Prop() modelValue = null;
  @Prop() columnsOrder: [];
  @Prop() formatter;
  //pickerProps
  @Prop() g_title: string;
  @Prop() loading: boolean;
  @Prop() readonly: boolean;
  @Prop() allowHtml: boolean;
  @Prop() cancelButtonText: string;
  @Prop() confirmButtonText: string;
  @Prop() itemHeight: number = 44;
  @Prop() showToolbar = false;
  @Prop() visibleItemCount = 6;
  @Prop() swipeDuration = 1000;
  @Prop() minHour = 0;
  @Prop() maxHour = 23;
  @Prop() minMinute: number = 0;
  @Prop() maxMinute = 59;
  @State() currentDate;
  componentWillLoad() {
    this.currentDate = this.formatValue(this.modelValue);
  }
  picker;
  formatValue = (value) => {
    const { minHour, maxHour, maxMinute, minMinute } = this;

    if (!value) {
      value = `${padZero(minHour)}:${padZero(minMinute)}`;
    }

    let [hour, minute] = value.split(':');
    hour = padZero(range(hour, minHour, maxHour));
    minute = padZero(range(minute, minMinute, maxMinute));

    return `${hour}:${minute}`;
  };

  ranges = () => {
    return [
      {
        type: 'hour',
        range: [+this.minHour, +this.maxHour],
      },
      {
        type: 'minute',
        range: [+this.minMinute, +this.maxMinute],
      },
    ];
  };

  originColumns = () => {
    return this.ranges().map(({ type, range: rangeArr }) => {
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
        padZero(rangeArr[0] + index)
      );

      if (this.filter) {
        values = this.filter(type, values);
      }

      return {
        type,
        values,
      };
    });
  };

  columns = () => {
    return this.originColumns().map((column) => ({
      values: column.values.map((value) => this.formatter(column.type, value)),
    }));
  };

  updateColumnValue = () => {
    const pair = this.currentDate.split(':');
    const values = [
      this.formatter('hour', pair[0]),
      this.formatter('minute', pair[1]),
    ];
    console.log(values);

    // nextTick(() => {
    //   picker.value.setValues(values);
    // });
  };

  updateInnerValue = () => {
    const [hourIndex, minuteIndex] = this.picker.getIndexes();
    const [hourColumn, minuteColumn] = this.originColumns();

    const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
    const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

    this.currentDate = this.formatValue(`${hour}:${minute}`);
    this.updateColumnValue();
  };

  onConfirm = () => {
    // emit('confirm', currentDate.value);
  };

  onCancel = () => {
    // emit('cancel');
  };

  onChange = () => {
    this.updateInnerValue();

    // nextTick(() => {
    //   nextTick(() => {
    //     emit('change', currentDate.value);
    //   });
    // });
  };
  render() {
    return (
      <Host class={classNames('cunstom')}>
        <glue-picker
          ref={(dom) => {
            this.picker = dom;
          }}
          {...this}
          columns={this.columns()}
          readonly={this.readonly}
          onGlueChange={this.onChange}
          onGlueCancel={this.onCancel}
          onGlueConfirm={this.onConfirm}
        />
      </Host>
    );
  }
}
