# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

## 代码演示

### 基础用法

文件上传完毕后会触发 `after-read` 回调函数，获取到对应的 `file` 对象。

```html
<glue-uploader :after-read="afterRead" />
```

```js
export default {
  setup() {
    const afterRead = file => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

    return {
      afterRead
    };
  }
};
```

### 文件预览

通过 `list` 可以绑定已经上传的文件列表，并展示文件列表的预览图。

```html
<glue-uploader :list.prop="fileList" multiple />
```

```js
import { ref } from "vue";

export default {
  setup() {
    const fileList = ref([
      { url: "https://img01.yzcdn.cn/vant/leaf.jpg" },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      { url: "https://cloud-image", isImage: true }
    ]);

    return {
      fileList
    };
  }
};
```

### 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

```html
<glue-uploader :list.prop="fileList" :after-read="afterRead" />
```

```js
import { ref } from "vue";

export default {
  setup() {
    const fileList = ref([
      {
        url: "https://img01.yzcdn.cn/vant/leaf.jpg",
        status: "uploading",
        message: "上传中..."
      },
      {
        url: "https://img01.yzcdn.cn/vant/tree.jpg",
        status: "failed",
        message: "上传失败"
      }
    ]);

    const afterRead = file => {
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
    };

    return {
      fileList,
      afterRead
    };
  }
};
```

### 限制上传数量

通过 `max-count` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```html
<glue-uploader :list.prop="fileList" multiple :max-count="2" />
```

```js
import { ref } from "vue";

export default {
  setup() {
    const fileList = ref([]);

    return {
      fileList
    };
  }
};
```

### 限制上传大小

通过 `max-size` 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 `oversize` 事件获取。

```html
<glue-uploader multiple :max-size="500 * 1024" @oversize="onOversize" />
```

```js
import { Toast } from "vant";

export default {
  setup() {
    const onOversize = file => {
      console.log(file);
      Toast("文件大小不能超过 500kb");
    };

    return {
      onOversize
    };
  }
};
```

### 自定义上传样式

通过默认插槽可以自定义上传区域的样式。

```html
<glue-uploader>
  <glue-button icon="plus" type="primary">上传文件</glue-button>
</glue-uploader>
```

### 自定义预览样式

通过 `preview-cover` 插槽可以自定义覆盖在预览区域上方的内容。

```html
<glue-uploader :list.prop="fileList">
  <template #preview-cover="{ file }">
    <div class="preview-cover glue-ellipsis">{{ file.name }}</div>
  </template>
</glue-uploader>

<style>
  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
```

### 上传前置处理

通过传入 `beforeRead` 函数可以在上传前进行校验和处理，返回 `true` 表示校验通过，返回 `false` 表示校验失败。支持返回 `Promise` 对 file 对象进行自定义处理，例如压缩图片。

```html
<glue-uploader :before-read="beforeRead" />
```

```js
import { Toast } from "vant";

export default {
  setup() {
    // 返回布尔值
    const beforeRead = file => {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }
      return true;
    };

    // 返回 Promise
    const asyncBeforeRead = file => {
      return new Promise((resolve, reject) => {
        if (file.type !== "image/jpeg") {
          Toast("请上传 jpg 格式图片");
          reject();
        } else {
          let img = new File(["foo"], "bar.jpg", {
            type: "image/jpeg"
          });
          resolve(img);
        }
      });
    };

    return {
      beforeRead,
      asyncBeforeRead
    };
  }
};
```

### 禁用文件上传

通过 `disabled` 属性禁用文件上传。

```html
<glue-uploader disabled />
```

### 自定义单个图片预览

在 `:list.prop` 数组中设置单个预览图片属性，支持 `imageFit` `deletable` `previewSize` `beforeDelete`。

```html
<glue-uploader :list.prop="fileList" :deletable="false" />
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const fileList = ref([
      { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
      {
        url: 'https://img01.yzcdn.cn/vant/sand.jpg',
        deletable: true,
        beforeDelete: () => {
          Toast('自定义单个预览图片的事件和样式');
        },
      },
      {
        url: 'https://img01.yzcdn.cn/vant/tree.jpg',
        deletable: true,
        imageFit: 'contain',
        previewSize: 120,
      },
    ]);
    return {
      fileList:
    };
  }
};
```

## API

### Props

