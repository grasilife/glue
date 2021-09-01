import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';
// import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { getSizeStyle } from '../../utils/format/unit';
import { isImageFile } from '../glue-uploader/utils';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
@Component({
  tag: 'glue-uploader-preview-item',
  styleUrl: 'glue-uploader-preview-item.less',
  shadow: false
})
export class GluePreviewItem {
  @Prop() name: string;
  @Prop() item: any;
  @Prop() index: number;
  @Prop() imageFit: ImageFit;
  @Prop() lazyLoad: boolean;
  @Prop() deletable: boolean;
  @Prop() previewSize: string | number;
  @Prop() beforeDelete: any;
  @Prop() previewCover = '';
  @Event() glueDelete: EventEmitter;
  @Event() gluePreview: EventEmitter;
  renderMask = () => {
    const { status, message } = this.item;

    if (status === 'uploading' || status === 'failed') {
      const MaskIcon =
        status === 'failed' ? (
          <glue-icon
            name="close"
            size="24"
            class="glue-uploader-preview-item__mask-icon"
          />
        ) : (
          <glue-loading class="glue-uploader-preview-item__loading" />
        );

      const showMessage = isDef(message) && message !== '';

      return (
        <div class="glue-uploader-preview-item__mask">
          {MaskIcon}
          {showMessage && (
            <div class="glue-uploader-preview-item__mask-message">
              {message}
            </div>
          )}
        </div>
      );
    }
  };

  onDelete = (event) => {
    //TODO:需要完善
    event.stopPropagation();
    this.glueDelete.emit();
  };

  onPreview = () => {
    this.gluePreview.emit();
  };

  renderDeleteIcon = () => {
    if (this.deletable && this.item.status !== 'uploading') {
      return (
        <div class="glue-uploader-preview-item-delete" onClick={this.onDelete}>
          <glue-icon
            name="cross"
            class="glue-uploader-preview-item-delete-icon"
            size="24"
          />
        </div>
      );
    }
  };

  renderCover = () => {
    //TODO:需要完善
    if (this.previewCover == '#slot') {
      // const { index, item } = this;
      return (
        <div class="glue-uploader-preview-item__preview-cover">
          <slot name="preview-cover"></slot>
        </div>
      );
    }
  };

  renderPreview = () => {
    //TODO:isImageFile没太看懂
    const { item } = this;
    console.log(isImageFile(item), 'isImageFile(item)');
    if (isImageFile(item)) {
      return (
        <glue-image
          fit={this.imageFit}
          src={item.content || item.url}
          class="glue-uploader-preview-item-image"
          width={this.previewSize}
          height={this.previewSize}
          lazyLoad={this.lazyLoad}
          onClick={this.onPreview}
        >
          {this.renderCover()}
        </glue-image>
      );
    }

    return (
      <div
        class="glue-uploader-preview-item__file"
        style={getSizeStyle(this.previewSize)}
      >
        <glue-icon
          class="glue-uploader-preview-item__file-icon"
          name="description"
          size="24"
        />
        <div class="glue-uploader-preview-item__file-name glue-ellipsis">
          {item.file ? item.file.name : item.url}
        </div>
        {this.renderCover()}
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-uploader-preview-item">
        {this.renderPreview()}
        {this.renderMask()}
        {this.renderDeleteIcon()}
      </Host>
    );
  }
}
