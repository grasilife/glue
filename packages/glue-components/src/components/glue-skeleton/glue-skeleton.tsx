import { Component, Prop, h, Host } from '@stencil/core';
import { getSizeStyle, addUnit } from '../../utils/format/unit';
import classNames from 'classnames';
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';
@Component({
  tag: 'glue-skeleton',
  styleUrl: 'glue-skeleton.less',
  shadow: false,
})
export class GlueSkeleton {
  @Prop() titleState: boolean;

  @Prop() round: boolean;

  @Prop() avatar: boolean;
  @Prop() avatarSize: number;
  @Prop() titleWidth: string | number;
  @Prop() row: string | number = 0;
  @Prop() loading = false;
  @Prop() animateState = false;
  @Prop() avatarShape = 'round';
  @Prop() rowWidth = DEFAULT_ROW_WIDTH;
  renderAvatar = () => {
    if (this.avatar) {
      return (
        <div
          class={classNames({
            'glue-skeleton__avatar': true,
            'glue-skeleton__avatar--round': this.avatarShape == 'round',
          })}
          style={getSizeStyle(this.avatarSize)}
        />
      );
    }
  };

  renderTitle = () => {
    if (this.titleState) {
      return <h3 class="glue-skeleton__title" style={{ width: addUnit(this.titleWidth) }} />;
    }
  };

  getRowWidth = (index: number) => {
    const { rowWidth } = this;

    if (rowWidth === DEFAULT_ROW_WIDTH && index === +this.row - 1) {
      return DEFAULT_LAST_ROW_WIDTH;
    }

    if (Array.isArray(rowWidth)) {
      return rowWidth[index];
    }

    return rowWidth;
  };

  renderRows = () => {
    const Rows = [];

    for (let i = 0; i < this.row; i++) {
      Rows.push(<div class="glue-skeleton__row" style={{ width: addUnit(this.getRowWidth(i)) }} />);
    }

    return Rows;
  };
  render() {
    return (
      <Host>
        <div
          style={{ display: this.loading ? 'flex' : 'none' }}
          class={classNames('glue-skeleton', {
            'glue-skeleton--animate': this.animateState,
            'glue-skeleton--round': this.round,
          })}
        >
          {this.renderAvatar()}
          <div class="glue-skeleton__content">
            {this.renderTitle()}
            {this.renderRows()}
          </div>
        </div>
        <div style={{ display: !this.loading ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
