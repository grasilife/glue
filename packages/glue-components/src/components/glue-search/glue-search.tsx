import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { pick } from '../../utils/base';
import { preventDefault } from '../../utils/dom/event';
const fieldPropNames = ['leftIcon', 'rightIcon', 'clearable', 'modelValue', 'clearTrigger'];
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
  @Prop() shape: 'square';
  @Prop() clearable = true;
  @Prop() leftIcon = 'search';
  filedRef: HTMLElement;
  @Event() search: EventEmitter;
  @Event() changeValue: EventEmitter;
  @Event() cancel: EventEmitter;
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
      this.search.emit(this.modelValue);
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
    const fieldAttrs = {
      ...pick(this, fieldPropNames),
      style: null,
      class: null,
    };

    const onInput = value => {
      this.changeValue.emit(value);
    };

    return (
      <glue-field
        // v-slots={pick(slots, ['left-icon', 'right-icon'])}
        ref={dom => {
          this.filedRef = dom;
        }}
        type="search"
        border={false}
        onKeyPress={this.onKeypress}
        {...fieldAttrs}
        {...{ 'onUpdate:modelValue': onInput }}
      />
    );
  };
  render() {
    return (
      <Host
        class={classNames({
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
