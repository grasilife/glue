# glue-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `block`        | `block`         |             | `boolean` | `undefined` |
| `color`        | `color`         |             | `string`  | `undefined` |
| `disabled`     | `disabled`      |             | `boolean` | `undefined` |
| `hairline`     | `hairline`      |             | `boolean` | `undefined` |
| `icon`         | `icon`          |             | `string`  | `undefined` |
| `iconPosition` | `icon-position` |             | `string`  | `'left'`    |
| `iconPrefix`   | `icon-prefix`   |             | `string`  | `undefined` |
| `loading`      | `loading`       |             | `boolean` | `undefined` |
| `loadingSize`  | `loading-size`  |             | `string`  | `'20px'`    |
| `loadingText`  | `loading-text`  |             | `string`  | `undefined` |
| `loadingType`  | `loading-type`  |             | `string`  | `undefined` |
| `nativeType`   | `native-type`   |             | `string`  | `'button'`  |
| `plain`        | `plain`         |             | `boolean` | `undefined` |
| `round`        | `round`         |             | `boolean` | `undefined` |
| `size`         | `size`          |             | `string`  | `'normal'`  |
| `square`       | `square`        |             | `boolean` | `undefined` |
| `tag`          | `tag`           |             | `string`  | `'button'`  |
| `text`         | `text`          |             | `string`  | `undefined` |
| `type`         | `type`          |             | `string`  | `'default'` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `checkboxchange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [glue-action-bar-button](../glue-action-bar-button)
 - [glue-demo](../glue-demo)

### Depends on

- [glue-loading](../glue-loading)
- [glue-icon](../glue-icon)

### Graph
```mermaid
graph TD;
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-icon --> glue-badge
  glue-action-bar-button --> glue-button
  glue-demo --> glue-button
  style glue-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
