# glue-share-sheet



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type               | Default       |
| --------------------- | ------------------------ | ----------- | ------------------ | ------------- |
| `cancelText`          | `cancel-text`            |             | `string`           | `undefined`   |
| `closeIcon`           | `close-icon`             |             | `string`           | `'cross'`     |
| `closeIconPosition`   | `close-icon-position`    |             | `string`           | `'top-right'` |
| `closeOnClickOverlay` | `close-on-click-overlay` |             | `boolean`          | `true`        |
| `closeOnPopstate`     | `close-on-popstate`      |             | `boolean`          | `true`        |
| `closeable`           | `closeable`              |             | `boolean`          | `undefined`   |
| `description`         | `description`            |             | `string`           | `undefined`   |
| `duration`            | `duration`               |             | `string`           | `undefined`   |
| `height`              | `height`                 |             | `string`           | `undefined`   |
| `lazyRender`          | `lazy-render`            |             | `boolean`          | `true`        |
| `lockScroll`          | `lock-scroll`            |             | `boolean`          | `true`        |
| `options`             | --                       |             | `any[]`            | `[]`          |
| `overlay`             | `overlay`                |             | `boolean`          | `true`        |
| `overlayClass`        | `overlay-class`          |             | `any`              | `null`        |
| `overlayStyle`        | --                       |             | `object`           | `undefined`   |
| `position`            | `position`               |             | `string`           | `'center'`    |
| `round`               | `round`                  |             | `boolean`          | `true`        |
| `safeAreaInsetBottom` | `safe-area-inset-bottom` |             | `boolean`          | `true`        |
| `show`                | `show`                   |             | `boolean`          | `undefined`   |
| `teleport`            | `teleport`               |             | `object \| string` | `undefined`   |
| `title`               | `title`                  |             | `string`           | `undefined`   |
| `transition`          | `transition`             |             | `string`           | `undefined`   |
| `transitionAppear`    | `transition-appear`      |             | `boolean`          | `undefined`   |
| `width`               | `width`                  |             | `string`           | `undefined`   |
| `zIndex`              | `z-index`                |             | `string`           | `'2000'`      |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `cancel`     |             | `CustomEvent<any>` |
| `select`     |             | `CustomEvent<any>` |
| `showChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-popup](../glue-popup)

### Graph
```mermaid
graph TD;
  glue-share-sheet --> glue-popup
  glue-popup --> glue-icon
  glue-popup --> glue-overlay
  glue-icon --> glue-badge
  style glue-share-sheet fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
