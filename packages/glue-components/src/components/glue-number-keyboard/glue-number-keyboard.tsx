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
  @Prop() title: string;
  @Prop() zIndex: string;
  @Prop() teleport: string | number;
  @Prop() randomKeyOrder: boolean;
  @Prop() closeButtonText: string;
  @Prop() deleteButtonText: string;
  @Prop() closeButtonLoading: boolean;
  @Prop() theme = 'default';
  @Prop() modelValue = '';
  @Prop() extraKey = '';
  @Prop() maxlength = Number.MAX_VALUE;
  @Prop() transition = true;
  @Prop() blurOnClose = true;
  @Prop() showDeleteKey = true;
  @Prop() hideOnClickOutside = true;
  @Prop() safeAreaInsetBottom = true;
  @Event() blur: EventEmitter;
  @Event() close: EventEmitter;
  @Event() delete: EventEmitter;
  @Event() changeValue: EventEmitter;
  @Event() input: EventEmitter;
  root: HTMLElement;
  genBasicKeys = () => {
    const keys = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }

    if (this.randomKeyOrder) {
      keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }

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
    const { extraKey } = this;
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' });
    } else if (extraKeys.length === 2) {
      keys.push({ text: extraKeys[0], type: 'extra' }, { text: 0 }, { text: extraKeys[1], type: 'extra' });
    }

    return keys;
  };

  keys = () => (this.theme === 'custom' ? this.genCustomKeys() : this.genDefaultKeys());

  onBlur = () => {
    if (this.show) {
      this.blur.emit();
    }
  };

  onClose = () => {
    this.close.emit();
    if (this.blurOnClose) {
      this.onBlur();
    }
  };

  onAnimationEnd = () => {
    console.log('onAnimationEnd');
    // emit(this.show ? 'show' : 'hide');
  };

  onPress = (text, type) => {
    if (text === '') {
      if (type === 'extra') {
        this.onBlur();
      }
      return;
    }

    const value = this.modelValue;

    if (type === 'delete') {
      this.delete.emit();
      this.changeValue.emit(value.slice(0, value.length - 1));
    } else if (type === 'close') {
      this.onClose();
    } else if (value.length < this.maxlength) {
      this.input.emit(text);
      this.changeValue.emit(value + text);
    }
  };

  renderTitle = () => {
    const { title, theme, closeButtonText } = this;
    // const leftSlot = slots['title-left'];
    const showClose = closeButtonText && theme === 'default';
    // const showTitle = title || showClose || leftSlot;

    // if (!showTitle) {
    //   return;
    // }

    return (
      <div class="glue-number-keyboard__header">
        {/* {leftSlot && <span class="glue-number-keyboard__title-left">{leftSlot()}</span>} */}
        {title && <h2 class="glue-number-keyboard__title">{title}</h2>}
        {showClose && (
          <button type="button" class="glue-number-keyboard__close" onClick={this.onClose}>
            {closeButtonText}
          </button>
        )}
      </div>
    );
  };

  renderKeys = () => {
    return this.keys().map(key => {
      // const keySlots = {};

      if (key.type === 'delete') {
        // keySlots.default = slots.delete;
      }
      if (key.type === 'extra') {
        // keySlots.default = slots['extra-key'];
      }

      // return <Key v-slots={keySlots} key={key.text} text={key.text} type={key.type} wider={key.wider} color={key.color} onPress={onPress} />;
    });
  };

  renderSidebar = () => {
    if (this.theme === 'custom') {
      return (
        <div class="glue-number-keyboard__sidebar">
          {/* {this.showDeleteKey && <Key v-slots={{ delete: slots.delete }} large text={this.deleteButtonText} type="delete" onPress={onPress} />}
          <Key large text={this.closeButtonText} type="close" color="blue" loading={this.closeButtonLoading} onPress={onPress} /> */}
        </div>
      );
    }
  };
  render() {
    const Title = this.renderTitle();
    return (
      <Host
        v-show={this.show}
        ref={dom => {
          this.root = dom;
        }}
        style={{ zIndex: this.zIndex }}
        class={classNames({
          'glue-number-keyboard__unfit': !this.safeAreaInsetBottom,
          'glue-number-keyboard__with-title': !!Title,
        })}
        onTouchstart={stopPropagation}
        onAnimationend={this.onAnimationEnd}
        onWebkitAnimationEnd={this.onAnimationEnd}
      >
        {Title}
        <div class="glue-number-keyboard__body">
          <div class="glue-number-keyboard__keys">{this.renderKeys()}</div>
          {this.renderSidebar()}
        </div>
      </Host>
    );
  }
}
