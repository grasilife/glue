# glue-preview-item

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description | Type                                                       | Default     |
| -------------- | --------------- | ----------- | ---------------------------------------------------------- | ----------- |
| `beforeDelete` | `before-delete` |             | `any`                                                      | `undefined` |
| `deletable`    | `deletable`     |             | `boolean`                                                  | `undefined` |
| `imageFit`     | `image-fit`     |             | `"contain" \| "cover" \| "fill" \| "none" \| "scale-down"` | `undefined` |
| `index`        | `index`         |             | `number`                                                   | `undefined` |
| `item`         | `item`          |             | `any`                                                      | `undefined` |
| `lazyLoad`     | `lazy-load`     |             | `boolean`                                                  | `undefined` |
| `name`         | `name`          |             | `string`                                                   | `undefined` |
| `previewCover` | `preview-cover` |             | `string`                                                   | `''`        |
| `previewSize`  | `preview-size`  |             | `number \| string`                                         | `undefined` |

## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `glueDelete`  |             | `CustomEvent<any>` |
| `gluePreview` |             | `CustomEvent<any>` |

## Dependencies

### Used by

- [glue-uploader](../glue-uploader)

### Depends on

- [glue-icon](../glue-icon)
- [glue-loading](../glue-loading)
- [glue-image](../glue-image)

### Graph

```mermaid
graph TD;
  glue-uploader-preview-item --> glue-icon
  glue-uploader-preview-item --> glue-loading
  glue-uploader-preview-item --> glue-image
  glue-icon --> glue-badge
  glue-image --> glue-icon
  glue-uploader --> glue-uploader-preview-item
  style glue-uploader-preview-item fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
