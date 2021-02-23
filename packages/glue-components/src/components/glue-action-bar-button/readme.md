# glue-action-bar-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `color`    | `color`    |             | `string`  | `undefined` |
| `disabled` | `disabled` |             | `boolean` | `undefined` |
| `icon`     | `icon`     |             | `string`  | `undefined` |
| `loading`  | `loading`  |             | `boolean` | `undefined` |
| `text`     | `text`     |             | `string`  | `undefined` |
| `type`     | `type`     |             | `string`  | `undefined` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `change` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-button](../glue-button)

### Graph
```mermaid
graph TD;
  glue-action-bar-button --> glue-button
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-icon --> glue-badge
  style glue-action-bar-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
