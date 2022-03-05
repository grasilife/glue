# glue-checkbox

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type               | Default     |
| --------------- | ---------------- | ----------- | ------------------ | ----------- |
| `bindGroup`     | `bind-group`     |             | `string`           | `'false'`   |
| `checkedColor`  | `checked-color`  |             | `string`           | `undefined` |
| `disabled`      | `disabled`       |             | `string`           | `undefined` |
| `iconSize`      | `icon-size`      |             | `number \| string` | `16`        |
| `label`         | `label`          |             | `string`           | `undefined` |
| `labelDisabled` | `label-disabled` |             | `string`           | `undefined` |
| `labelPosition` | `label-position` |             | `string`           | `undefined` |
| `modelValue`    | `model-value`    |             | `any`              | `undefined` |
| `name`          | `name`           |             | `number \| string` | `undefined` |
| `shape`         | `shape`          |             | `string`           | `'round'`   |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `glueChange` |             | `CustomEvent<any>` |
| `glueCilck`  |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [glue-coupon](../glue-coupon)

### Depends on

- [glue-checker](../glue-checker)

### Graph
```mermaid
graph TD;
  glue-checkbox --> glue-checker
  glue-checker --> glue-icon
  glue-icon --> glue-badge
  glue-coupon --> glue-checkbox
  style glue-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
