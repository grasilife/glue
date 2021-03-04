import { Component, Prop, h, Host } from '@stencil/core';
// import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { getSizeStyle } from '../../utils/format/unit';
import { isImageFile } from '../glue-uploader/utils';
export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
@Component({
  tag: 'glue-preview-item',
  styleUrl: 'glue-preview-item.less',
  shadow: false,
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
  renderMask = () => {
    const { status, message } = this.item;

    if (status === 'uploading' || status === 'failed') {
      const MaskIcon = status === 'failed' ? <glue-icon name="close" class="glue-preview-item__mask-icon" /> : <glue-loading class="glue-preview-item__loading" />;

      const showMessage = isDef(message) && message !== '';

      return (
        <div class="glue-preview-item__mask">
          {MaskIcon}
          {showMessage && <div class="glue-preview-item__mask-message">{message}</div>}
        </div>
      );
    }
  };

  onDelete = event => {
    // const { name, item, index, beforeDelete } = this;
    event.stopPropagation();
    // callInterceptor({
    //   interceptor: beforeDelete,
    //   args: [item, { name, index }],
    //   done() {
    //     // emit('delete');
    //   },
    // });
  };

  onPreview = () => {
    // emit('preview');
  };

  renderDeleteIcon = () => {
    if (this.deletable && this.item.status !== 'uploading') {
      return (
        <div class="glue-preview-item__preview-delete" onClick={this.onDelete}>
          <glue-icon name="cross" class="glue-preview-item__preview-delete-icon" />
        </div>
      );
    }
  };

  renderCover = () => {
    // if (slots['preview-cover']) {
    //   const { index, item } = this;
    //   return <div class="glue-preview-item__preview-cover">{/* {slots['preview-cover']({ index, ...item })} */}</div>;
    // }
  };

  renderPreview = () => {
    const { item } = this;

    if (isImageFile(item)) {
      return (
        <glue-image
          fit={this.imageFit}
          src={item.content || item.url}
          class="glue-preview-item__preview-image"
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
      <div class="glue-preview-item__file" style={getSizeStyle(this.previewSize)}>
        <glue-icon class="glue-preview-item__file-icon" name="description" />
        <div class="glue-preview-item__file-name van-ellipsis">{item.file ? item.file.name : item.url}</div>
        {this.renderCover()}
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-preview-item__preview">
        {this.renderPreview()}
        {this.renderMask()}
        {this.renderDeleteIcon()}
      </Host>
    );
  }
}
