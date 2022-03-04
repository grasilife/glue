# glue-coupon-cell

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `border`       | `border`        |             | `boolean` | `true`      |
| `chosenCoupon` | `chosen-coupon` |             | `number`  | `-1`        |
| `coupons`      | --              |             | `[]`      | `undefined` |
| `currency`     | `currency`      |             | `string`  | `'¥'`       |
| `editable`     | `editable`      |             | `boolean` | `true`      |
| `g_title`      | `g_title`       |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [glue-cell](../glue-cell)

### Graph
```mermaid
graph TD;
  glue-coupon-cell --> glue-cell
  glue-cell --> glue-icon
  glue-icon --> glue-badge
  style glue-coupon-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
