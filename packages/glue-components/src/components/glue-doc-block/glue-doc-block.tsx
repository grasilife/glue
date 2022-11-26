import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-doc-block',
  styleUrl: 'glue-doc-block.less',
  shadow: false,
})
export class GlueDocBlock {
  @Prop() gtitle: string;
  @Prop() card: string;
  renderTitle = () => {
    console.log(this.gtitle, 'this.gtitle');
    if (this.gtitle) {
      return <h2 class="glue-doc-block__title">{this.gtitle}</h2>;
    }
  };
  renderCard = () => {
    if (this.card) {
      return (
        <h2 class="glue-doc-block__card">
          <slot />
        </h2>
      );
    } else {
      return <slot />;
    }
  };
  render() {
    return (
      <Host class={classNames('glue-doc-block')}>
        {this.renderTitle()}
        {this.renderCard()}
      </Host>
    );
  }
}
