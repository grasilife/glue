import { Component, Prop, h, Host, Event, EventEmitter, State } from '@stencil/core';
import classNames from 'classnames';
import { pick } from '../../utils/base';
import { getVisibleHeight } from '../../utils/dom/scroll';
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
  refContent: HTMLElement;
  @Prop() show: boolean;
  @Prop() options = [];
  @Prop() title: string;
  @Prop() cancelText: string;
  @Prop() description: string;
  @Prop() duration: string;
  @Prop() round = true;
  @Prop() overlay = false;
  @Prop() lockScroll = false;
  @Prop() lazyRender = false;
  @Prop() closeOnPopstate = false;
  @Prop() closeOnClickOverlay = true;
  @Prop() safeAreaInsetBottom = true;
  @Prop() teleport: string | object;
  @State() height = '0';
  @Event() glueCancel: EventEmitter;
  @Event() glueSelect: EventEmitter;
  @Event() glueOpen: EventEmitter;
  @Event() glueShow: EventEmitter;
  openHandle = () => {
    this.show = true;
    this.glueOpen.emit(true);
  };
  @Event() glueClose: EventEmitter;
  closeHandle = () => {
    this.show = false;
    // unlockScroll();
    this.glueClose.emit(false);
  };
  @Event() glueOpened: EventEmitter;
  openedHandle = () => {
    this.show = true;
    this.glueOpened.emit('opened');
  };
  @Event() glueClosed: EventEmitter;
  closedHandle = () => {
    this.show = false;
    this.glueClosed.emit('closed');
  };
  toggle = (value: boolean) => {
    this.glueShow.emit(value);
  };
  onCancel = () => {
    this.toggle(false);
    this.glueCancel.emit();
  };

  onSelect = (option: ShareSheetOption, index: number) => {
    this.glueSelect.emit({ option, index });
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
        class={classNames('glue-share-sheet__option', bem([className]))}
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

  renderOptions = (options: ShareSheetOption[], border?: boolean) => <div class={classNames('glue-share-sheet__options', bem([border]))}>{options.map(this.renderOption)}</div>;

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
  componentDidLoad() {
    this.height = getVisibleHeight(this.refContent).toString() + 'px';
    console.log(this.height, this.refContent.offsetHeight, 'this.height');
  }
  render() {
    const { show, duration, round, overlay, lockScroll, lazyRender, closeOnClickOverlay } = this;
    return (
      <Host>
        <glue-popup
          class="glue-share-sheet"
          round={round}
          position="bottom"
          safeAreaInsetBottom={this.safeAreaInsetBottom}
          show={show}
          height={this.height}
          duration={duration}
          overlay={overlay}
          lockScroll={lockScroll}
          lazyRender={lazyRender}
          closeOnClickOverlay={closeOnClickOverlay}
          onGlueOpen={this.openHandle}
          onGlueClose={this.closeHandle}
          onGlueOpened={this.openedHandle}
          onGlueClosed={this.closedHandle}
        >
          <div
            class="glue-share-sheet__content"
            ref={dom => {
              this.refContent = dom;
            }}
          >
            {this.renderHeader()}
            {this.renderRows()}
            {this.renderCancelText()}
          </div>
        </glue-popup>
      </Host>
    );
  }
}
