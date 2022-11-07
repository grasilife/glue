import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
} from '@stencil/core';
// import { pick } from '../../utils/base';
import { getVisibleHeight } from '../../utils/dom/scroll';
import classNames from 'classnames';
export type ActionSheetAction = {
  name?: string;
  color?: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  className?: unknown;
};
@Component({
  tag: 'glue-action-sheet',
  styleUrl: 'glue-action-sheet.less',
  shadow: false,
})
export class GlueActionSheet {
  refContent: HTMLElement;
  @Prop({ mutable: true }) show: boolean;
  @Prop() actions: any;
  @Prop() gtitle: string;
  @Prop() cancelText: string;
  @Prop() description: string;
  @Prop() closeable: boolean;
  @Prop() closeIcon = 'cross';
  @Prop() duration: string;
  @Prop() round = true;
  @Prop() overlay = true;
  @Prop() lockScroll = true;
  @Prop() lazyRender = true;
  @Prop() closeOnClickAction: boolean;
  @Prop() closeOnClickOverlay = true;
  @Prop() safeAreaInsetBottom = false;
  @State() height = '0';
  @Event() glueSelect: EventEmitter;
  @Event() glueCancel: EventEmitter;
  @Event() glueShow: EventEmitter;
  openHandle = () => {
    this.show = true;
    this.glueShow.emit(true);
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
  // popupPropKeys = Object.keys(popupSharedProps);

  onUpdateShow = (show: boolean) => {
    this.glueShow.emit(show);
  };

  onCancelHandle = () => {
    this.onUpdateShow(false);
    this.glueCancel.emit();
  };

  renderHeader = () => {
    if (this.gtitle) {
      return (
        <div class="glue-action-sheet__header">
          {this.gtitle}
          {this.closeable && (
            <glue-icon
              name={this.closeIcon}
              class="glue-action-sheet__close"
              onClick={this.onCancelHandle}
            />
          )}
        </div>
      );
    }
  };

  renderCancel = () => {
    if (this.cancelText) {
      return [
        <div class="glue-action-sheet__gap" />,
        <button
          type="button"
          class="glue-action-sheet__cancel"
          onClick={this.onCancelHandle}
        >
          {this.cancelText}
        </button>,
      ];
    }
  };

  renderOption = (item: ActionSheetAction, index: number) => {
    console.log(index);
    const { name, color, subname, loading, callback, disabled, className } =
      item;

    const Content = loading ? (
      <glue-loading class="glue-action-sheet__loading-icon"></glue-loading>
    ) : (
      [
        <span class="glue-action-sheet__name">{name}</span>,
        subname && <div class="glue-action-sheet__subname">{subname}</div>,
      ]
    );

    const onClick = () => {
      if (disabled || loading) {
        return;
      }

      if (callback) {
        callback(item);
      }

      this.glueSelect.emit({
        item,
        index,
      });
      if (this.closeOnClickAction) {
        this.onUpdateShow(false);
      }
    };

    return (
      <button
        type="button"
        style={{ color }}
        class={classNames('glue-action-sheet__item', {
          'glue-action-sheet__loading': loading,
          'glue-action-sheet__disabled': disabled,
          ['glue-action-sheet__' + className]: className,
        })}
        onClick={onClick}
      >
        {Content}
      </button>
    );
  };

  renderDescription = () => {
    if (this.description) {
      const content = this.description;
      return <div class="glue-action-sheet__description">{content}</div>;
    }
  };

  renderOptions = () => {
    if (this.actions) {
      return this.actions.map(this.renderOption);
    }
  };
  componentDidLoad() {
    this.height = getVisibleHeight(this.refContent).toString() + 'px';
    console.log(this.height, this.refContent.offsetHeight, 'this.height');
  }
  render() {
    const {
      show,
      duration,
      closeable,
      closeIcon,
      round,
      overlay,
      lockScroll,
      lazyRender,
      closeOnClickOverlay,
    } = this;
    return (
      <Host class="glue-action-sheet">
        <glue-popup
          round={round}
          position="bottom"
          safeAreaInsetBottom={this.safeAreaInsetBottom}
          show={show}
          height={this.height}
          duration={duration}
          closeable={closeable}
          closeIcon={closeIcon}
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
            class="glue-action-sheet__content"
            ref={(dom) => {
              this.refContent = dom;
            }}
          >
            {this.renderHeader()}
            {this.renderDescription()}
            {this.renderOptions()}
            <slot></slot>
            {this.renderCancel()}
          </div>
        </glue-popup>
      </Host>
    );
  }
}