| 参数               | 说明                                                                                                                                                                                   | 类型               | 默认值       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------ |
| list               | 已上传的文件列表                                                                                                                                                                       | _FileListItem[]_   | -            |
| accept             | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_           | `image/*`    |
| name               | 标识符，可以在回调函数的第二项参数中获取                                                                                                                                               | _number \| string_ | -            |
| preview-size       | 预览图和上传区域的尺寸，默认单位为 `px`                                                                                                                                                | _number \| string_ | `80px`       |
| preview-image      | 是否在上传完成后展示预览图                                                                                                                                                             | _boolean_          | `true`       |
| preview-full-image | 是否在点击预览图后展示全屏图片预览                                                                                                                                                     | _boolean_          | `true`       |
| preview-options    | 全屏图片预览的配置项，可选值见 [ImagePreview](#/zh-CN/image-preview)                                                                                                                   | _object_           | -            |
| multiple           | 是否开启图片多选，部分安卓机型不支持                                                                                                                                                   | _boolean_          | `false`      |
| disabled           | 是否禁用文件上传                                                                                                                                                                       | _boolean_          | `false`      |
| deletable          | 是否展示删除按钮                                                                                                                                                                       | _boolean_          | `true`       |
| show-upload        | 是否展示上传区域                                                                                                                                                                       | _boolean_          | `true`       |
| lazy-load          | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用                                                                                                                       | _boolean_          | `false`      |
| capture            | 图片选取模式，可选值为 `camera` (直接调起摄像头)                                                                                                                                       | _string_           | -            |
| after-read         | 文件读取完成后的回调函数                                                                                                                                                               | _Function_         | -            |
| before-read        | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise`                                                                                                              | _Function_         | -            |
| before-delete      | 文件删除前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise`                                                                                                              | _Function_         | -            |
| max-size           | 文件大小限制，单位为 `byte`                                                                                                                                                            | _number \| string_ | -            |
| max-count          | 文件上传数量限制                                                                                                                                                                       | _number \| string_ | -            |
| result-type        | 文件读取结果类型，可选值为 `file` `text`                                                                                                                                               | _string_           | `dataUrl`    |
| upload-text        | 上传区域文字提示                                                                                                                                                                       | _string_           | -            |
| image-fit          | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件                                                                                                                                   | _string_           | `cover`      |
| upload-icon        | 上传区域[图标名称](#/zh-CN/icon)或图片链接                                                                                                                                             | _string_           | `photograph` |

### Events

| 事件名        | 说明                   | 回调参数        |
| ------------- | ---------------------- | --------------- |
| oversize      | 文件大小超过限制时触发 | 同 `after-read` |
| click-preview | 点击预览图时触发       | 同 `after-read` |
| close-preview | 关闭全屏图片预览时触发 | -               |
| delete        | 删除文件预览时触发     | 同 `after-read` |

### Slots

| 名称          | 说明                           | 参数                 |
| ------------- | ------------------------------ | -------------------- |
| default       | 自定义上传区域                 | -                    |
| preview-cover | 自定义覆盖在预览区域上方的内容 | _item: FileListItem_ |

### 回调参数

before-read、after-read、before-delete 执行时会传递以下回调参数：

| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | file 对象                         | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |

### ResultType  可选值

`result-type` 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值      | 描述                                           |
| ------- | ---------------------------------------------- |
| file    | 结果仅包含 File 对象                           |
| text    | 结果包含 File 对象，以及文件的文本内容         |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

### 方法

通过 ref 可以获取到 Uploader 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名            | 说明                                                                         | 参数 | 返回值 |
| ----------------- | ---------------------------------------------------------------------------- | ---- | ------ |
| closeImagePreview | 关闭全屏的图片预览                                                           | -    | -      |
| chooseFile        | 主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效 | -    | -      |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                               | 默认值               | 描述 |
| ---------------------------------- | -------------------- | ---- |
| @uploader-size                     | `80px`               | -    |
| @uploader-icon-size                | `24px`               | -    |
| @uploader-icon-color               | `@gray-4`            | -    |
| @uploader-text-color               | `@gray-6`            | -    |
| @uploader-text-font-size           | `@font-size-sm`      | -    |
| @uploader-upload-background-color  | `@gray-1`            | -    |
| @uploader-upload-active-color      | `@active-color`      | -    |
| @uploader-delete-color             | `@white`             | -    |
| @uploader-delete-icon-size         | `14px`               | -    |
| @uploader-delete-background-color  | `rgba(0, 0, 0, 0.7)` | -    |
| @uploader-file-background-color    | `@background-color`  | -    |
| @uploader-file-icon-size           | `20px`               | -    |
| @uploader-file-icon-color          | `@gray-7`            | -    |
| @uploader-file-name-padding        | `0 @padding-base`    | -    |
| @uploader-file-name-margin-top     | `@padding-xs`        | -    |
| @uploader-file-name-font-size      | `@font-size-sm`      | -    |
| @uploader-file-name-text-color     | `@gray-7`            | -    |
| @uploader-mask-background-color    | `fade(@gray-8, 88%)` | -    |
| @uploader-mask-icon-size           | `22px`               | -    |
| @uploader-mask-message-font-size   | `@font-size-sm`      | -    |
| @uploader-mask-message-line-height | `@line-height-xs`    | -    |
| @uploader-loading-icon-size        | `22px`               | -    |
| @uploader-loading-icon-color       | `@white`             | -    |
| @uploader-disabled-opacity         | `@disabled-opacity`  | -    |
