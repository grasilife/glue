# glue-number-keyboard

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute                | Description | Type               | Default            |
| --------------------- | ------------------------ | ----------- | ------------------ | ------------------ |
| `blurOnClose`         | `blur-on-close`          |             | `boolean`          | `true`             |
| `closeButtonLoading`  | `close-button-loading`   |             | `boolean`          | `undefined`        |
| `closeButtonText`     | `close-button-text`      |             | `string`           | `undefined`        |
| `deleteButtonText`    | `delete-button-text`     |             | `string`           | `undefined`        |
| `extraKey`            | `extra-key`              |             | `string`           | `''`               |
| `g_title`             | `g_title`                |             | `string`           | `undefined`        |
| `hideOnClickOutside`  | `hide-on-click-outside`  |             | `boolean`          | `true`             |
| `maxlength`           | `maxlength`              |             | `number`           | `Number.MAX_VALUE` |
| `modelValue`          | `model-value`            |             | `string`           | `''`               |
| `randomKeyOrder`      | `random-key-order`       |             | `boolean`          | `undefined`        |
| `safeAreaInsetBottom` | `safe-area-inset-bottom` |             | `boolean`          | `true`             |
| `show`                | `show`                   |             | `boolean`          | `undefined`        |
| `showDeleteKey`       | `show-delete-key`        |             | `boolean`          | `true`             |
| `teleport`            | `teleport`               |             | `number \| string` | `undefined`        |
| `theme`               | `theme`                  |             | `string`           | `'default'`        |
| `transition`          | `transition`             |             | `boolean`          | `true`             |
| `zIndex`              | `z-index`                |             | `string`           | `undefined`        |

## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `glueBlur`   |             | `CustomEvent<any>` |
| `glueChange` |             | `CustomEvent<any>` |
| `glueClose`  |             | `CustomEvent<any>` |
| `glueDelete` |             | `CustomEvent<any>` |
| `glueInput`  |             | `CustomEvent<any>` |

## Dependencies

### Depends on

- [glue-key](../glue-key)

### Graph

```mermaid
graph TD;
  glue-number-keyboard --> glue-key
  glue-key --> glue-loading
  style glue-number-keyboard fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
