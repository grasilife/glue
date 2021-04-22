import { Component, Prop, h, Host, State, Watch, Method } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
// import classNames from 'classnames';
@Component({
  tag: 'glue-progress',
  styleUrl: 'glue-progress.less',
  shadow: false,
})
export class GlueProgress {
  @Prop() color: string;
  @Prop() inactive: boolean;
  @Prop() pivotText: string;
  @Prop() textColor: string;
  @Prop() pivotColor: string;
  @Prop() trackColor: string;
  @Prop() strokeWidth: number;
  @Prop() percentage: number;
  @Prop() showPivot = false;
  @State() rootWidth = 0;
  @State() pivotWidth = 0;
  root: HTMLElement;
  pivotRef: HTMLElement;
  @Watch('showPivot')
  showPivotHandle() {
    this._resize();
  }
  @Watch('pivotText')
  pivotTextHandle() {
    this._resize();
  }
  renderPivot = () => {
    const { rootWidth, pivotWidth } = this;
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
  @Method()
  async resize() {
    this._resize();
  }
  _resize = () => {
    this.rootWidth = this.root ? this.root.offsetWidth : 0;
    this.pivotWidth = this.pivotRef ? this.pivotRef.offsetWidth : 0;
  };
  componentDidLoad() {
    this._resize();
  }
  render() {
    const { trackColor, percentage, strokeWidth } = this;
    const rootStyle = {
      background: trackColor,
      height: addUnit(strokeWidth),
    };
    const portionStyle = {
      background: this.background(),
      width: (this.rootWidth * +percentage) / 100 + 'px',
    };
    return (
      <Host
        ref={dom => {
          this.root = dom;
        }}
        class="glue-progress"
        style={rootStyle}
      >
        <span class="glue-progress__portion" style={portionStyle}>
          {this.renderPivot()}
        </span>
      </Host>
    );
  }
}
