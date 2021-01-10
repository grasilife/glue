import { Component, Prop, h, State, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
import { getSizeStyle, addUnit } from '../../utils/format/unit';
const [bem] = createNamespace('glue-loading');

export type LoadingType = 'circular' | 'spinner';
@Component({
  tag: 'glue-loading',
  styleUrl: 'glue-loading.less',
  shadow: false,
})
export class GlueLoading {
  @Prop() size: string | number;

  @Prop() color: string;

  @Prop() vertical: boolean;
  @Prop() textSize: string | number;
  @Prop() textColor: string;
  @Prop() type = 'circular';
  @State() spinnerStyle = {};
  componentDidLoad() {
    this.spinnerStyle = {
      color: this.color,
      ...getSizeStyle(this.size),
    };
  }
  spinIcon = () => {
    const SpinIcon = [];
    for (let i = 0; i < 12; i++) {
      SpinIcon.push(<i />);
    }
    return SpinIcon;
  };
  circularIcon = () => {
    return (
      <svg
        class={classNames({
          'glue-loading__circular': true,
        })}
        viewBox="25 25 50 50"
      >
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    );
  };
  renderText = () => {
    return (
      <span
        class={classNames({
          'glue-loading__text': true,
        })}
        style={{
          fontSize: addUnit(this.textSize),
          color: this.color,
        }}
      >
        <slot></slot>
      </span>
    );
  };
  //TODO:type==spinner时没动画效果
  render() {
    console.log(this.circularIcon, 'this.circularIcon');
    return (
      <Host
        class={classNames(
          'glue-loading',
          {
            'glue-loading--vertical': this.vertical,
          },
          bem([this.type]),
        )}
      >
        <span
          style={{ color: this.color }}
          class={classNames('glue-loading__spinner', {
            'glue-loading__spinner--spinner': this.type == 'spinner',
            'glue-loading__spinner--circular': this.type == 'circular',
          })}
        >
          {this.type === 'spinner' ? this.spinIcon() : this.circularIcon()}
        </span>
        {this.renderText()}
      </Host>
    );
  }
}
