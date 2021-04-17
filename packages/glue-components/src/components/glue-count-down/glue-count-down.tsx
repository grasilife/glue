import { Component, Prop, h, Host, State, Watch, EventEmitter, Event, Method } from '@stencil/core';
import { parseFormat } from './utils';
import { useCountDown } from '../../utils/useCountDown';
// import classNames from 'classnames';

@Component({
  tag: 'glue-count-down',
  styleUrl: 'glue-count-down.less',
  shadow: false,
})
export class GlueCountDown {
  @Prop() millisecond: boolean;
  @Prop() custom: boolean;
  @Prop() time = 0;
  @Prop() format = 'HH:mm:ss';
  @Prop() autoStart = false;
  @State() currentTime;
  @State() formatCurrentTime;
  @State() countDownVm;
  @Watch('currentTime')
  currentHandle(newValue) {
    console.log(434343);
    //将时间戳格式化
    this.formatCurrentTime = this.timeText(newValue);
    this.changeHandle({
      currentTime: this.currentTime,
      formatCurrentTime: this.formatCurrentTime,
    });
  }
  useCountDown = () => {
    let vm = this;
    return useCountDown({
      time: +vm.time,
      millisecond: vm.millisecond,
      onChange(currentTime) {
        console.log(currentTime, 'current2121');
        vm.currentTime = currentTime;
      },
      onFinish() {
        vm.glueFinish.emit();
      },
    });
  };
  timeText = currentTime => {
    return parseFormat(this.format, currentTime);
  };
  @Method()
  async start() {
    this.countDownVm.start();
  }
  @Method()
  async pause() {
    this.countDownVm.pause();
  }
  @Method()
  async reset() {
    this.countDownVm.reset(this.time);
    if (this.autoStart) {
      this.countDownVm.start();
    }
  }
  @Event() glueChange: EventEmitter;
  @Event() glueFinish: EventEmitter;
  changeHandle = data => {
    this.glueChange.emit(data);
  };
  componentWillLoad() {
    this.countDownVm = this.useCountDown();
    this.currentTime = this.countDownVm.current();
    if (this.autoStart) {
      this.countDownVm.start();
    }
  }
  componentDidLoad() {}
  offlineedCallback() {
    this.pause();
  }
  renderTime = () => {
    if (this.custom) {
      return <slot></slot>;
    } else {
      return this.formatCurrentTime;
    }
  };
  render() {
    console.log(this, 'hauhauhfu');
    return <Host class="glue-count-down">{this.renderTime()}</Host>;
  }
}
