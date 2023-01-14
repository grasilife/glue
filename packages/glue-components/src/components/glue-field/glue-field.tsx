import { Component, Prop, h, Host, State, Element, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { createNamespace } from '../../utils/create/index';
import { isObject, isFunction, isPromise } from '../../utils/base';
import { addUnit } from '../../utils/format/unit';
import { formatNumber } from '../../utils/format/number';
import { resetScroll } from '../../utils/dom/scroll';
import { runSyncRule } from './utils';
import { CellArrowDirection } from '../glue-cell/glue-cell-interface';
import { trigger, preventDefault } from '../../utils/dom/event';
const [bem] = createNamespace('glue-field');
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-field',
  styleUrl: 'glue-field.less',
  shadow: false,
})
export class GlueField {
  @Element() el!: HTMLGlueFieldElement;
  @Prop() rows: number;
  @Prop() name: string;
  @Prop() button: string;
  @Prop() rules: any;
  @Prop() autosize: any;
  @Prop() leftIcon: string;
  @Prop() rightIcon: string;
  @Prop() clearable: boolean;
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
  @Prop() type = 'text';
  @Prop() error = null;
  @Prop() colon = null;
  @Prop() disabled = null;
  @Prop() readonly = null;
  @Prop({
    mutable: true,
  })
  modelValue: string;
  @Prop() clearTrigger = 'focus';
  @Prop() formatTrigger = 'onChange';
  //cell this
  @Prop() icon: string;
  @Prop() size: string;
  @Prop() gtitle: string;
  @Prop() value: string | number;
  @Prop() label: string | number;
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
  @State() focused = false;
  @State() validateFailed = false;
  @State() validateMessage = '';
  @State() parentReadonly;
  @State() parentLabelWidth;
  @State() parentSubmitOnEnter;
  @State() parentDisabled;
  @State() parentInputAlign;
  @State() parentErrorMessageAlign;
  @State() parentLabelAlign;
  @State() parentColon;
  inputRef: HTMLElement;
  childFieldValue: HTMLElement;
  @Watch('modelValue')
  watchShowHandler(value) {
    console.log(value);
    // this.updateValue(value);
    // this.resetValidation();
    // this.validateWithTrigger('onChange');
    this.adjustSize();
  }
  componentDidLoad() {
    this.adjustSize();
    console.log('Component has been rendered');
    let parentEl = getElementParent(this.el, 'GLUE-CELL-GROUP');
    this.parentReadonly = getAttribute(parentEl, 'readonly');
    this.parentLabelWidth = getAttribute(parentEl, 'label-width');
    this.parentSubmitOnEnter = getAttribute(parentEl, 'submit-on-enter');
    this.parentDisabled = getAttribute(parentEl, 'disabled');
    this.parentInputAlign = getAttribute(parentEl, 'input-align');
    this.parentErrorMessageAlign = getAttribute(
      parentEl,
      'error-message-align'
    );
    this.parentLabelAlign = getAttribute(parentEl, 'label-align');
    this.parentColon = getAttribute(parentEl, 'colon');
  }

  showClear = () => {
    const readonly = this.parentReadonly;

    if (this.clearable && !readonly) {
      const hasValue = isDef(this.modelValue) && this.modelValue !== '';
      const trigger =
        this.clearTrigger === 'always' ||
        (this.clearTrigger === 'focus' && this.focused);

      return hasValue && trigger;
    }
  };

  formValue = () => {
    // if (childFieldValue.value && slots.input) {
    //   return childFieldValue.value();
    // }
    return this.modelValue;
  };

  runValidator = (value, rule) =>
    new Promise((resolve) => {
      const returnVal = rule.validator(value, rule);

      if (isPromise(returnVal)) {
        return returnVal.then(resolve);
      }

      resolve(returnVal);
    });

  getRuleMessage = (value, rule) => {
    const { message } = rule;

    if (isFunction(message)) {
      return message(value, rule);
    }
    return message;
  };

  runRules = (rules) =>
    rules.reduce(
      (promise, rule) =>
        promise.then(() => {
          if (this.validateFailed) {
            return;
          }

          let value = this.formValue();

          if (rule.formatter) {
            this.value = rule.formatter(value, rule);
          }

          if (!runSyncRule(value, rule)) {
            this.validateFailed = true;
            this.validateMessage = this.getRuleMessage(value, rule);
            return;
          }

          if (rule.validator) {
            return this.runValidator(value, rule).then((result) => {
              if (result && typeof result === 'string') {
                this.validateFailed = true;
                this.validateMessage = result;
              } else if (result === false) {
                this.validateFailed = true;
                this.validateMessage = this.getRuleMessage(value, rule);
              }
            });
          }
        }),
      Promise.resolve()
    );

  resetValidation = () => {
    if (this.validateFailed) {
      this.validateFailed = false;
      this.validateMessage = '';
    }
  };

