import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
// import classNames from 'classnames';
import { isAndroid } from '../../utils/validate/system';
const android = isAndroid();
@Component({
  tag: 'glue-address-edit-detail',
  styleUrl: 'glue-address-edit-detail.less',
  shadow: false,
})
export class GlueAddressEditDetail {
  @Prop() show: boolean;
  @Prop() value: string;
  @Prop() errorMessage: string;
  @Prop() focused: boolean;
  @Prop() detailRows: string | number;
  @Prop() first: string;
  @Prop() searchResult: any;
  @Prop() detailMaxlength: string | number;
  @Prop() showSearchResult: boolean;
  field: HTMLElement;
  @Event() glueFocus: EventEmitter;
  @Event() glueBlur: EventEmitter;
  @Event() glueInput: EventEmitter;
  showSearchResultState = () => this.focused && this.searchResult && this.showSearchResult;

  onSelect = express => {
    console.log(express);
    // emit('select-search', express);
    // emit('input', `${express.address || ''} ${express.name || ''}`.trim());
  };

  onFinish = () => {
    // this.field.value.blur();
  };

  renderFinish = () => {
    if (this.value && this.focused && android) {
      return (
        <div class="glue-address-edit-detail__finish" onClick={this.onFinish}>
          完成
        </div>
      );
    }
  };

  renderSearchTitle = express => {
    if (express.name) {
      const text = express.name.replace(this.value, `<span class="glue-address-edit-detail__keyword" >${this.value}</span>`);

      return <div innerHTML={text} />;
    }
  };

  renderSearchResult = () => {
    if (!this.showSearchResultState()) {
      return;
    }

    const { searchResult } = this;
    return searchResult.map(express => (
      <glue-cell
        v-slots={{
          title: () => this.renderSearchTitle(express),
        }}
        clickable
        key={express.name + express.address}
        icon="location-o"
        label={express.address}
        class="glue-address-edit-detail__search-item"
        border={false}
        onClick={() => {
          this.onSelect(express);
        }}
      />
    ));
  };

  onFocus = event => {
    this.glueFocus.emit(event);
  };

  onBlur = event => {
    this.glueBlur.emit(event);
  };

  onInput = value => {
    this.glueInput.emit(value);
  };
  render() {
    if (this.show) {
      return (
        <Host>
          <glue-field
            v-slots={{ icon: this.renderFinish }}
            autosize
            ref={dom => (this.field = dom)}
            class="glue-address-edit-detail"
            // rows={this.detailRows}
            type="textarea"
            label="标题"
            border={!this.showSearchResultState()}
            clearable={!android}
            maxlength={this.detailMaxlength}
            modelValue={this.value}
            placeholder="提示"
            errorMessage={this.errorMessage}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            {...{ 'onUpdate:modelValue': this.onInput }}
          />
          {this.renderSearchResult()}
        </Host>
      );
    }
  }
}
