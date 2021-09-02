# glue-share-sheet

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute                | Description | Type               | Default     |
| --------------------- | ------------------------ | ----------- | ------------------ | ----------- |
| `cancelText`          | `cancel-text`            |             | `string`           | `undefined` |
| `closeOnClickOverlay` | `close-on-click-overlay` |             | `boolean`          | `true`      |
| `closeOnPopstate`     | `close-on-popstate`      |             | `boolean`          | `false`     |
| `description`         | `description`            |             | `string`           | `undefined` |
| `duration`            | `duration`               |             | `string`           | `undefined` |
| `lazyRender`          | `lazy-render`            |             | `boolean`          | `false`     |
| `lockScroll`          | `lock-scroll`            |             | `boolean`          | `false`     |
| `options`             | --                       |             | `any[]`            | `[]`        |
| `overlay`             | `overlay`                |             | `boolean`          | `false`     |
| `round`               | `round`                  |             | `boolean`          | `true`      |
| `safeAreaInsetBottom` | `safe-area-inset-bottom` |             | `boolean`          | `true`      |
| `show`                | `show`                   |             | `boolean`          | `undefined` |
| `teleport`            | `teleport`               |             | `object \| string` | `undefined` |
| `title`               | `title`                  |             | `string`           | `undefined` |

## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `glueCancel` |             | `CustomEvent<any>` |
| `glueClose`  |             | `CustomEvent<any>` |
| `glueClosed` |             | `CustomEvent<any>` |
| `glueOpen`   |             | `CustomEvent<any>` |
| `glueOpened` |             | `CustomEvent<any>` |
| `glueSelect` |             | `CustomEvent<any>` |
| `glueShow`   |             | `CustomEvent<any>` |

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

---

_Built with [StencilJS](https://stenciljs.com/)_
