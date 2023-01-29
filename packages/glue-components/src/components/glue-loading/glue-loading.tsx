import { Component, Prop, h, Host, Element } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
import { addUnit, getSizeStyle } from '../../utils/format/unit';
const [bem] = createNamespace('glue-loading');

export type LoadingType = 'circular' | 'spinner';
@Component({
  tag: 'glue-loading',
  styleUrl: 'glue-loading.less',
  shadow: false,
})
export class GlueLoading {
  @Element() el!: HTMLGlueLoadingElement;
  @Prop() size: string | number;
  @Prop() color: string;
  @Prop() text: string;
  @Prop() vertical: boolean;
  @Prop() textSize: string | number;
  @Prop() textColor: string;
  @Prop() type = 'circular';
  spinnerStyle = () => ({
    color: this.color,
    ...getSizeStyle(this.size),
  });
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
    if (this.text == '#slot') {
      return <slot name="text"></slot>;
    }
    return this.text;
  };
  renderloadText = () => {
    if (this.text) {
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
          {this.renderText()}
        </span>
      );
    }
  };
  render() {
    // const TagType = 'button';
    console.log(this.el, this.el.parentNode, this.el.parentElement, this.el.children, this, 'this.circularIcon');
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
          style={this.spinnerStyle()}
          class={classNames('glue-loading__spinner', {
            'glue-loading__spinner--spinner': this.type == 'spinner',
            'glue-loading__spinner--circular': this.type == 'circular',
          })}
        >
          {this.type === 'spinner' ? this.spinIcon() : this.circularIcon()}
        </span>
        {this.renderloadText()}
      </Host>
    );
  }
}
