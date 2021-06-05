import { Component, Prop, h, Host, State, Event, EventEmitter, Method } from '@stencil/core';
// import classNames from 'classnames';
import { addUnit } from '../../utils/format/unit';
import { setScrollTop } from '../../utils/dom/scroll';
import { compareDay, getPrevDay, getNextDay, formatMonthTitle } from '../glue-calendar/utils';
import { getMonthEndDay } from '../glue-datetime-picker/utils';
@Component({
  tag: 'glue-calendar-month',
  styleUrl: 'glue-calendar-month.less',
  shadow: false,
})
export class GlueCalendarMonth {
  @Prop() first: string;
  @Prop() date: any;
  @Prop() type: string;
  @Prop() color: string;
  @Prop() minDate: any;
  @Prop() maxDate: any;
  @Prop() showMark: boolean;
  @Prop() rowHeight: string;
  @Prop() formatter: any;
  @Prop() lazyRender: boolean;
  @Prop() currentDate: any;
  @Prop() allowSameDay: boolean;
  @Prop() showSubtitle: boolean;
  @Prop() showMonthTitle: boolean;
  @Prop() firstDayOfWeek: number;
  @State() visible: boolean;
  @Event() glueMonthClick: EventEmitter;
  clickHandle = item => {
    console.log(item, 'itemitemitemitemitem11');
    this.glueMonthClick.emit(item);
  };
  @Method()
  async getTitle() {
    console.log(this.title(), 'this.title()');
    return this.title();
  }
  monthRef;
  daysRef;
  title = () => formatMonthTitle(this.date);
  rowHeightCom = () => addUnit(this.rowHeight);
  offset = () => {
    const realDay = this.date.getDay();

    if (this.firstDayOfWeek) {
      return (realDay + 7 - this.firstDayOfWeek) % 7;
    }
    return realDay;
  };

  totalDay = () => getMonthEndDay(this.date.getFullYear(), this.date.getMonth() + 1);

  shouldRender = () => this.visible || !this.lazyRender;

  scrollIntoView = body => {
    const el = this.showSubtitle ? this.daysRef : this.monthRef;

    const scrollTop = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;

    setScrollTop(body, scrollTop);
  };

  getMultipleDayType = day => {
    console.log(this.currentDate, 'this.currentDate');
    const isSelected = date => this.currentDate.some(item => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return 'multiple-middle';
      }
      if (prevSelected) {
        return 'end';
      }
      if (nextSelected) {
        return 'start';
      }
      return 'multiple-selected';
    }

    return '';
  };

  getRangeDayType = day => {
    const [startDay, endDay] = this.currentDate;

    if (!startDay) {
      return '';
    }
    console.log(day, startDay, 'day, startDay');
    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? 'start' : '';
    }
    console.log(day, endDay, 'day, startendDayDay');
    const compareToEnd = compareDay(day, endDay);

    if (this.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return 'start-end';
    }
    if (compareToStart === 0) {
      return 'start';
    }
    if (compareToEnd === 0) {
      return 'end';
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle';
    }
  };

  getDayType = day => {
    const { type, minDate, maxDate, currentDate } = this;
    // console.log(day, minDate, maxDate, 'anifai');
    if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
      return 'disabled';
    }

    if (currentDate === null) {
      return;
    }

    if (Array.isArray(currentDate)) {
      if (type === 'multiple') {
        return this.getMultipleDayType(day);
      }
      if (type === 'range') {
        return this.getRangeDayType(day);
      }
    } else if (type === 'single') {
      //TODO:undefined
      // console.log(day, currentDate, 'day, currentDate');
      return compareDay(day, currentDate) === 0 ? 'selected' : '';
    }
  };

  getBottomInfo = dayType => {
    if (this.type === 'range') {
      if (dayType === 'start' || dayType === 'end') {
        return dayType;
      }
      if (dayType === 'start-end') {
        return 'startEnd';
      }
    }
  };

  renderTitle = () => {
    if (this.showMonthTitle) {
      return <div class="glue-calendar-month__month-title">{this.title()}</div>;
    }
  };

  renderMark = () => {
    console.log(this.showMark, this.date, 'this.showMark');
    if (this.showMark && this.shouldRender()) {
      return <div class="glue-calendar-month__month-mark">{this.date.getMonth() + 1}</div>;
    }
  };

  placeholders = () => {
    const rows = [];
    const count = Math.ceil((this.totalDay() + this.offset()) / 7);
    for (let day = 1; day <= count; day++) {
      rows.push({ type: 'placeholder' });
    }
    return rows;
  };

  days = () => {
    const days = [];
    const year = this.date.getFullYear();
    const month = this.date.getMonth();

    for (let day = 1; day <= this.totalDay(); day++) {
      const date = new Date(year, month, day);
      const type = this.getDayType(date);

      let config = {
        date,
        type,
        text: day,
        bottomInfo: this.getBottomInfo(type),
      };

      if (this.formatter) {
        config = this.formatter(config);
      }

      days.push(config);
    }

    return days;
  };
  renderDay = (item, index) => {
    // console.log(item, 'itemitemitem');
    return (
      <glue-calendar-day
        item={item}
        index={index}
        color={this.color}
        offset={this.offset()}
        rowHeight={this.rowHeightCom()}
        onGlueDayClick={() => {
          console.log(item, 'wef');
          this.clickHandle(item);
        }}
      />
    );
  };

  renderDays = () => {
    return (
      <div role="grid" class="glue-calendar-month__days">
        {this.renderMark()}
        {(this.shouldRender() ? this.days() : this.placeholders()).map(this.renderDay)}
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-calendar-month">
        {this.renderTitle()}
        {this.renderDays()}
      </Host>
    );
  }
}
