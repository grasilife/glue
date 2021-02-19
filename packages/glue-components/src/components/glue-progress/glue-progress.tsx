import { Component, Prop, h, Host, State } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
// import classNames from 'classnames';
@Component({
  tag: 'glue-progress',
  styleUrl: 'glue-progress.less',
  shadow: false,
})
export class GlueProgress {
  @Prop() color: string;

  @Prop() inactive: string;

  @Prop() pivotText: string;
  @Prop() textColor: string;
  @Prop() pivotColor: string;
  @Prop() trackColor: string;
  @Prop() strokeWidth: string;
  @Prop() percentage: string;
  @Prop() showPivot = true;
  @State() state = {
    rootWidth: 0,
    pivotWidth: 0,
  };
  @State() portionStyle = {
    background: '',
    width: '0px',
  };
  @State() rootStyle = {
    background: '',
    height: '0px',
  };
  root: HTMLElement;
  pivotRef: HTMLElement;
  renderPivot = () => {
    const { rootWidth, pivotWidth } = this.state;
    const { textColor, pivotText, pivotColor, percentage } = this;
    const text = pivotText ?? `${percentage}%`;
    const show = this.showPivot && text;

    if (show) {
      const left = ((rootWidth - pivotWidth) * +percentage) / 100;
      const style = {
        color: textColor,
        left: `${left}px`,
        background: pivotColor || this.background(),
      };

      return (
        <span
          ref={dom => {
            this.pivotRef = dom;
          }}
          style={style}
          class="glue-progress__pivot"
        >
          {text}
        </span>
      );
    }
  };
  background = () => (this.inactive ? '#cacaca' : this.color);
  resize = () => {
    this.state.rootWidth = this.root ? this.root.offsetWidth : 0;
    this.state.pivotWidth = this.pivotRef ? this.pivotRef.offsetWidth : 0;
    console.log(this.state.rootWidth, 'this.root');

    this.rootStyle = {
      background: this.trackColor,
      height: addUnit(this.strokeWidth),
    };
    this.portionStyle = {
      background: this.background(),
      width: (this.state.rootWidth * +this.percentage) / 100 + 'px',
    };
  };
  componentDidLoad() {
    this.resize();
  }
  render() {
    // const { trackColor, percentage, strokeWidth } = this;

    return (
      <Host
        ref={dom => {
          this.root = dom;
        }}
        class="glue-progress"
        style={this.rootStyle}
      >
        <span class="glue-progress__portion" style={this.portionStyle}>
          {this.renderPivot()}
        </span>
      </Host>
    );
  }
}
