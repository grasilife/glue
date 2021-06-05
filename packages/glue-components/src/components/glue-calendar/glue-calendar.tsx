import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { pick } from '../../utils/base';
import { getScrollTop } from '../../utils/dom/scroll';
import { raf } from '../../utils/animation';
import { useRect } from '../../utils/useRect';
const now = new Date();
console.log(now.getFullYear(), 'now.getFullYear()');
import { copyDate, copyDates, getPrevDay, getNextDay, compareDay, calcDateNum, compareMonth, getDayByOffset } from './utils';
@Component({
  tag: 'glue-calendar',
  styleUrl: 'glue-calendar.less',
  shadow: false,
})
export class GlueCalendar {
  @Prop() first: string;
  @Prop() show: boolean;
  @Prop() title: string;
  @Prop() color: string;
  @Prop() readonly: boolean;
  @Prop() teleport: any;
  @Prop() formatter: any;
  @Prop() rowHeight: number | string;
  @Prop() confirmText: string = '确定';
  @Prop() rangePrompt: string;
  @Prop() defaultDate: any;
  @Prop() allowSameDay: boolean;
  @Prop() confirmDisabledText: string;
  @Prop() type: string = 'single';
  @Prop() round: boolean = false;
  @Prop() position: string = 'bottom';
  @Prop() poppable: boolean = false;
  @Prop() maxRange: any;
  @Prop() lazyRender: boolean = false;
  @Prop() showMark: boolean = false;
  @Prop() showTitle: boolean = false;
  @Prop() showConfirm: boolean = false;
  @Prop() showSubtitle: boolean = false;
  @Prop() closeOnPopstate: boolean = false;
  @Prop() closeOnClickOverlay: boolean = false;
  @Prop() safeAreaInsetBottom: boolean = false;
  @Prop() minDate = new Date();
  @Prop() maxDate = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
  @Prop() firstDayOfWeek: any = 0;
  @State() subtitle;
  @State() currentDate: any;
  @State() bodyHeight: any;
  @State() monthRefs: any = [];
  @Event() glueSelect: EventEmitter;
  @Event() glueUnselect: EventEmitter;
  bodyRef;
  // setMonthRefs;
  setMonthRefs = (dom, index) => {
    // console.log(dom, index, 'dom, index');
    this.monthRefs.push(dom);
    // console.log(this.monthRefs, 'this.monthRefs');
  };
  limitDateRange = (date, minDate = this.minDate, maxDate = this.maxDate) => {
    // console.log(date, minDate, 'date, minDate');
    if (compareDay(date, minDate) === -1) {
      return minDate;
    }
    if (compareDay(date, maxDate) === 1) {
      return maxDate;
    }
    return date;
  };

  getInitialDate = (defaultDate = this.defaultDate) => {
    const { type, minDate, maxDate } = this;

    if (defaultDate === null) {
      return defaultDate;
    }

    const now = new Date();

    if (type === 'range') {
      if (!Array.isArray(defaultDate)) {
        defaultDate = [];
      }
      const start = this.limitDateRange(defaultDate[0] || now, minDate, getPrevDay(maxDate));
      const end = this.limitDateRange(defaultDate[1] || now, getNextDay(minDate));
      return [start, end];
    }

    if (type === 'multiple') {
      if (Array.isArray(defaultDate)) {
        return defaultDate.map(date => this.limitDateRange(date));
      }
      return [this.limitDateRange(now)];
    }

    if (!defaultDate || Array.isArray(defaultDate)) {
      defaultDate = now;
    }
    return this.limitDateRange(defaultDate);
  };

  // const [monthRefs, setMonthRefs] = useRefs();

  dayOffset = () => {
    return this.firstDayOfWeek ? this.firstDayOfWeek % 7 : 0;
  };

  months = () => {
    const months = [];
    const cursor = new Date(this.minDate);

    cursor.setDate(1);
    // console.log(cursor, this.maxDate, 'cursor, this.maxDate');
    do {
      months.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, this.maxDate) !== 1);

