import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
@Component({
  tag: 'glue-address-list',
  styleUrl: 'glue-address-list.less',
  shadow: false,
})
export class GlueAddressList {
  @Prop() list: any;
  @Prop() modelValue: string | number;
  @Prop() disabledList: any;
  @Prop() disabledText: string;
  @Prop() addButtonText: string;
  @Prop() defaultTagText: string;
  @Prop() switchable = true;
  renderItem = (item, index, disabled) => {
    const onEdit = () => {
      console.log(onEdit);
      const name = disabled ? 'edit-disabled' : 'edit';
      console.log(name, item, index);
      // emit(name, item, index);
    };

    // const onClick = () => {
    //   // emit('click-item', item, index);
    // };

    // const onSelect = () => {
    //   // const name = disabled ? 'select-disabled' : 'select';
    //   // emit(name, item, index);

    //   if (!disabled) {
    //     // emit('update:modelValue', item.id);
    //   }
    // };

    // return (
    //   <AddressItem
    //     v-slots={{
    //       bottom: slots['item-bottom'],
    //     }}
    //     key={item.id}
    //     data={item}
    //     disabled={disabled}
    //     switchable={this.switchable}
    //     defaultTagText={this.defaultTagText}
    //     onEdit={onEdit}
    //     onClick={onClick}
    //     onSelect={onSelect}
    //   />
    // );
  };

  renderList = (list, disabled) => {
    if (list) {
      return list.map((item, index) => this.renderItem(item, index, disabled));
    }
  };

  renderBottom = () => {
    const onClick = () => {
      // emit('add');
    };

    return (
      <div class="glue-address-list__bottom">
        <glue-button round block type="danger" text={this.addButtonText || '添加'} class="glue-address-list__add" onClick={onClick} />
      </div>
    );
  };
  render() {
    // const List = renderList(this.list);
    const DisabledList = this.renderList(this.disabledList, true);
    const DisabledText = this.disabledText && <div class="glue-address-list__disabled-text">{this.disabledText}</div>;

    return (
      <Host class="glue-address-list">
        {/* {slots.top?.()} */}
        {/* <glue-radio-group modelValue={this.modelValue}>{List}</glue-radio-group> */}
        {DisabledText}
        {DisabledList}
        {/* {slots.default?.()} */}
        {this.renderBottom()}
      </Host>
    );
  }
}
