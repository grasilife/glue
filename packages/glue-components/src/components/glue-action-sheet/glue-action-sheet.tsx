import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
// import { pick } from '../../utils/base';
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
  @Prop() closeOnPopstate: boolean;
  @Prop() safeAreaInsetBottom = false;
  @Prop() position = 'center';
  @Prop() closeIcon = 'cross';
  @Prop() closeIconPosition = 'top-right';
  @Prop() title: string;

  @Prop() actions: any;

  @Prop() cancelText: string;
  @Prop() description: boolean;
  @Prop() closeOnClickAction: boolean;
  @Event() onCancel: EventEmitter;
  @Event() onShow: EventEmitter;
  // popupPropKeys = Object.keys(popupSharedProps);

  onUpdateShow = (show: boolean) => {
    this.onShow.emit(show);
  };

  onCancelHandle = () => {
    this.onUpdateShow(false);
    this.onCancel.emit();
  };

  renderHeader = () => {
    if (this.title) {
      return (
        <div class="glue-action-sheet__header">
          {this.title}
          {this.closeable && <glue-icon name={this.closeIcon} class="glue-action-sheet__close" onClick={this.onCancelHandle} />}
        </div>
      );
    }
  };

  renderCancel = () => {
    if (this.cancelText) {
      return [
        <div class="glue-action-sheet__gap" />,
        <button type="button" class="glue-action-sheet__cancel" onClick={this.onCancelHandle}>
          {this.cancelText}
        </button>,
      ];
    }
  };

  renderOption = (item: ActionSheetAction, index: number) => {
    const { name, color, subname, loading, callback, disabled, className } = item;

    const Content = loading ? (
      <glue-loading class="glue-action-sheet__loading-icon"></glue-loading>
    ) : (
      [<span class="glue-action-sheet__name">{name}</span>, subname && <div class="glue-action-sheet__subname">{subname}</div>]
    );

    const onClick = () => {
      if (disabled || loading) {
        return;
      }

      if (callback) {
        callback(item);
      }

      // emit('select', item, index);

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
  render() {
    return (
      <Host class="glue-action-sheet">
        <glue-popup
          round={this.round}
          position="bottom"
          safeAreaInsetBottom={this.safeAreaInsetBottom}
          // {...{
          //   ...pick(this, popupPropKeys),
          //   'onUpdate:show': onUpdateShow,
          // }}
        >
          {this.renderHeader()}
          {this.renderDescription()}
          <div class="glue-action-sheet__content">
            {this.renderOptions()}
            <slot></slot>
          </div>
          {this.renderCancel()}
        </glue-popup>
      </Host>
    );
  }
}
