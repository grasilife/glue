import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { getSizeStyle } from '../../utils/format/unit';
import { pick } from '../../utils/base';
import { isImageFile, readFileContent, isOversize, filterFiles, toArray } from './utils';
console.log(isImageFile, toArray);
import { isPromise } from '../../utils/base';
export type ResultType = 'dataUrl' | 'text' | 'file';
let imagePreview;
@Component({
  tag: 'glue-uploader',
  styleUrl: 'glue-uploader.less',
  shadow: false,
})
export class GlueUploader {
  @Prop() capture: string;
  @Prop() multiple: boolean;
  @Prop() disabled: boolean;
  @Prop() lazyLoad: boolean;
  @Prop() uploadText: string;
  //TODO:props不能传递函数afterRead,beforeRead,beforeDelete
  @Prop() afterRead: any;
  @Prop() beforeRead: any;
  @Prop() beforeDelete: any;
  @Prop() previewSize: string | number;
  @Prop() previewOptions: object;
  @Prop() name = '';
  @Prop() accept = 'image/*';
  //数组失效
  @Prop() value = [];
  @Prop() maxSize = Number.MAX_VALUE;
  @Prop() maxCount = Number.MAX_VALUE;
  @Prop() deletable = false;
  @Prop() showUpload = false;
  @Prop() previewImage = false;
  @Prop() previewFullImage = false;
  @Prop() imageFit = 'cover';
  @Prop() resultType: ResultType = 'dataUrl';
  @Prop() uploadIcon = 'photograph';
  @Prop() customUpload = '';
  //TODO:previewCover因为不支持slot传参,所以还未实现
  @Prop() previewCover = '';
  @Event() glueDelete: EventEmitter;
  @Event() gluePreview: EventEmitter;
  @Event() glueClosePreview: EventEmitter;
  @Event() glueOversize: EventEmitter;
  @State() items;
  inputRef: HTMLElement;
  getDetail = (index = this.value.length) => ({
    name: this.name,
    index,
  });

  resetInput = () => {
    if (this.inputRef) {
      console.log(this.inputRef, 'this.inputRef');
      this.inputRef['value'] = '';
    }
  };

  onAfterRead = items => {
    this.resetInput();

    if (isOversize(items, this.maxSize)) {
      if (Array.isArray(items)) {
        const result = filterFiles(items, this.maxSize);
        items = result.valid;
        this.glueOversize.emit({
          item: result.invalid,
          detail: this.getDetail(),
        });
        if (!items.length) {
          return;
        }
      } else {
        this.glueOversize.emit({
          item: items,
          detail: this.getDetail(),
        });
        return;
      }
    }
    this.value = [...this.value, ...toArray(items)];
    console.log(this.afterRead, 'this.afterRead');
    if (this.afterRead) {
      this.afterRead(items, this.getDetail());
    }
  };

  readFile = files => {
    const { maxCount, value, resultType } = this;

    if (Array.isArray(files)) {
      const remainCount = maxCount - value.length;

      if (files.length > remainCount) {
        files = files.slice(0, remainCount);
      }

      Promise.all(files.map(file => readFileContent(file, resultType))).then(contents => {
        const fileList = files.map((file, index) => {
          const result = { file, status: '', message: '' };
          console.log(result, 'result');
          if (contents[index]) {
            result['content'] = contents[index];
          }

          return result;
        });

        this.onAfterRead(fileList);
      });
    } else {
      readFileContent(files, resultType).then(content => {
        //content为base64格式数据
        const result = { file: files, status: '', message: '' };
        console.log(result, 'result2');
        if (content) {
          result['content'] = content;
        }

        this.onAfterRead(result);
      });
    }
  };

