import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-address-list-item',
  styleUrl: 'glue-address-list-item.less',
  shadow: false,
})
export class GlueAddressListItem {
  @Prop() data: any;
  @Prop() disabled: boolean;
  @Prop() switchable: boolean;
  @Prop() defaultTagText: string;
  onClick = () => {
    if (this.switchable) {
      // emit('select');
    }
    // emit('click');
  };

  renderRightIcon = () => (
    <glue-icon
      name="edit"
      class="glue-address-list-item__edit"
      onClick={event => {
        event.stopPropagation();
        // emit('edit');
        // emit('click');
      }}
    ></glue-icon>
  );

  renderTag = () => {
    if (this.data.isDefault && this.defaultTagText) {
      return (
        <glue-tag type="danger" round class="glue-address-list-item__tag">
          {this.defaultTagText}
        </glue-tag>
      );
    }
  };

  renderContent = () => {
    const { data, disabled, switchable } = this;

    const Info = [
      <div class="glue-address-list-item__name">
        {`${data.name} ${data.tel}`}
        {this.renderTag()}
      </div>,
      <div class="glue-address-list-item__address">{data.address}</div>,
    ];

    if (switchable && !disabled) {
      // return (
      //   <glue-radio name={data.id} iconSize={18}>
      //     {Info}
      //   </glue-radio>
      // );
    }

    return Info;
  };
  render() {
    const { disabled } = this;
    return (
      <Host
        class={classNames({
          'glue-address-list-item--disabled': disabled,
        })}
        onClick={this.onClick}
      >
        <glue-cell
          v-slots={{
            'default': this.renderContent,
            'right-icon': this.renderRightIcon,
          }}
          border={false}
          valueClass={'glue-address-list-item__value'}
        />
        {/* {slots.bottom?.({ ...this.data, disabled })} */}
      </Host>
    );
  }
}
