import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-calendar-day');
@Component({
  tag: 'glue-calendar-day',
  styleUrl: 'glue-calendar-day.less',
  shadow: false,
})
export class GlueCalendarDay {
  @Prop() first: string;
  @Prop() item: any;
  @Prop() color: string;
  @Prop() index: number;
  @Prop() offset: number;
  @Prop() rowHeight: string;
  @Event() glueDayClick: EventEmitter;
  clickHandle = event => {
    console.log(this.item.type, 'this.item.type');
    if (this.item.type !== 'disabled') {
      this.glueDayClick.emit(event);
    }
  };
  style = () => {
    const { item, index, color, offset, rowHeight } = this;
    const style = {
      width: '',
      height: rowHeight,
      marginLeft: '',
      background: '',
      color: '',
    };

    if (item.type === 'placeholder') {
      style.width = '100%';
      return style;
    }

    if (index === 0) {
      style.marginLeft = `${(100 * offset) / 7}%`;
    }

    if (color) {
      switch (item.type) {
        case 'end':
        case 'start':
        case 'start-end':
        case 'multiple-middle':
        case 'multiple-selected':
          style.background = color;
          break;
        case 'middle':
          style.color = color;
          break;
      }
    }

    return style;
  };

  renderContent = () => {
    const { item, color, rowHeight } = this;
    const { type, text, topInfo, bottomInfo } = item;

    const TopInfo = topInfo && <div class="glue-calendar-day__top-info">{topInfo}</div>;

    const BottomInfo = bottomInfo && <div class="glue-calendar-day__bottom-info">{bottomInfo}</div>;

    const Nodes = [TopInfo, text, BottomInfo];
    // console.log(type, 'type');
    if (type === 'selected') {
      return (
        <div
          class="glue-calendar-day__selected-day"
          style={{
            width: rowHeight,
            height: rowHeight,
            background: color,
          }}
        >
          {Nodes}
        </div>
      );
    }

    return Nodes;
  };
  componentDidLoad() {
    console.log(this.item, 'dayhsihsuh');
  }
  render() {
    const { type, className } = this.item;
    return (
      <Host
        role="gridcell"
        style={this.style()}
        class={classNames(bem([type, className]), 'glue-calendar-day')}
        tabindex={type === 'disabled' ? null : -1}
        onClick={this.clickHandle}
      >
        {this.renderContent()}
      </Host>
    );
  }
}
