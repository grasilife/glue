import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
// import { pick } from '../../utils/base';
import { preventDefault } from '../../utils/dom/event';
import { CellArrowDirection } from '../glue-cell/glue-cell-interface';
// const fieldPropNames = [
//   'leftIcon',
//   'rightIcon',
//   'clearable',
//   'modelValue',
//   'clearTrigger',
// ];
@Component({
  tag: 'glue-search',
  styleUrl: 'glue-search.less',
  shadow: false,
})
export class GlueSearch {
  @Prop() label: string;
  @Prop() rightIcon: string;
  @Prop() modelValue: string;
  @Prop() actionText: string;
  @Prop() background: string;
  @Prop() showAction: boolean;
  @Prop() clearTrigger: string;
  @Prop() shape: string = 'square';
  @Prop() clearable = true;
  @Prop() leftIcon = 'search';
  //field prop
  @Prop() rows: number;
  @Prop() name: string;
  @Prop() button: string;
  @Prop() rules: any;
  @Prop() autosize: any;
  @Prop() formatter: any;
  @Prop() maxlength: string | number = 50;
  @Prop() labelWidth: string | number;
  @Prop() labelClass = null;
  @Prop() labelAlign: string;
  @Prop() inputAlign: string;
  @Prop() placeholder: string;
  @Prop() autocomplete: string;
  @Prop() errorMessage: string;
  @Prop() errorMessageAlign: string;
  @Prop() showWordLimit: boolean;
  @Prop() type: string = 'text';
  @Prop() error = null;
  @Prop() colon = null;
  @Prop() disabled = null;
  @Prop() readonly = null;
  @Prop() formatTrigger = 'onChange';
  //cell this
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() gtitle: string;
  @Prop() value: string | number;
  @Prop() center: boolean;
  @Prop() isLink: boolean;
  @Prop() required: boolean;
  @Prop() clickable: boolean;
  @Prop() iconPrefix: string;
  @Prop() titleStyle = null;
  @Prop() titleClass = null;
  @Prop() valueClass = null;
  @Prop() tilabelClasstle = null;
  @Prop() arrowDirection: CellArrowDirection;
  @Prop() border = true;
  filedRef: HTMLElement;
  @Event() glueSearch: EventEmitter;
  @Event() glueChange: EventEmitter;
  @Event() glueCancel: EventEmitter;
  onCancel = () => {
    // if (!slots.action) {
    //   this.changeValue.emit('');
    //   this.cancel.emit();
    // }
  };

  onKeypress = event => {
    const ENTER_CODE = 13;
    if (event.keyCode === ENTER_CODE) {
      preventDefault(event);
      this.glueSearch.emit(this.modelValue);
    }
  };

  renderLabel = () => {
    // if (slots.label || this.label) {
    //   return <div class={bem('label')}>{slots.label ? slots.label() : this.label}</div>;
    // }
  };

  renderAction = () => {
    if (this.showAction) {
      // const text = this.actionText || 'cancel';
      return (
        <div class="glue-search_-action" role="button" tabindex="0" onClick={this.onCancel}>
          {/* {slots.action ? slots.action() : text} */}
        </div>
      );
    }
  };

  focus = () => {
    if (this.filedRef) {
      this.filedRef.focus();
    }
  };

  blur = () => {
    if (this.filedRef) {
      this.filedRef.blur();
    }
  };

  renderField = () => {
    // const fieldAttrs = {
    //   ...pick(this, fieldPropNames),
    //   style: null,
    //   class: null,
    // };
    console.log(this, 'hauhuahuahu');
    // const onInput = (value) => {
    //   this.changeValue.emit(value);
    // };

    return (
      <glue-field
        ref={dom => {
          this.filedRef = dom;
        }}
        name={this.name}
        maxlength={this.maxlength}
        placeholder={this.placeholder}
        clearable={this.clearable}
        clearTrigger={this.clearTrigger}
        disabled={this.disabled}
        readonly={this.readonly}
        error={this.error}
        errorMessage={this.errorMessage}
        formatter={this.formatter}
        formatTrigger={this.formatTrigger}
        inputAlign={this.inputAlign}
        leftIcon={this.leftIcon}
        rightIcon={this.rightIcon}
        autocomplete={this.autocomplete}
        onKeyPress={this.onKeypress}
        modelValue={this.modelValue}
        type="search"
      />
    );
  };
  render() {
    return (
      <Host
        class={classNames('glue-search', {
          'glue-search__show-action': this.showAction,
        })}
        style={{ background: this.background }}
      >
        {/* {slots.left?.()} */}
        <div
          class={classNames({
            'glue-search__content': this.shape,
          })}
        >
          {this.renderLabel()}
          {this.renderField()}
        </div>
        {this.renderAction()}
      </Host>
    );
  }
}
