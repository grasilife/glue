import { Component, Prop, h } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
import classNames from 'classnames';
export type GridDirection = 'horizontal' | 'vertical';
@Component({
  tag: 'glue-grid-item',
  styleUrl: 'glue-grid-item.less',
  shadow: false,
})
export class GlueGridItem {
  @Prop() dot: boolean;
  @Prop() text: string;
  @Prop() icon: string;
  @Prop() badge: string | number;
  @Prop() iconPrefix: string;
  @Prop() square?: boolean;
  @Prop() gutter: number | string;
  @Prop() columnNum: number | string;
  @Prop() direction: GridDirection;
  @Prop() clickable: boolean;
  @Prop() border: boolean;
  @Prop() center: boolean;
  @Prop() iconSize: number;
  rootStyle = () => {
    const { square, gutter, columnNum } = this;
    const percent = `${100 / +columnNum}%`;
    const style = {
      flexBasis: percent,
      paddingTop: '',
      paddingRight: '',
      marginTop: '',
    };

    if (square) {
      style.paddingTop = percent;
    } else if (gutter) {
      const gutterValue = addUnit(gutter);
      style.paddingRight = gutterValue;

      // if (index.value >= columnNum) {
      //   style.marginTop = gutterValue;
      // }
    }

    return style;
  };
  contentStyle = () => {
    const { square, gutter } = this;

    if (square && gutter) {
      const gutterValue = addUnit(gutter);
      return {
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto',
      };
    }
  };

  renderIcon = () => {
    // if (slots.icon) {
    //   return (
    //     <glue-badge dot={this.dot} content={this.badge}>
    //       {slots.icon()}
    //     </glue-badge>
    //   );
    // }

    if (this.icon) {
      return <glue-icon dot={this.dot} name={this.icon} size={this.iconSize} badge={this.badge} class="glue-grid-item__icon" classPrefix={this.iconPrefix} />;
    }
  };

  renderText = () => {
    if (this.text) {
      return <span class="glue-grid-item__text">{this.text}</span>;
    }
  };

  renderContent = () => {
    return [this.renderIcon(), this.renderText()];
  };
  render() {
    const { center, border, square, gutter, direction, clickable } = this;
    return (
      <div
        class={classNames({
          'glue-grid-item__direction': direction,
          'glue-grid-item__square': square,
          'glue-grid-item__center': center,
          'glue-grid-item__clickable': clickable,
          'glue-grid-item__surround': border && gutter,
        })}
        style={this.rootStyle()}
      >
        <div
          class={classNames({
            'glue-grid-item__square': square,
          })}
          style={this.contentStyle()}
          tabindex={clickable ? 0 : undefined}
        >
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