    return months;
  };

  buttonDisabled = () => {
    const { currentDate } = this;
    if (currentDate) {
      if (this.type === 'range') {
        return !currentDate[0] || !currentDate[1];
      }
      if (this.type === 'multiple') {
        return !currentDate.length;
      }
    }

    return !currentDate;
  };

  // calculate the position of the elements
  // and find the elements that needs to be rendered
  onScroll = () => {
    const top = getScrollTop(this.bodyRef);
    const bottom = top + this.bodyHeight;
    console.log(top, bottom, this.bodyHeight, this.months(), 'bottom2');
    const heights = this.months().map((item, index) => {
      // console.log(this.monthRefs, index, this.monthRefs[index].offsetHeight, 'agiajijfaij');
      return this.monthRefs[index].offsetHeight;
    });
    const heightSum = heights.reduce((a, b) => a + b, 0);
    console.log(heights, heightSum, 'heightSumheightSumheightSum');
    // iOS scroll bounce may exceed the range
    if (bottom > heightSum && top > 0) {
      return;
    }

    let height = 0;
    let currentMonth;
    const visibleRange = [-1, -1];

    for (let i = 0; i < this.months().length; i++) {
      const month = this.monthRefs[i];
      const visible = height <= bottom && height + heights[i] >= top;

      if (visible) {
        visibleRange[1] = i;

        if (!currentMonth) {
          currentMonth = month;
          visibleRange[0] = i;
        }

        if (!this.monthRefs[i].showed) {
          this.monthRefs[i].showed = true;
          // emit('month-show', {
          //   date: month.date,
          //   title: month.title,
          // });
        }
      }

      height += heights[i];
    }

    this.months().forEach((month, index) => {
      const visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
      this.monthRefs[index].setAttribute('visible', visible);
    });

    /* istanbul ignore else */
    //TODO,不知道要干嘛
    if (currentMonth) {
      // console.log(currentMonth, 'currentMonth');
      // this.subtitle = currentMonth.getTitle();
    }
  };

  scrollToDate = targetDate => {
    raf(() => {
      this.months().some((month, index) => {
        console.log(month, targetDate, 'month, targetDate');
        if (compareMonth(month, targetDate) === 0) {
          // monthRefs.value[index].scrollIntoView(this.bodyRef);
          return true;
        }

        return false;
      });

      this.onScroll();
    });
  };

  // scroll to current month
  scrollIntoView = () => {
    if (this.poppable && !this.show) {
      return;
    }

    const { currentDate } = this;
    if (currentDate) {
      const targetDate = this.type === 'single' ? currentDate : currentDate[0];
      this.scrollToDate(targetDate);
    } else {
      // raf(onScroll);
    }
  };

  init = () => {
    if (this.poppable && !this.show) {
      return;
    }

    raf(() => {
      // add Math.floor to avoid decimal height issues
      // https://github.com/youzan/vant/issues/5640
      this.bodyHeight = Math.floor(useRect(this.bodyRef).height);
      console.log(this.bodyRef, this.bodyHeight, useRect(this.bodyRef), 'agunajnai');
      this.scrollIntoView();
    });
  };

  reset = (date = this.getInitialDate()) => {
    this.currentDate = date;
    this.scrollIntoView();
  };

  checkRange = date => {
    const { maxRange, rangePrompt } = this;

    if (maxRange && calcDateNum(date) > maxRange) {
      // Toast(rangePrompt || t('rangePrompt', maxRange));
      return false;
    }

    return true;
  };

  onConfirm = () => {
    // emit('confirm', copyDates(this.currentDate));
  };

  select = (date, complete) => {
    const setCurrentDate = date => {
      console.log(date, 'datedatedate');
      this.currentDate = date;
      this.glueSelect.emit(copyDates(this.currentDate));
    };

    if (complete && this.type === 'range') {
      const valid = this.checkRange(date);

      if (!valid) {
        // auto selected to max range if showConfirm
        if (this.showConfirm) {
          setCurrentDate([date[0], getDayByOffset(date[0], this.maxRange - 1)]);
        } else {
          setCurrentDate(date);
        }
        return;
      }
    }

    setCurrentDate(date);

    if (complete && !this.showConfirm) {
      this.onConfirm();
    }
  };

  onClickDay = event => {
    console.log(event, 'eventfaea');
    let item = event.detail;
    if (this.readonly) {
      return;
    }

    const { date } = item;
    const { type } = this;
    const { currentDate } = this;

    if (type === 'range') {
      if (!currentDate) {
        this.select([date, null], null);
        return;
      }

      const [startDay, endDay] = currentDate;

      if (startDay && !endDay) {
        // console.log(date, startDay, 'date, startDay');
        const compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          this.select([startDay, date], true);
        } else if (compareToStart === -1) {
          this.select([date, null], null);
        } else if (this.allowSameDay) {
          this.select([date, date], true);
        }
      } else {
        this.select([date, null], null);
      }
    } else if (type === 'multiple') {
      if (!currentDate) {
        this.select([date], null);
        return;
      }

      let selectedIndex;
      const selected = this.currentDate.some((dateItem, index) => {
        // console.log(dateItem, date, 'date, startDay2');
        const equal = compareDay(dateItem, date) === 0;
        if (equal) {
          selectedIndex = index;
        }
        return equal;
      });

      if (selected) {
        const [unselectedDate] = this.currentDate.splice(selectedIndex, 1);
        this.glueUnselect.emit(copyDate(unselectedDate));
      } else if (this.maxRange && currentDate.length >= this.maxRange) {
        // Toast(this.rangePrompt || t('rangePrompt', this.maxRange));
      } else {
        this.select([...currentDate, date], null);
      }
    } else {
      this.select(date, true);
    }
  };

  togglePopup = val => {
    // emit('update:show', val);
  };

  renderMonth = (date, index) => {
    const showMonthTitle = index !== 0 || !this.showSubtitle;
    return (
      <glue-calendar-month
        ref={dom => {
          this.setMonthRefs(dom, index);
        }}
        date={date}
        currentDate={this.currentDate}
        showMonthTitle={showMonthTitle}
        firstDayOfWeek={this.dayOffset()}
        {...pick(this, ['type', 'color', 'minDate', 'maxDate', 'showMark', 'formatter', 'rowHeight', 'lazyRender', 'showSubtitle', 'allowSameDay'])}
        onGlueMonthClick={this.onClickDay}
      />
    );
  };

  renderFooterButton = () => {
    // if (slots.footer) {
    //   return slots.footer();
    // }

    if (this.showConfirm) {
      const text = this.buttonDisabled() ? this.confirmDisabledText : this.confirmText;

      return (
        <glue-button round block type="danger" class="glue-calendar__confirm" color={this.color} disabled={this.buttonDisabled()} nativeType="button" onClick={this.onConfirm}>
          {text}
        </glue-button>
      );
    }
  };

  renderFooter = () => <div class="glue-calendar__footer">{this.renderFooterButton()}</div>;
  renderCalendar = () => (
    <div class="glue-calendar">
      <glue-calendar-header title={this.title} showTitle={this.showTitle} subtitle={this.subtitle} showSubtitle={this.showSubtitle} firstDayOfWeek={this.dayOffset()} />
      <div
        class="glue-calendar__body"
        onScroll={this.onScroll}
        ref={dom => {
          this.bodyRef = dom;
        }}
      >
        {console.log(this.months(), 'this.months()')}
        {this.months().map(this.renderMonth)}
      </div>
      {this.renderFooter()}
    </div>
  );
  renderContent = () => {
    if (this.poppable) {
      return (
        <glue-popup
          show={this.show}
          class="glue-calendar__popup"
          round={this.round}
          position={this.position}
          closeable={this.showTitle || this.showSubtitle}
          teleport={this.teleport}
          closeOnPopstate={this.closeOnPopstate}
          closeOnClickOverlay={this.closeOnClickOverlay}
        >
          {this.renderCalendar()}
        </glue-popup>
      );
    }

    return this.renderCalendar();
  };
  componentWillLoad() {
    this.currentDate = this.getInitialDate();
    console.log(this.currentDate, 'this.currentDate');
  }
  componentDidLoad() {
    this.init();
  }
  render() {
    return <Host class={classNames('cunstom')}>{this.renderContent()}</Host>;
  }
}
