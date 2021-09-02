import { Component, Prop, h, Host, State } from '@stencil/core';
// import classNames from 'classnames';
import { isObject } from '../../utils/base';
import { isMobile } from '../../utils/validate/mobile';
function isPostal(value) {
  return /^\d{6}$/.test(value);
}
const defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false,
};
@Component({
  tag: 'glue-address-edit',
  styleUrl: 'glue-address-edit.less',
  shadow: false,
})
export class GlueAddressEdit {
  @Prop() areaList: any;
  @Prop() isSaving: boolean;
  @Prop() isDeleting: boolean;
  @Prop() validator: any;
  @Prop() showDelete: boolean;
  @Prop() showPostal: boolean;
  @Prop() disableArea: boolean;
  @Prop() searchResult: [];
  @Prop() telMaxlength: string | number;
  @Prop() showSetDefault: boolean;
  @Prop() saveButtonText: string;
  @Prop() areaPlaceholder: string;
  @Prop() deleteButtonText: string;
  @Prop() showSearchResult: string;
  @Prop() showArea = true;
  @Prop() showDetail = true;
  @Prop() detailRows = 1;
  @Prop() detailMaxlength = 200;
  @Prop() addressInfo = { ...defaultData };
  @Prop() telValidator = isMobile;
  @Prop() postalValidator = isPostal;
  @Prop() areaColumnsPlaceholder = [];
  @State() data: any = {};
  @State() showAreaPopup = false;
  @State() detailFocused = false;
  @State() errorInfo = {
    tel: '',
    name: '',
    areaCode: '',
    postalCode: '',
    addressDetail: '',
  };

  areaRef: HTMLElement;
  areaListLoaded = () =>
    isObject(this.areaList) && Object.keys(this.areaList).length;

  areaText = () => {
    const { country, province, city, county, areaCode } = this.data;
    if (areaCode) {
      const arr = [country, province, city, county];
      if (province && province === city) {
        arr.splice(1, 1);
      }
      return arr.filter((text) => text).join('/');
    }
    return '';
  };

  // hide bottom field when use search && detail get focused
  hideBottomFields = () => {
    const { searchResult } = this;
    return searchResult && searchResult.length && this.detailFocused;
  };

  assignAreaValues = () => {
    // if (this.areaRef) {
    //   const detail = this.areaRef.getArea();
    //   detail.areaCode = detail.code;
    //   delete detail.code;
    //   Object.assign(this.data, detail);
    // }
  };

  onFocus = (key) => {
    this.errorInfo[key] = '';
    this.detailFocused = key === 'addressDetail';
    // emit('focus', key);
  };

  getErrorMessage = (key) => {
    const value = String(this.data[key] || '').trim();

    if (this.validator) {
      const message = this.validator(key, value);
      if (message) {
        return message;
      }
    }

    switch (key) {
      case 'name':
        return value ? '' : '名字为空';
      case 'tel':
        return this.telValidator(value) ? '' : '未知号码';
      case 'areaCode':
        return value ? '' : '空区域';
      case 'addressDetail':
        return value ? '' : '空地址';
      case 'postalCode':
        return value && !this.postalValidator(value) ? '控制' : '';
    }
  };

  onSave = () => {
    const items = ['name', 'tel'];

    if (this.showArea) {
      items.push('areaCode');
    }

    if (this.showDetail) {
      items.push('addressDetail');
    }

    if (this.showPostal) {
      items.push('postalCode');
    }

    const isValid = items.every((item) => {
      const msg = this.getErrorMessage(item);
      if (msg) {
        this.errorInfo[item] = msg;
      }
      return !msg;
    });

    if (isValid && !this.isSaving) {
      // emit('save', this.data);
    }
  };

  onChangeDetail = (val) => {
    this.data.addressDetail = val;
    // emit('change-detail', val);
  };

  onAreaConfirm = (values) => {
    values = values.filter((value) => !!value);

    if (values.some((value) => !value.code)) {
      // Toast(t('areaEmpty'));
      return;
    }

    this.showAreaPopup = false;
    this.assignAreaValues();
    // emit('change-area', values);
  };

