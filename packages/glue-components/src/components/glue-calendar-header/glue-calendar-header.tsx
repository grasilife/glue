import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-calendar-header',
  styleUrl: 'glue-calendar-header.less',
  shadow: false,
})
export class GlueCalendarHeader {
  @Prop() first: string;
  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() showTitle: boolean;
  @Prop() showSubtitle: boolean;
  @Prop() firstDayOfWeek: number;
  renderTitle = () => {
    if (this.showTitle) {
      const text = this.title || 'title';
      const title = text;
      return <div class="glue-calendar-header-title">{title}</div>;
    }
  };

  renderSubtitle = () => {
    if (this.showSubtitle) {
      return <div class="glue-calendar-header-subtitle">{this.subtitle}</div>;
    }
  };

  renderWeekDays = () => {
    const { firstDayOfWeek } = this;
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const renderWeekDays = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];

    return (
      <div class="glue-calendar-header__weekdays">
        {renderWeekDays.map(text => (
          <span class="glue-calendar-header__weekday">{text}</span>
        ))}
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-calendar-header">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderWeekDays()}
      </Host>
    );
  }
}
