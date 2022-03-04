# glue-nav-bar

<!-- Auto Generated Below -->

## Properties

| Property           | Attribute             | Description | Type      | Default     |
| ------------------ | --------------------- | ----------- | --------- | ----------- |
| `border`           | `border`              |             | `boolean` | `true`      |
| `fixed`            | `fixed`               |             | `boolean` | `undefined` |
| `g_title`          | `g_title`             |             | `string`  | `undefined` |
| `leftArrow`        | `left-arrow`          |             | `boolean` | `undefined` |
| `leftText`         | `left-text`           |             | `string`  | `undefined` |
| `placeholder`      | `placeholder`         |             | `boolean` | `undefined` |
| `rightText`        | `right-text`          |             | `string`  | `undefined` |
| `safeAreaInsetTop` | `safe-area-inset-top` |             | `boolean` | `undefined` |
| `zIndex`           | `z-index`             |             | `string`  | `undefined` |

## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `glueLeft`  |             | `CustomEvent<any>` |
| `glueRight` |             | `CustomEvent<any>` |

## Dependencies

### Depends on

- [glue-icon](../glue-icon)

### Graph

```mermaid
graph TD;
  glue-nav-bar --> glue-icon
  glue-icon --> glue-badge
  style glue-nav-bar fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
