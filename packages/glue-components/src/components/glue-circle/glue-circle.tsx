import {
  Component,
  Prop,
  h,
  Host,
  Watch,
  EventEmitter,
  Event,
} from '@stencil/core';
import { getSizeStyle } from '../../utils/format/unit';
import { isObject } from '../../utils/base';
import { raf, cancelRaf } from '../../utils/animation';
let uid = 0;
const id = `glue-circle-${uid++}`;
function format(rate: string | number) {
  return Math.min(Math.max(+rate, 0), 100);
}

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  console.log(sweepFlag, clockwise, 'sweepFlag');
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
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
  @Prop() lineColor: string | object;
  @Prop() layerColor: string;
  @Prop() strokeLinecap: string;
  @Prop({ mutable: true }) currentRate = 0;
  @Prop() speed = 0;
  @Prop() fill = 'none';
  @Prop() rate = 100;
  @Prop() strokeWidth = 40;
  @Prop() clockwise?: boolean = false;
  @Event() glueChange: EventEmitter;
  changeHandle = (event) => {
    this.glueChange.emit(event);
  };
  @Watch('rate')
  watchHandler(rate) {
    let rafId;
    const startTime = Date.now();
    const startRate = this.currentRate;
    const endRate = format(rate);
    const duration = Math.abs(((startRate - endRate) * 1000) / +this.speed);

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const rate = progress * (endRate - startRate) + startRate;
      console.log(rate, 'rate');
      this.currentRate = format(parseFloat(rate.toFixed(1)));
      this.changeHandle(this.currentRate);
      if (endRate > startRate ? rate < endRate : rate > endRate) {
        rafId = raf(animate);
      }
    };

    if (this.speed) {
      if (rafId) {
        cancelRaf(rafId);
      }
      rafId = raf(animate);
      console.log(rafId, 'rafId');
    } else {
      this.currentRate = endRate;
      this.changeHandle(endRate);
    }
  }
  viewBoxSize = () => this.strokeWidth + 1000;
  path = () => getPath(this.clockwise, this.viewBoxSize());
  renderGradient = () => {
    const { lineColor } = this;

    if (!isObject(lineColor)) {
      return;
    }

    const Stops = Object.keys(lineColor)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      .map((key, index) => (
        <stop key={index} offset={key} stop-color={lineColor[key]} />
      ));

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

    return (
      <path
        class={classNames('glue-circle__layer')}
        style={style}
        d={this.path()}
      />
    );
  };
  renderHover = () => {
    const PERIMETER = 3140;
    const { strokeWidth, currentRate, strokeLinecap } = this;
    let { lineColor } = this;
    const offset = (PERIMETER * currentRate) / 100;
    let color = isObject(lineColor) ? `url(#${id})` : lineColor;
    const style = {
      stroke: `${color}`,
      strokeWidth: `${+strokeWidth + 1}px`,
      strokeLinecap,
      strokeDasharray: `${offset}px ${PERIMETER}px`,
    };

    return (
      <path
        d={this.path()}
        style={style}
        class={classNames('glue-circle__hover')}
        stroke={color}
      />
    );
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
