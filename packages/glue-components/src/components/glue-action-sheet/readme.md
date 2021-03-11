# glue-action-sheet



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type               | Default       |
| --------------------- | ------------------------ | ----------- | ------------------ | ------------- |
| `actions`             | `actions`                |             | `any`              | `undefined`   |
| `cancelText`          | `cancel-text`            |             | `string`           | `undefined`   |
| `closeIcon`           | `close-icon`             |             | `string`           | `'cross'`     |
| `closeIconPosition`   | `close-icon-position`    |             | `string`           | `'top-right'` |
| `closeOnClickAction`  | `close-on-click-action`  |             | `boolean`          | `undefined`   |
| `closeOnClickOverlay` | `close-on-click-overlay` |             | `boolean`          | `true`        |
| `closeOnPopstate`     | `close-on-popstate`      |             | `boolean`          | `undefined`   |
| `closeable`           | `closeable`              |             | `boolean`          | `undefined`   |
| `description`         | `description`            |             | `boolean`          | `undefined`   |
| `duration`            | `duration`               |             | `string`           | `undefined`   |
| `height`              | `height`                 |             | `string`           | `undefined`   |
| `lazyRender`          | `lazy-render`            |             | `boolean`          | `true`        |
| `lockScroll`          | `lock-scroll`            |             | `boolean`          | `true`        |
| `overlay`             | `overlay`                |             | `boolean`          | `true`        |
| `overlayClass`        | `overlay-class`          |             | `any`              | `null`        |
| `overlayStyle`        | --                       |             | `object`           | `undefined`   |
| `position`            | `position`               |             | `string`           | `'center'`    |
| `round`               | `round`                  |             | `boolean`          | `true`        |
| `safeAreaInsetBottom` | `safe-area-inset-bottom` |             | `boolean`          | `false`       |
| `show`                | `show`                   |             | `boolean`          | `undefined`   |
| `teleport`            | `teleport`               |             | `object \| string` | `undefined`   |
| `title`               | `title`                  |             | `string`           | `undefined`   |
| `transition`          | `transition`             |             | `string`           | `undefined`   |
| `transitionAppear`    | `transition-appear`      |             | `boolean`          | `undefined`   |
| `width`               | `width`                  |             | `string`           | `undefined`   |
| `zIndex`              | `z-index`                |             | `string`           | `'2000'`      |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `onCancel` |             | `CustomEvent<any>` |
| `onShow`   |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-icon](../glue-icon)
- [glue-loading](../glue-loading)
- [glue-popup](../glue-popup)

### Graph
```mermaid
graph TD;
  glue-action-sheet --> glue-icon
  glue-action-sheet --> glue-loading
  glue-action-sheet --> glue-popup
  glue-icon --> glue-badge
  glue-popup --> glue-icon
  glue-popup --> glue-overlay
  style glue-action-sheet fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
