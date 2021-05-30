import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-cascader-header',
  styleUrl: 'glue-cascader-header.less',
  shadow: false,
})
export class GlueCascaderHeader {
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
      return <div class="glue-cascader-header__header-title">{title}</div>;
    }
  };

  renderSubtitle = () => {
    if (this.showSubtitle) {
      return <div class="glue-cascader-header__header-subtitle">{this.subtitle}</div>;
    }
  };

  renderWeekDays = () => {
    const { firstDayOfWeek } = this;
    const weekdays = 'weekdays';
    const renderWeekDays = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];

    return (
      <div class="glue-cascader-header__weekdays">
        {renderWeekDays.map(text => (
          <span class="glue-cascader-header__weekday">{text}</span>
        ))}
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-cascader-header__header">
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderWeekDays()}
      </Host>
    );
  }
}