  onDelete = () => {
    // Dialog.confirm({
    //   title: t('confirmDelete'),
    // })
    //   .then(() => {
    //     // emit('delete', this.data);
    //   })
    //   .catch(() => {
    //     // emit('cancel-delete', this.data);
    //   });
  };

  // get values of area component
  getArea = () => {
    return '';
    // return (this.areaRef ? this.areaRef.getValues() : []);
  };

  // set area code to area component
  setAreaCode = (code) => {
    this.data.areaCode = code || '';

    if (code) {
      // nextTick(assignAreaValues);
    }
  };

  onDetailBlur = () => {
    // await for click search event
    setTimeout(() => {
      this.detailFocused = false;
    });
  };

  setAddressDetail = (value) => {
    this.data.addressDetail = value;
  };

  renderSetDefaultCell = () => {
    if (this.showSetDefault) {
      const slots = {
        'right-icon': () => (
          <glue-switch
            size="24"
            onChange={(event) => {
              console.log(event);
              // emit('change-default', event);
            }}
          />
        ),
      };

      return (
        <glue-cell
          v-slots={slots}
          v-show={!this.hideBottomFields()}
          center
          title="默认地址"
          class="glue-address-edit__default"
        />
      );
    }

    return null;
  };
  render() {
    const { data, errorInfo, disableArea } = this;
    console.log(data);
    return (
      <Host class="glue-address-edit">
        <div class="glue-address-edit__fields">
          <glue-field
            clearable
            label="名称"
            placeholder="名称提示"
            errorMessage={errorInfo.name}
            onFocus={() => this.onFocus('name')}
          />
          <glue-field
            clearable
            type="tel"
            label={'电话'}
            maxlength={this.telMaxlength}
            placeholder={'电话提示'}
            errorMessage={errorInfo.tel}
            onFocus={() => this.onFocus('tel')}
          />
          <glue-field
            v-show={this.showArea}
            readonly
            label={'区域'}
            clickable={!disableArea}
            rightIcon={!disableArea ? 'arrow' : null}
            modelValue={this.areaText()}
            placeholder={this.areaPlaceholder || '区域提示'}
            errorMessage={errorInfo.areaCode}
            onFocus={() => this.onFocus('areaCode')}
            onClick={() => {
              // emit('click-area');
              this.showAreaPopup = !disableArea;
            }}
          />
          {/* <glue-address-edit-detail
            show={this.showDetail}
            value={data.addressDetail}
            focused={this.detailFocused}
            detailRows={this.detailRows}
            errorMessage={errorInfo.addressDetail}
            searchResult={this.searchResult}
            detailMaxlength={this.detailMaxlength}
            showSearchResult={this.showSearchResult}
            onBlur={this.onDetailBlur}
            onFocus={() => this.onFocus('addressDetail')}
            onInput={this.onChangeDetail}
            onSelect-search={event => {
              emit('select-search', event);
            }}
          ></glue-address-edit-detail> */}
          {this.showPostal && (
            <glue-field
              v-show={!this.hideBottomFields()}
              type="tel"
              maxlength="6"
              label={'标题'}
              placeholder={'标题'}
              errorMessage={errorInfo.postalCode}
              onFocus={() => this.onFocus('postalCode')}
            />
          )}
          <slot></slot>
        </div>
        {this.renderSetDefaultCell()}
        <div
          v-show={!this.hideBottomFields()}
          class="glue-address-edit__buttons"
        >
          <glue-button
            block
            round
            loading={this.isSaving}
            type="danger"
            text={this.saveButtonText || '保存'}
            onClick={this.onSave}
          />
          {this.showDelete && (
            <glue-button
              block
              round
              loading={this.isDeleting}
              text={this.deleteButtonText || '删除'}
              onClick={this.onDelete}
            />
          )}
        </div>
        <glue-popup round teleport="body" position="bottom" lazyRender={false}>
          {/* <glue-area
            ref={dom => {
              this.areaRef = dom;
            }}
            value={this.data.areaCode}
            loading={!this.areaListLoaded()}
            areaList={this.areaList}
            columnsPlaceholder={this.areaColumnsPlaceholder}
            onConfirm={this.onAreaConfirm}
            onCancel={() => {
              this.showAreaPopup = false;
            }}
          ></glue-area> */}
        </glue-popup>
      </Host>
    );
  }
}