  onChange = event => {
    console.log(event.target, 'event');
    let { files } = event.target;

    if (this.disabled || !files.length) {
      return;
    }

    files = files.length === 1 ? files[0] : [].slice.call(files);
    console.log(this.beforeRead, this.afterRead, 'this.beforeRead');
    if (this.beforeRead) {
      const response = this.beforeRead(files, this.getDetail());
      console.log(response, 'responseresponse');
      if (!response) {
        this.resetInput();
        return;
      }

      if (isPromise(response)) {
        response
          .then(data => {
            if (data) {
              this.readFile(data);
            } else {
              this.readFile(files);
            }
          })
          .catch(this.resetInput);
        return;
      }
    }
    console.log(files, 'files');
    this.readFile(files);
  };

  // let imagePreview;

  onClosePreview = () => {
    this.glueClosePreview.emit();
  };

  renderPreviewImage = item => {
    console.log(item, '预览');
    if (this.previewFullImage) {
      const imageFiles = this.value.filter(isImageFile);
      console.log(imageFiles, 'imageFiles');

      // const images = imageFiles.map(item => item.content || item.url);
      // imagePreview = ImagePreview({
      //   images,
      //   startPosition: imageFiles.indexOf(item),
      //   onClose: onClosePreview,
      //   ...this.previewOptions,
      // });
    }
  };

  closeImagePreview = () => {
    if (imagePreview) {
      imagePreview.close();
    }
  };

  deleteFile = (item, index) => {
    console.log(item);
    const fileList = this.value.slice(0);
    fileList.splice(index, 1);
    this.value = fileList;
    this.glueDelete.emit({
      item: item,
      detail: this.getDetail(index),
    });
  };

  renderPreviewItem = (item, index) => {
    console.log(item, index, 'item, index');
    const needPickData = ['imageFit', 'deletable', 'previewSize', 'beforeDelete'];

    const previewData = pick(this, needPickData);
    const previewProp = pick(item, needPickData);
    console.log(previewData, 'previewData');
    Object.keys(previewProp).forEach(item => {
      if (previewProp[item] !== undefined) {
        previewData[item] = previewProp[item];
      }
    });
    console.log(item, 'item数据');
    return (
      <glue-uploader-preview-item
        item={item}
        index={index}
        onClick={() => {
          this.gluePreview.emit({
            item: item,
            detail: this.getDetail(index),
          });
        }}
        onGlueDelete={() => {
          this.deleteFile(item, index);
        }}
        onGluePreview={() => {
          this.renderPreviewImage(item);
        }}
        previewCover={this.previewCover}
        {...pick(this, ['name', 'lazyLoad'])}
        {...previewData}
      />
    );
  };

  renderPreviewList = () => {
    if (this.previewImage) {
      return this.value.map(this.renderPreviewItem);
    }
  };

  renderUpload = () => {
    console.log(this.value, this.maxCount, this.showUpload, 'this.value');
    if (this.value.length >= this.maxCount || !this.showUpload) {
      return;
    }

    const Input = (
      <input
        ref={dom => {
          this.inputRef = dom;
        }}
        type="file"
        class="glue-uploader__input"
        accept={this.accept}
        capture={this.capture}
        multiple={this.multiple}
        disabled={this.disabled}
        onChange={this.onChange}
      />
    );

    if (this.customUpload == '#slot') {
      return (
        <div class="glue-uploader__input-wrapper">
          <slot></slot>
          {Input}
        </div>
      );
    }

    return (
      <div class="glue-uploader__upload" style={getSizeStyle(this.previewSize)}>
        <glue-icon name={this.uploadIcon} class="glue-uploader__upload-icon" size="24" />
        {this.uploadText && <span class="glue-uploader__upload-text">{this.uploadText}</span>}
        {Input}
      </div>
    );
  };

  chooseFile = () => {
    if (this.inputRef && !this.disabled) {
      this.inputRef.click();
    }
  };
  render() {
    return (
      <Host class="glue-uploader">
        <div
          class={classNames('glue-uploader__wrapper', {
            'glue-uploader--disabled': this.disabled,
          })}
        >
          {this.renderPreviewList()}
          {this.renderUpload()}
        </div>
      </Host>
    );
  }
}
