import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
import { RED } from '../../global/constant/constant';
@Component({
  tag: 'glue-contact-list',
  styleUrl: 'glue-contact-list.less',
  shadow: false,
})
export class GlueContactList {
  @Prop() list: any;
  @Prop() addText: string;
  @Prop() modelValue = null;
  @Prop() defaultTagText: string;
  renderItem = (item, index) => {
    const onClick = () => {
      // emit('update:modelValue', item.id);
      // emit('select', item, index);
    };

    const renderRightIcon = () => <glue-radio name={item.id} iconSize={16} checkedColor={RED} />;

    const renderEditIcon = () => (
      <glue-icon
        name="edit"
        class="glue-contact-list__edit"
        onClick={event => {
          event.stopPropagation();
          // emit('edit', item, index);
        }}
      />
    );

    const renderContent = () => {
      const nodes = [`${item.name}，${item.tel}`];

      if (item.isDefault && this.defaultTagText) {
        nodes.push(
          <glue-tag type="danger" round class="glue-contact-list__item-tag">
            {this.defaultTagText}
          </glue-tag>,
        );
      }

      return nodes;
    };

    return (
      <glue-cell
        v-slots={{
          'icon': renderEditIcon,
          'default': renderContent,
          'right-icon': renderRightIcon,
        }}
        key={item.id}
        isLink
        center
        class="glue-contact-list__item glue-contact-list__item-value"
        onClick={onClick}
      />
    );
  };
  render() {
    return (
      <Host class="glue-contact-list">
        <glue-radio-group model-value={this.modelValue} class="glue-contact-list__group">
          {this.list && this.list.map(this.renderItem)}
        </glue-radio-group>
        <div class="glue-contact-list__bottom">
          <glue-button
            round
            block
            type="danger"
            class="glue-contact-list__add"
            text={this.addText || '添加文本'}
            onClick={() => {
              // emit('add');
            }}
          />
        </div>
      </Host>
    );
  }
}
