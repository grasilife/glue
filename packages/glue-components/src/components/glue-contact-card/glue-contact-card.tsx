import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-contact-card');
@Component({
  tag: 'glue-contact-card',
  styleUrl: 'glue-contact-card.less',
  shadow: false,
})
export class GlueContactCard {
  @Prop() tel: string;

  @Prop() name: string;
  @Prop() addText: string;
  @Prop() editable = true;
  @Prop() type = 'add';
  onClick = event => {
    if (this.editable) {
      // emit('click', event);
    }
  };

  renderContent = () => {
    if (this.type === 'add') {
      return this.addText || '添加文本';
    }

    return [<div>{`名字：${this.name}`}</div>, <div>{`电话：${this.tel}`}</div>];
  };
  render() {
    return (
      <Host>
        <glue-cell
          center
          icon={this.type === 'edit' ? 'contact' : 'add-square'}
          class={classNames(bem([this.type]))}
          border={false}
          isLink={this.editable}
          valueClass="glue-contact-card__value"
          onClick={this.onClick}
        >
          {this.renderContent()}
        </glue-cell>
      </Host>
    );
  }
}
