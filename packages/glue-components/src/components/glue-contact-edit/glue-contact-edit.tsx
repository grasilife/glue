import { Component, Prop, h, Host, State } from '@stencil/core';
// import classNames from 'classnames';
import { isMobile } from '../../utils/validate/mobile';
const DEFAULT_CONTACT = {
  tel: '',
  name: '',
};
@Component({
  tag: 'glue-contact-edit',
  styleUrl: 'glue-contact-edit.less',
  shadow: false,
})
export class GlueContactEdit {
  @Prop() isEdit: boolean;
  @Prop() isSaving: boolean;
  @Prop() isDeleting: boolean;
  @Prop() showSetDefault: boolean;
  @Prop() setDefaultLabel: string;
  @Prop() contactInfo = { ...DEFAULT_CONTACT };
  @Prop() telValidator = isMobile;
  @State() contact = {
    ...DEFAULT_CONTACT,
    ...this.contactInfo,
  };

  onSave = () => {
    if (!this.isSaving) {
      // emit('save', contact);
    }
  };

  onDelete = () => {
    // Dialog.confirm({
    //   title: t('confirmDelete'),
    // }).then(() => {
    //   emit('delete', contact);
    // });
  };

  renderButtons = () => (
    <div class="glue-contact-edit__buttons">
      <glue-button
        block
        round
        type="danger"
        text="保存"
        loading={this.isSaving}
        nativeType="submit"
      />
      {this.isEdit && (
        <glue-button
          block
          round
          text="删除"
          loading={this.isDeleting}
          onClick={this.onDelete}
        />
      )}
    </div>
  );

  renderSwitch = () => (
    <glue-switch
      model-value={this.contact}
      size={24}
      onChange={(event) => {
        console.log(event);
        // emit('change-default', event);
      }}
    />
  );

  renderSetDefault = () => {
    if (this.showSetDefault) {
      return (
        <glue-cell
          v-slots={{ 'right-icon': this.renderSwitch }}
          title={this.setDefaultLabel}
          class="glue-contact-edit__switch-cell"
          border={false}
        />
      );
    }
  };
  render() {
    return (
      <Host>
        <glue-form class="glue-contact-edit" onSubmit={this.onSave}>
          <div class="glue-contact-edit__fields">
            <glue-field
              v-model={this.contact.name}
              clearable
              label="名字"
              rules={[{ required: true, message: '名称无效' }]}
              maxlength="30"
              placeholder={'空'}
            />
            <glue-field
              v-model={this.contact.tel}
              clearable
              type="tel"
              label="电话"
              rules={[{ validator: this.telValidator, message: '电话验证' }]}
              placeholder={'无电话'}
            />
          </div>
          {this.renderSetDefault()}
          {this.renderButtons()}
        </glue-form>
      </Host>
    );
  }
}
