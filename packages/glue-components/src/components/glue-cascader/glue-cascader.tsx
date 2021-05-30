import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { pick } from '../../utils/base';
import { getScrollTop } from '../../utils/dom/scroll';
import { raf } from '../../utils/animation';
import { copyDate, copyDates, getPrevDay, getNextDay, compareDay, calcDateNum, compareMonth, getDayByOffset } from '../glue-calendar/utils';
@Component({
  tag: 'glue-cascader',
  styleUrl: 'glue-cascader.less',
  shadow: false,
})
export class GlueCascader {
  @Prop() first: string;
  @Prop() show: boolean;
  @Prop() title: string;
  @Prop() color: string;
  @Prop() readonly: boolean;
  @Prop() teleport: any;
  @Prop() formatter: any;
  @Prop() rowHeight: number | string;
  @Prop() confirmText: string;
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
  @Prop() maxDate = new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate());
  @Prop() firstDayOfWeek: any = 0;
  @State() subtitle;
  @State() currentDate: any;
  bodyRef;
  bodyHeight;
  monthRefs;
  setMonthRefs;
  limitDateRange = (date, minDate = this.minDate, maxDate = this.maxDate) => {
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

    const heights = this.months().map((item, index) => this.monthRefs[index].getHeight());
    const heightSum = heights.reduce((a, b) => a + b, 0);

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
      this.monthRefs[index].setVisible(visible);
    });

    /* istanbul ignore else */
    if (currentMonth) {
      this.subtitle = currentMonth.getTitle();
    }
  };

  scrollToDate = targetDate => {
    raf(() => {
      this.months().some((month, index) => {
        if (compareMonth(month, targetDate) === 0) {
          // monthRefs.value[index].scrollIntoView(bodyRef.value);
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
      // bodyHeight = Math.floor(useRect(bodyRef).height);
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
      this.currentDate = date;
      // emit('select', copyDates(this.currentDate));
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

  onClickDay = item => {
    if (this.readonly) {
      return;
    }

    const { date } = item;
    const { type } = this;
    const { currentDate } = this;

    if (type === 'range') {
      if (!currentDate) {
        // select([date, null]);
        return;
      }

      const [startDay, endDay] = currentDate;

      if (startDay && !endDay) {
        const compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          // select([startDay, date], true);
        } else if (compareToStart === -1) {
          // select([date, null]);
        } else if (this.allowSameDay) {
          // select([date, date], true);
        }
      } else {
        // select([date, null]);
      }
    } else if (type === 'multiple') {
      if (!currentDate) {
        // select([date]);
        return;
      }

      let selectedIndex;
      const selected = this.currentDate.some((dateItem, index) => {
        const equal = compareDay(dateItem, date) === 0;
        if (equal) {
          selectedIndex = index;
        }
        return equal;
      });

      if (selected) {
        const [unselectedDate] = this.currentDate.splice(selectedIndex, 1);
        // emit('unselect', copyDate(unselectedDate));
      } else if (this.maxRange && currentDate.length >= this.maxRange) {
        // Toast(this.rangePrompt || t('rangePrompt', this.maxRange));
      } else {
        // this.select([...currentDate, date]);
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
      <glue-cascader-month
        date={date}
        currentDate={this.currentDate}
        showMonthTitle={showMonthTitle}
        firstDayOfWeek={this.dayOffset()}
        {...pick(this, ['type', 'color', 'minDate', 'maxDate', 'showMark', 'formatter', 'rowHeight', 'lazyRender', 'showSubtitle', 'allowSameDay'])}
        onClick={this.onClickDay}
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
        <glue-button round block type="danger" class="glue-cascader__confirm" color={this.color} disabled={this.buttonDisabled()} nativeType="button" onClick={this.onConfirm}>
          {text}
        </glue-button>
      );
    }
  };

  renderFooter = () => <div class="glue-cascader__footer">{this.renderFooterButton()}</div>;
  renderCalendar = () => (
    <div class="glue-cascader__popup">
      <glue-cascader-header title={this.title} showTitle={this.showTitle} subtitle={this.subtitle} showSubtitle={this.showSubtitle} firstDayOfWeek={this.dayOffset()} />
      <div class="glue-cascader__body" onScroll={this.onScroll}>
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
          class="glue-cascader__popup"
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
  render() {
    return <Host class={classNames('cunstom')}>{this.renderContent()}</Host>;
  }
}