  validate = (rules = this.rules) =>
    new Promise((resolve) => {
      if (!rules) {
        // resolve();
      }

      this.resetValidation();
      this.runRules(rules).then(() => {
        if (this.validateFailed) {
          resolve({
            name: this.name,
            message: this.validateMessage,
          });
        } else {
          // resolve();
        }
      });
    });

  validateWithTrigger = (trigger) => {
    console.log(trigger);
    // if (form && this.rules) {
    //   const defaultTrigger = form.this.validateTrigger === trigger;
    //   const rules = this.rules.filter(rule => {
    //     if (rule.trigger) {
    //       return rule.trigger === trigger;
    //     }
    //     return defaultTrigger;
    //   });
    //   this.validate(rules);
    // }
  };

  updateValue = (value, trigger = 'onChange') => {
    value = isDef(value) ? String(value) : '';

    // native maxlength have incorrect line-break counting
    // see: https://github.com/youzan/vant/issues/5033
    const { maxlength, modelValue } = this;
    if (isDef(maxlength) && value.length > maxlength) {
      if (modelValue && modelValue.length === +maxlength) {
        value = modelValue;
      } else {
        value = value.slice(0, maxlength);
      }
    }

    if (this.type === 'number' || this.type === 'digit') {
      const isNumber = this.type === 'number';
      value = formatNumber(value, isNumber, isNumber);
    }

    if (this.formatter && trigger === this.formatTrigger) {
      console.log('112121212', this.formatter, this.formatter(value));
      value = this.formatter(value);
    }

    // if (this.inputRef && value !== this.inputRef) {
    //   this.inputRef = value;
    // }

    if (value !== this.modelValue) {
      //TODO:居然赋值不成功
      this.modelValue = value;
      console.log(this.modelValue, 'this.modelValue');
    }
  };

  onInput = (event) => {
    // skip update value when composing
    if (!event.target.composing) {
      console.log(event, event.target.value, 'eventeventevent');
      this.updateValue(event.target.value);
    }
  };

  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  blur = () => {
    if (this.inputRef) {
      this.inputRef.blur();
    }
  };

  onFocus = (event) => {
    console.log(event);
    this.focused = true;
    // emit('focus', event);

    // readonly not work in lagacy mobile safari
    const readonly = this.parentReadonly;
    if (readonly) {
      blur();
    }
  };

  onBlur = (event) => {
    console.log(event);
    this.focused = false;
    this.updateValue(this.modelValue, 'onBlur');
    // emit('blur', event);
    this.validateWithTrigger('onBlur');
    resetScroll();
  };

  onClickInput = (event) => {
    console.log(event);
    // emit('click-input', event);
  };

  onClickLeftIcon = (event) => {
    console.log(event);
    // emit('click-left-icon', event);
  };

  onClickRightIcon = (event) => {
    console.log(event);
    // emit('click-right-icon', event);
  };

  onClear = (event) => {
    preventDefault(event);
    this.modelValue = '';
    // emit('update:modelValue', '');
    // emit('clear', event);
  };

  showError = () => {
    if (typeof this.error === 'boolean') {
      return this.error;
    }
    // && form.this.showError
    if (this.validateFailed) {
      return true;
    }
  };

  labelStyle = () => {
    const labelWidth = this.parentLabelWidth;
    if (labelWidth) {
      return { width: addUnit(labelWidth) };
    }
  };

  onKeypress = (event) => {
    const ENTER_CODE = 13;

    if (event.keyCode === ENTER_CODE) {
      const submitOnEnter = this.parentSubmitOnEnter;
      if (!submitOnEnter && this.type !== 'textarea') {
        preventDefault(event);
      }

      // trigger blur after click keyboard search button
      if (this.type === 'search') {
        blur();
      }
    }

    // emit('keypress', event);
  };

  onCompositionStart = (event) => {
    event.target.composing = true;
  };

  onCompositionEnd = (event) => {
    const { target } = event;
    if (target.composing) {
      target.composing = false;
      trigger(target, 'input');
    }
  };

  adjustSize = () => {
    const input = this.inputRef;
    console.log(input, 'inputinputinput');
    if (!(this.type === 'textarea' && this.autosize) || !input) {
      return;
    }

    input.style.height = 'auto';

    let height = input.scrollHeight;
    console.log(height, input, 'height');
    if (isObject(this.autosize)) {
      const { maxHeight, minHeight } = this.autosize;
      if (maxHeight) {
        height = Math.min(height, maxHeight);
      }
      if (minHeight) {
        height = Math.max(height, minHeight);
      }
    }

    if (height) {
      input.style.height = height + 'px';
    }
  };

