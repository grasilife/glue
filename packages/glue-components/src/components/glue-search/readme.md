# glue-search

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type       | Default     |
| -------------- | --------------- | ----------- | ---------- | ----------- |
| `actionText`   | `action-text`   |             | `string`   | `undefined` |
| `background`   | `background`    |             | `string`   | `undefined` |
| `clearTrigger` | `clear-trigger` |             | `string`   | `undefined` |
| `clearable`    | `clearable`     |             | `boolean`  | `true`      |
| `label`        | `label`         |             | `string`   | `undefined` |
| `leftIcon`     | `left-icon`     |             | `string`   | `'search'`  |
| `modelValue`   | `model-value`   |             | `string`   | `undefined` |
| `rightIcon`    | `right-icon`    |             | `string`   | `undefined` |
| `shape`        | `shape`         |             | `"square"` | `undefined` |
| `showAction`   | `show-action`   |             | `boolean`  | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `cancel`      |             | `CustomEvent<any>` |
| `changeValue` |             | `CustomEvent<any>` |
| `search`      |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-field](../glue-field)

### Graph
```mermaid
graph TD;
  glue-search --> glue-field
  glue-field --> glue-icon
  glue-field --> glue-cell
  glue-icon --> glue-badge
  glue-cell --> glue-icon
  style glue-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
