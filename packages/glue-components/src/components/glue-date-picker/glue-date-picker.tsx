import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import {
  getMonthEndDay,
  getTrueValue,
  times,
} from '../glue-datetime-picker/utils';
import { isDate } from '../../utils/validate/date';
import { padZero } from '../../utils/format/string';
const currentYear = new Date().getFullYear();
@Component({
  tag: 'glue-date-picker',
  styleUrl: 'glue-date-picker.less',
  shadow: false,
})
export class GlueDatePicker {
  //sharedProps
  @Prop() filter;
  @Prop() modelValue = null;
  @Prop() columnsOrder: [];
  @Prop() formatter: Function = (_type: string, value: unknown) => value;
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
  // props
  @Prop() type = 'datetime';
  @Prop() minDate = new Date(currentYear - 10, 0, 1);
  @Prop() maxDate = new Date(currentYear + 10, 11, 31);
  @State() currentDate;
  componentWillLoad() {
    this.currentDate = this.formatValue(this.modelValue);
  }
  picker;
  formatValue = (value) => {
    if (!isDate(value)) {
      value = this.minDate;
    }

    value = Math.max(value, this.minDate.getTime());
    value = Math.min(value, this.maxDate.getTime());

    return new Date(value);
  };

  getBoundary = (type, value) => {
    const boundary = this[`${type}Date`];
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (type === 'max') {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }

    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
    };
  };

  ranges = () => {
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary(
      'max',
      this.currentDate
    );

    const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary(
      'min',
      this.currentDate
    );

    let result = [
      {
        type: 'year',
        range: [minYear, maxYear],
      },
      {
        type: 'month',
        range: [minMonth, maxMonth],
      },
      {
        type: 'day',
        range: [minDate, maxDate],
      },
      {
        type: 'hour',
        range: [minHour, maxHour],
      },
      {
        type: 'minute',
        range: [minMinute, maxMinute],
      },
    ];

    switch (this.type) {
      case 'date':
        result = result.slice(0, 3);
        break;
      case 'year-month':
        result = result.slice(0, 2);
        break;
      case 'month-day':
        result = result.slice(1, 3);
        break;
      case 'datehour':
        result = result.slice(0, 4);
        break;
    }

    if (this.columnsOrder) {
      // const columnsOrder = this.columnsOrder.concat(result.map(column => column.type));
      // result.sort((a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type));
    }

    return result;
  };

  originColumns = () => {
    return this.ranges().map(({ type, range: rangeArr }) => {
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => {
        const value = padZero(rangeArr[0] + index);
        return value;
      });

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
    const { value } = this.currentDate;
    const { formatter } = this;

    const values = this.originColumns().map((column) => {
      switch (column.type) {
        case 'year':
          return formatter('year', `${value.getFullYear()}`);
        case 'month':
          return formatter('month', padZero(value.getMonth() + 1));
        case 'day':
          return formatter('day', padZero(value.getDate()));
        case 'hour':
          return formatter('hour', padZero(value.getHours()));
        case 'minute':
          return formatter('minute', padZero(value.getMinutes()));
        default:
          // no default
          return null;
      }
    });
    console.log(values);

    // nextTick(() => {
    //   picker.value.setValues(values);
    // });
  };

  updateInnerValue = () => {
    const { type } = this;
    const indexes = this.picker().getIndexes();

    const getValue = (type) => {
      let index = 0;
      this.originColumns().forEach((column, columnIndex) => {
        if (type === column.type) {
          index = columnIndex;
        }
      });
      const { values } = this.originColumns[index];
      return getTrueValue(values[indexes[index]]);
    };

    let year;
    let month;
    let day;
    if (type === 'month-day') {
      year = this.currentDate.getFullYear();
      month = getValue('month');
      day = getValue('day');
    } else {
      year = getValue('year');
      month = getValue('month');
      day = type === 'year-month' ? 1 : getValue('day');
    }

    const maxDay = getMonthEndDay(year, month);
    day = day > maxDay ? maxDay : day;

    let hour = 0;
    let minute = 0;

    if (type === 'datehour') {
      hour = getValue('hour');
    }

    if (type === 'datetime') {
      hour = getValue('hour');
      minute = getValue('minute');
    }

    const value = new Date(year, month - 1, day, hour, minute);
    this.currentDate = this.formatValue(value);
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
    console.log(this.showToolbar, 'fjaifuai');
    return (
      <Host class={classNames('cunstom')}>
        <glue-picker
          ref={(dom) => {
            this.picker = dom;
          }}
          columns={this.columns()}
          {...this}
          readonly={this.readonly}
          onGlueChange={this.onChange}
          onGlueCancel={this.onCancel}
          onGlueConfirm={this.onConfirm}
        />
      </Host>
    );
  }
}
