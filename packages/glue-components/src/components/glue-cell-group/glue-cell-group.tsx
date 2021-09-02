import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-cell-group',
  styleUrl: 'glue-cell-group.less',
  shadow: false,
})
export class GlueCellGroup {
  @Prop() g_title: string;

  @Prop() border = true;
  renderGroup = () => {
    return (
      <div class="glue-cell-group__content">
        <slot></slot>
      </div>
    );
  };
  renderTitle = () => {
    if (this.g_title) {
      return (
        <div class={classNames('glue-cell-group__title')}>{this.g_title}</div>
      );
    }
  };

  render() {
    return (
      <Host class={classNames('glue-cell-group')}>
        {this.renderTitle()}
        {this.renderGroup()}
      </Host>
    );
  }
}
