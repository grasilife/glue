import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { pick } from '../../utils/base';
const PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];
function getIconURL(icon: string) {
  if (PRESET_ICONS.indexOf(icon) !== -1) {
    return `https://img01.yzcdn.cn/vant/share-sheet-${icon}.png`;
  }
  return icon;
}
export type ShareSheetOption = {
  name: string;
  icon: string;
  className?: string;
  description?: string;
};

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];
const popupKeys = ['closeOnPopstate', 'safeAreaInsetBottom'];
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-share-sheet');
@Component({
  tag: 'glue-share-sheet',
  styleUrl: 'glue-share-sheet.less',
  shadow: false,
})
export class GlueShareSheet {
  @Prop() title: string;
  @Prop() cancelText: string;
  @Prop() description: string;
  @Prop() options = [];
  @Prop() closeOnPopstate = true;
  @Prop() safeAreaInsetBottom = true;
  //
  @Prop() show: boolean;

  @Prop() zIndex = '2000';

  @Prop() duration: string;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() teleport: string | object;
  @Prop() overlayStyle: object;
  @Prop() overlayClass = null;

  @Prop() transitionAppear: boolean;
  @Prop() overlay = true;
  @Prop() lockScroll = true;
  @Prop() lazyRender = true;
  @Prop() closeOnClickOverlay = true;
  @Prop() round = true;
  @Prop() closeable: boolean;
  @Prop() transition: string;
  @Prop() position = 'center';
  @Prop() closeIcon = 'cross';
  @Prop() closeIconPosition = 'top-right';
  @Event() showChange: EventEmitter;
  @Event() cancel: EventEmitter;
  @Event() select: EventEmitter;
  toggle = (value: boolean) => {
    this.showChange.emit(value);
  };

  onCancel = () => {
    this.toggle(false);
    this.cancel.emit();
  };

  onSelect = (option: ShareSheetOption, index: number) => {
    this.select.emit({ option, index });
  };

  renderHeader = () => {
    const title = this.title;
    const description = this.description;

    if (title || description) {
      return (
        <div class="glue-share-sheet__header">
          {title && <h2 class="glue-share-sheet__title">{title}</h2>}
          {description && <span class="glue-share-sheet__description">{description}</span>}
        </div>
      );
    }
  };

  renderOption = (option: ShareSheetOption, index: number) => {
    const { name, icon, className, description } = option;
    return (
      <div
        role="button"
        tabindex={0}
        class={(classNames('glue-share-sheet__option'), bem([className]))}
        onClick={() => {
          this.onSelect(option, index);
        }}
      >
        <img src={getIconURL(icon)} class="glue-share-sheet__icon" />
        {name && <span class="glue-share-sheet__name">{name}</span>}
        {description && <span class="glue-share-sheet__option-description">{description}</span>}
      </div>
    );
  };

  renderOptions = (options: ShareSheetOption[], border?: boolean) => <div class={(classNames('glue-share-sheet__option'), bem([border]))}>{options.map(this.renderOption)}</div>;

  renderRows = () => {
    const { options } = this;
    if (Array.isArray(options[0])) {
      return (options as ShareSheetOption[][]).map((item, index) => this.renderOptions(item, index !== 0));
    }
    return this.renderOptions(options as ShareSheetOption[]);
  };

  renderCancelText = () => {
    const text = this.cancelText ?? '取消';
    if (text) {
      return (
        <button type="button" class="glue-share-sheet__cancel" onClick={this.onCancel}>
          {text}
        </button>
      );
    }
  };
  render() {
    return (
      <Host>
        <glue-popup
          round
          class="glue-share-sheet"
          position="bottom"
          {...{
            ...pick(this, popupKeys),
          }}
        >
          show={true}
          {this.renderHeader()}
          {this.renderRows()}
          {this.renderCancelText()}
        </glue-popup>
      </Host>
    );
  }
}