  renderInput = () => {
    const disabled = this.parentDisabled;
    const readonly = this.parentReadonly;
    const inputAlign = this.parentInputAlign || this.inputAlign;
    console.log(inputAlign, this.placeholder, 'inputAlign');
    // if (slots.input) {
    //   return (
    //     <div class={(classNames('glue-field__control', 'glue-field--custom'), bem([inputAlign]), {})} onClick={this.onClickInput}>
    //       {/* {slots.input()} */}
    //     </div>
    //   );
    // }

    const inputProps = {
      name: this.name,
      rows: this.rows,
      class: classNames('glue-field__control', {
        ['glue-field__control--' + inputAlign]: inputAlign,
      }),
      value: this.modelValue,
      disabled,
      readonly,
      placeholder: this.placeholder,
      autocomplete: this.autocomplete,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onInput: this.onInput,
      onClick: this.onClickInput,
      onChange: this.onCompositionEnd,
      onKeypress: this.onKeypress,
      onCompositionend: this.onCompositionEnd,
      onCompositionstart: this.onCompositionStart,
    };

    const { type } = this;

    if (type === 'textarea') {
      return (
        <textarea
          {...inputProps}
          ref={(dom) => {
            this.inputRef = dom;
          }}
        />
      );
    }

    let inputType = type;
    let inputMode;

    // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers
    if (type === 'number') {
      inputType = 'text';
      inputMode = 'decimal';
    }

    if (type === 'digit') {
      inputType = 'tel';
      inputMode = 'numeric';
    }
    console.log(this.modelValue, 'this.modelValue111');
    return (
      <input
        type={inputType}
        inputmode={inputMode}
        {...inputProps}
        ref={(dom) => {
          this.inputRef = dom;
        }}
      />
    );
  };

  renderLeftIcon = () => {
    // const leftIconSlot = slots['left-icon'];

    if (this.leftIcon) {
      return (
        <div class="glue-field__left-icon" onClick={this.onClickLeftIcon}>
          <glue-icon name={this.leftIcon} classPrefix={this.iconPrefix} />
        </div>
      );
    }
  };

  renderRightIcon = () => {
    // const rightIconSlot = slots['right-icon'];

    if (this.rightIcon) {
      return (
        <div class="glue-field__right-icon" onClick={this.onClickRightIcon}>
          <glue-icon name={this.rightIcon} classPrefix={this.iconPrefix} />
        </div>
      );
    }
  };

  renderWordLimit = () => {
    if (this.showWordLimit && this.maxlength) {
      const count = (this.modelValue || '').length;
      return (
        <div class="glue-field__word-limit">
          <span class="glue-field__word-num">{count}</span>/{this.maxlength}
        </div>
      );
    }
  };

  renderMessage = () => {
    // if (this.form && form.this.showErrorMessage === false) {
    //   return;
    // }

    const message = this.errorMessage || this.validateMessage;

    if (message) {
      const errorMessageAlign = this.parentErrorMessageAlign;
      console.log(errorMessageAlign, 'errorMessageAlign');
      return (
        <div class={classNames('glue-field__error-message')}>{message}</div>
      );
    }
  };

  renderLabel = () => {
    const colon = this.parentColon ? ':' : '';

    // if (slots.label) {
    //   return [slots.label(), colon];
    // }
    if (this.label) {
      return <span>{this.label + colon}</span>;
    }
  };
  buttonRender = () => {
    if (this.button == '#slot') {
      return (
        <div class="glue-field__button">
          <slot name="button"></slot>
        </div>
      );
    }
  };
  // useExpose({ blur, focus, validate, formValue, resetValidation });

  // provide(FIELD_KEY, { childFieldValue, resetValidation, validateWithTrigger });
  render() {
    const disabled = this.parentDisabled;
    const labelAlign = this.parentLabelAlign;
    // const Label = this.renderLabel();
    // const LeftIcon = this.renderLeftIcon();
    return (
      <Host class="glue-field">
        <glue-cell
          value="#slot"
          size={this.size}
          icon={this.leftIcon}
          class={classNames({
            'glue-field__error': this.showError(),
            'glue-field__disabled': disabled,
            [`glue-field--label-${labelAlign}`]: labelAlign,
            'glue-field__min-height':
              this.type === 'textarea' && !this.autosize,
          })}
          center={this.center}
          border={this.border}
          isLink={this.isLink}
          required={this.required}
          clickable={this.clickable}
          titleStyle={this.labelStyle()}
          titleClass={{
            'glue-field__label': this.label,
            ...this.labelClass,
            ...labelAlign,
          }}
          valueClass={{
            'glue-field__value': true,
          }}
          arrowDirection={this.arrowDirection}
        >
          {/* <div slot="gtitle">{this.renderLabel()}</div> */}
          {this.renderLabel()}
          <div slot="value">
            <div class={bem('body')}>
              {this.renderInput()}
              {this.showClear() && (
                <glue-icon
                  name="clear"
                  class="glue-field__clear"
                  onTouchStart={this.onClear}
                />
              )}
              {this.renderRightIcon()}
              {this.buttonRender()}
            </div>
            {this.renderWordLimit()}
            {this.renderMessage()}
          </div>
        </glue-cell>
      </Host>
    );
  }
}
