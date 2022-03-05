# glue-uploader

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type                            | Default            |
| ------------------ | -------------------- | ----------- | ------------------------------- | ------------------ |
| `accept`           | `accept`             |             | `string`                        | `'image/*'`        |
| `afterRead`        | `after-read`         |             | `any`                           | `undefined`        |
| `beforeDelete`     | `before-delete`      |             | `any`                           | `undefined`        |
| `beforeRead`       | `before-read`        |             | `any`                           | `undefined`        |
| `capture`          | `capture`            |             | `string`                        | `undefined`        |
| `customUpload`     | `custom-upload`      |             | `string`                        | `''`               |
| `deletable`        | `deletable`          |             | `boolean`                       | `false`            |
| `disabled`         | `disabled`           |             | `boolean`                       | `undefined`        |
| `imageFit`         | `image-fit`          |             | `string`                        | `'cover'`          |
| `lazyLoad`         | `lazy-load`          |             | `boolean`                       | `undefined`        |
| `maxCount`         | `max-count`          |             | `number`                        | `Number.MAX_VALUE` |
| `maxSize`          | `max-size`           |             | `number`                        | `Number.MAX_VALUE` |
| `multiple`         | `multiple`           |             | `boolean`                       | `undefined`        |
| `name`             | `name`               |             | `string`                        | `''`               |
| `previewCover`     | `preview-cover`      |             | `string`                        | `''`               |
| `previewFullImage` | `preview-full-image` |             | `boolean`                       | `false`            |
| `previewImage`     | `preview-image`      |             | `boolean`                       | `false`            |
| `previewOptions`   | --                   |             | `object`                        | `undefined`        |
| `previewSize`      | `preview-size`       |             | `number \| string`              | `undefined`        |
| `resultType`       | `result-type`        |             | `"dataUrl" \| "file" \| "text"` | `'dataUrl'`        |
| `showUpload`       | `show-upload`        |             | `boolean`                       | `false`            |
| `uploadIcon`       | `upload-icon`        |             | `string`                        | `'photograph'`     |
| `uploadText`       | `upload-text`        |             | `string`                        | `undefined`        |
| `value`            | --                   |             | `any[]`                         | `[]`               |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `glueClosePreview` |             | `CustomEvent<any>` |
| `glueDelete`       |             | `CustomEvent<any>` |
| `glueOversize`     |             | `CustomEvent<any>` |
| `gluePreview`      |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-uploader-preview-item](../glue-uploader-preview-item)
- [glue-icon](../glue-icon)

### Graph
```mermaid
graph TD;
  glue-uploader --> glue-uploader-preview-item
  glue-uploader --> glue-icon
  glue-uploader-preview-item --> glue-icon
  glue-uploader-preview-item --> glue-loading
  glue-uploader-preview-item --> glue-image
  glue-icon --> glue-badge
  glue-image --> glue-icon
  style glue-uploader fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
