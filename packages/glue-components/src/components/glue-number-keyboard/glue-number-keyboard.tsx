import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { stopPropagation } from '../../utils/dom/event';
@Component({
  tag: 'glue-number-keyboard',
  styleUrl: 'glue-number-keyboard.less',
  shadow: false,
})
export class GlueNumberKeyboard {
  @Prop() show: boolean;
  @Prop() g_title: string;
  @Prop() zIndex: string;
  @Prop() teleport: string | number;
  @Prop() randomKeyOrder: boolean;
  @Prop() closeButtonText: string;
  @Prop() deleteButtonText: string;
  @Prop() closeButtonLoading: boolean;
  @Prop() theme = 'default';
  @Prop({ mutable: true }) modelValue = '';
  //当extraKey为""时出现关闭键盘图标
  @Prop() extraKey = '';
  @Prop() maxlength = Number.MAX_VALUE;
  @Prop() transition = true;
  @Prop() blurOnClose = true;
  @Prop() showDeleteKey = true;
  @Prop() hideOnClickOutside = true;
  @Prop() safeAreaInsetBottom = true;
  @Event() glueBlur: EventEmitter;
  @Event() glueClose: EventEmitter;
  @Event() glueDelete: EventEmitter;
  @Event() glueChange: EventEmitter;
  @Event() glueInput: EventEmitter;
  root: HTMLElement;
  genBasicKeys = () => {
    const keys = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }

    if (this.randomKeyOrder) {
      keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
    console.log(keys, 'keys1');
    return keys;
  };

  genDefaultKeys = () => [
    ...this.genBasicKeys(),
    { text: this.extraKey, type: 'extra' },
    { text: 0 },
    {
      text: this.showDeleteKey ? this.deleteButtonText : '',
      type: this.showDeleteKey ? 'delete' : '',
    },
  ];

  genCustomKeys = () => {
    const keys = this.genBasicKeys();
    console.log(keys, 'keys1111');
    const { extraKey } = this;
    console.log(extraKey, 'extraKeyextraKey');
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];
    console.log(extraKeys, 'extraKeys');
    if (extraKeys.length === 1) {
      keys.push(
        { text: 0, wider: true },
        { text: extraKeys[0], type: 'extra' }
      );
    } else if (extraKeys.length === 2) {
      keys.push(
        { text: extraKeys[0], type: 'extra' },
        { text: 0 },
        { text: extraKeys[1], type: 'extra' }
      );
    }

    return keys;
  };

  keys = () => {
    console.log(this.theme, 'this.theme');
    return this.theme === 'custom'
      ? this.genCustomKeys()
      : this.genDefaultKeys();
  };

  onBlur = () => {
    if (this.show) {
      this.glueBlur.emit();
    }
  };

  onClose = () => {
    this.glueClose.emit();
    if (this.blurOnClose) {
      this.onBlur();
    }
  };

  onAnimationEnd = () => {
    console.log('onAnimationEnd');
    // emit(this.show ? 'show' : 'hide');
  };

  onPress = (event) => {
    console.log(event, 'event');
    let { text, type } = event.detail;
    console.log(text, type, 'text, type1');
    if (text === '') {
      if (type === 'extra') {
        this.onBlur();
      }
      return;
    }

    if (type === 'delete') {
      this.glueDelete.emit();

      this.modelValue = this.modelValue.slice(0, this.modelValue.length - 1);

      this.glueChange.emit(this.modelValue);
    } else if (type === 'close') {
      this.onClose();
    } else if (this.modelValue.length < this.maxlength) {
      this.modelValue = this.modelValue + text;
      this.glueInput.emit(text);
      this.glueChange.emit(this.modelValue);
    }
    console.log(text, this.modelValue, 'texttext');
  };

  renderHeader = () => {
    const { g_title, theme, closeButtonText } = this;
    // const leftSlot = slots['g_title-left'];
    const showClose = closeButtonText && theme === 'default';
    const showTitle = g_title || showClose;

    if (!showTitle) {
      return;
    }

    return (
      <div class="glue-number-keyboard__header">
        {/* {leftSlot && <span class="glue-number-keyboard__title-left">{leftSlot()}</span>} */}
        {g_title && <h2 class="glue-number-keyboard__title">{g_title}</h2>}
        {showClose && (
          <button
            type="button"
            class="glue-number-keyboard__close"
            onClick={this.onClose}
          >
            {closeButtonText}
          </button>
        )}
      </div>
    );
  };

  renderKeys = () => {
    console.log(this.keys(), 'this.keys()');
    return this.keys().map((key) => {
      // const keySlots = {};

      if (key.type === 'delete') {
        // keySlots.default = slots.delete;
      }
      if (key.type === 'extra') {
        // keySlots.default = slots['extra-key'];
      }
      console.log(key.type, 'key.type');
      return (
        <glue-key
          key={key.text}
          text={key.text}
          type={key.type}
          wider={key.wider}
          color={key.color}
          onGluePress={this.onPress}
        />
      );
    });
  };

  renderSidebar = () => {
    if (this.theme === 'custom') {
      return (
        <div class="glue-number-keyboard__sidebar">
          {this.showDeleteKey && (
            <glue-key large text={this.deleteButtonText} type="delete" />
          )}
          <glue-key
            large
            text={this.closeButtonText}
            type="close"
            color="blue"
            loading={this.closeButtonLoading}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <Host
        v-show={this.show}
        ref={(dom) => {
          this.root = dom;
        }}
        style={{ zIndex: this.zIndex }}
        class={classNames('glue-number-keyboard', {
          'glue-number-keyboard__unfit': !this.safeAreaInsetBottom,
          'glue-number-keyboard__with-title': this.g_title,
        })}
        onTouchStart={stopPropagation}
        onAnimationend={this.onAnimationEnd}
        onWebkitAnimationEnd={this.onAnimationEnd}
      >
        {this.renderHeader()}
        <div class="glue-number-keyboard__body">
          <div class="glue-number-keyboard__keys">{this.renderKeys()}</div>
          {this.renderSidebar()}
        </div>
      </Host>
    );
  }
}
