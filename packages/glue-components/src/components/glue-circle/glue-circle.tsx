import { Component, Prop, h, Host, Watch, EventEmitter, Event } from '@stencil/core';
import { getSizeStyle } from '../../utils/format/unit';
import { isObject } from '../../utils/base';
let uid = 0;
const id = `glue-circle-${uid++}`;
// function format(rate: string | number) {
//   return Math.min(Math.max(+rate, 0), 100);
// }

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${viewBoxSize / 2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}
import classNames from 'classnames';

@Component({
  tag: 'glue-circle',
  styleUrl: 'glue-circle.less',
  shadow: false,
})
export class GlueCircle {
  @Prop() text: string;

  @Prop() size: string;

  @Prop() color: string;
  @Prop() layerColor: string;
  @Prop() strokeLinecap: string;
  @Prop() currentRate = 0;
  @Prop() speed = 0;
  @Prop() fill = 'none';
  @Prop() rate = 100;
  @Prop() strokeWidth = 40;
  @Prop() clockwise = true;
  @Event() change: EventEmitter;
  @Watch('rate')
  watchHandler(newValue) {
    this.change.emit(newValue);
  }
  viewBoxSize = () => this.strokeWidth + 1000;
  path = () => getPath(this.clockwise, this.viewBoxSize());
  renderGradient = () => {
    const { color } = this;

    if (!isObject(color)) {
      return;
    }

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      .map((key, index) => <stop key={index} offset={key} stop-color={color[key]} />);

    return (
      <defs>
        <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="0%">
          {Stops}
        </linearGradient>
      </defs>
    );
  };

  renderText = () => {
    if (this.text) {
      return <div class={classNames('glue-circle__text')}>{this.text}</div>;
    }
  };
  renderLayer = () => {
    const style = {
      fill: this.fill,
      stroke: this.layerColor,
      strokeWidth: `${this.strokeWidth}px`,
    };

    return <path class={classNames('glue-circle__layer')} style={style} d={this.path()} />;
  };
  renderHover = () => {
    const PERIMETER = 3140;
    const { strokeWidth, currentRate, strokeLinecap } = this;
    let { color } = this;
    const offset = (PERIMETER * currentRate) / 100;
    color = isObject(color) ? `url(#${id})` : color;
    const style = {
      stroke: `${color}`,
      strokeWidth: `${+strokeWidth + 1}px`,
      strokeLinecap,
      strokeDasharray: `${offset}px ${PERIMETER}px`,
    };

    return <path d={this.path()} style={style} class={classNames('glue-circle__hover')} stroke={color} />;
  };
  render() {
    let ppp = this.viewBoxSize();
    console.log(ppp, 'pppp');
    return (
      <Host class="glue-circle" style={getSizeStyle(this.size)}>
        <svg viewBox={`0 0 ${this.viewBoxSize()} ${this.viewBoxSize()}`}>
          {this.renderGradient()}
          {this.renderLayer()}
          {this.renderHover()}
        </svg>
        {this.renderText()}
      </Host>
    );
  }
}
