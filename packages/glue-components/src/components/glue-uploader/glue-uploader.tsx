import { Component, Prop, h, Host, State } from '@stencil/core';
import classNames from 'classnames';
import { getSizeStyle } from '../../utils/format/unit';
import { pick } from '../../utils/base';
import { isImageFile, readFileContent, isOversize, filterFiles, toArray } from './utils';
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
  @Prop() afterRead: any;
  @Prop() beforeRead: any;
  @Prop() beforeDelete: any;
  @Prop() previewSize: string | number;
  @Prop() previewOptions: object;
  @Prop() name = '';
  @Prop() accept = 'image/*';
  @Prop() modelValue: [];
  @Prop() maxSize = Number.MAX_VALUE;
  @Prop() maxCount = Number.MAX_VALUE;
  @Prop() deletable = true;
  @Prop() showUpload = true;
  @Prop() previewImage = true;
  @Prop() previewFullImage = true;
  @Prop() imageFit = 'cover';
  @Prop() resultType: ResultType = 'dataUrl';
  @Prop() uploadIcon = 'photograph';
  @State() items;
  inputRef: HTMLElement;
  getDetail = (index = this.modelValue.length) => ({
    name: this.name,
    index,
  });

  resetInput = () => {
    if (this.inputRef) {
      // this.inputRef = '';
    }
  };

  onAfterRead = items => {
    this.resetInput();

    if (isOversize(items, this.maxSize)) {
      if (Array.isArray(items)) {
        const result = filterFiles(items, this.maxSize);
        items = result.valid;
        // emit('oversize', result.invalid, this.getDetail());

        if (!items.length) {
          return;
        }
      } else {
        // emit('oversize', items, this.getDetail());
        return;
      }
    }
    // emit('update:modelValue', [...this.modelValue, ...toArray(items)]);

    if (this.afterRead) {
      this.afterRead(items, this.getDetail());
    }
  };

  readFile = files => {
    const { maxCount, modelValue, resultType } = this;

    if (Array.isArray(files)) {
      const remainCount = maxCount - modelValue.length;

      if (files.length > remainCount) {
        files = files.slice(0, remainCount);
      }

      Promise.all(files.map(file => readFileContent(file, resultType))).then(contents => {
        const fileList = files.map((file, index) => {
          const result = { file, status: '', message: '' };

          if (contents[index]) {
            // result.content = contents[index];
          }

          return result;
        });

        this.onAfterRead(fileList);
      });
    } else {
      readFileContent(files, resultType).then(content => {
        const result = { file: files, status: '', message: '' };

        if (content) {
          // result.content = content;
        }

        this.onAfterRead(result);
      });
    }
  };

  onChange = event => {
    let { files } = event.target;

    if (this.disabled || !files.length) {
      return;
    }

    files = files.length === 1 ? files[0] : [].slice.call(files);

    if (this.beforeRead) {
      const response = this.beforeRead(files, this.getDetail());

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

    this.readFile(files);
  };

  // let imagePreview;

  onClosePreview = () => {
    // emit('close-preview');
  };

  // previewImage = item => {
  //   if (this.previewFullImage) {
  //     const imageFiles = this.modelValue.filter(isImageFile);
  //     const images = imageFiles.map(item => item.content || item.url);

  //     imagePreview = ImagePreview({
  //       images,
  //       startPosition: imageFiles.indexOf(item),
  //       onClose: onClosePreview,
  //       ...this.previewOptions,
  //     });
  //   }
  // };

  closeImagePreview = () => {
    if (imagePreview) {
      imagePreview.close();
    }
  };

  deleteFile = (item, index) => {
    const fileList = this.modelValue.slice(0);
    fileList.splice(index, 1);

    // emit('update:modelValue', fileList);
    // emit('delete', item, getDetail(index));
  };

  renderPreviewItem = (item, index) => {
    console.log(index);
    const needPickData = ['imageFit', 'deletable', 'previewSize', 'beforeDelete'];

    const previewData = pick(this, needPickData);
    const previewProp = pick(item, needPickData);

    Object.keys(previewProp).forEach(item => {
      if (previewProp[item] !== undefined) {
        previewData[item] = previewProp[item];
      }
    });

    // return (
    //   <PreviewItem
    //     v-slots={{ 'preview-cover': slots['preview-cover'] }}
    //     item={item}
    //     index={index}
    //     onClick={() => {
    //       emit('click-preview', item, getDetail(index));
    //     }}
    //     onDelete={() => {
    //       deleteFile(item, index);
    //     }}
    //     onPreview={() => {
    //       previewImage(item);
    //     }}
    //     {...pick(this, ['name', 'lazyLoad'])}
    //     {...previewData}
    //   />
    // );
  };

  renderPreviewList = () => {
    if (this.previewImage) {
      return this.modelValue.map(this.renderPreviewItem);
    }
  };

  renderUpload = () => {
    if (this.modelValue.length >= this.maxCount || !this.showUpload) {
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

    // if (slots.default) {
    //   return (
    //     <div class={bem('input-wrapper')}>
    //       <slot></slot>
    //       {Input}
    //     </div>
    //   );
    // }

    return (
      <div class="glue-uploader__upload" style={getSizeStyle(this.previewSize)}>
        <glue-icon name={this.uploadIcon} class="glue-uploader__upload-icon" />
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
