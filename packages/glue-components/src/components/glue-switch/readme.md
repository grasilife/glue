# glue-switch

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type               | Default     |
| --------------- | ---------------- | ----------- | ------------------ | ----------- |
| `activeColor`   | `active-color`   |             | `string`           | `undefined` |
| `activeValue`   | `active-value`   |             | `boolean`          | `true`      |
| `disabled`      | `disabled`       |             | `boolean`          | `undefined` |
| `inactiveColor` | `inactive-color` |             | `string`           | `undefined` |
| `inactiveValue` | `inactive-value` |             | `boolean`          | `false`     |
| `loading`       | `loading`        |             | `boolean`          | `undefined` |
| `size`          | `size`           |             | `number \| string` | `undefined` |
| `value`         | `value`          |             | `boolean`          | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `glueChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [glue-address-edit](../glue-address-edit)
 - [glue-contact-edit](../glue-contact-edit)

### Depends on

- [glue-loading](../glue-loading)

### Graph
```mermaid
graph TD;
  glue-switch --> glue-loading
  glue-address-edit --> glue-switch
  glue-contact-edit --> glue-switch
  style glue-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
