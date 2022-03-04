# glue-coupon

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `chosen`   | `chosen`   |             | `boolean` | `undefined` |
| `coupon`   | `coupon`   |             | `any`     | `undefined` |
| `currency` | `currency` |             | `string`  | `'¥'`       |
| `disabled` | `disabled` |             | `boolean` | `undefined` |

## Dependencies

### Used by

- [glue-coupon-list](../glue-coupon-list)

### Depends on

- [glue-checkbox](../glue-checkbox)

### Graph

```mermaid
graph TD;
  glue-coupon --> glue-checkbox
  glue-checkbox --> glue-checker
  glue-checker --> glue-icon
  glue-icon --> glue-badge
  glue-coupon-list --> glue-coupon
  style glue-coupon fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
