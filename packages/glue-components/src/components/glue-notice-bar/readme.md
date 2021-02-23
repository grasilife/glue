# glue-notice-bar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type                    | Default     |
| ------------ | ------------ | ----------- | ----------------------- | ----------- |
| `background` | `background` |             | `string`                | `undefined` |
| `color`      | `color`      |             | `string`                | `undefined` |
| `delay`      | `delay`      |             | `number`                | `1`         |
| `leftIcon`   | `left-icon`  |             | `string`                | `undefined` |
| `mode`       | `mode`       |             | `"closeable" \| "link"` | `undefined` |
| `scrollable` | `scrollable` |             | `any`                   | `null`      |
| `speed`      | `speed`      |             | `number`                | `50`        |
| `text`       | `text`       |             | `string`                | `undefined` |
| `wrapable`   | `wrapable`   |             | `string`                | `undefined` |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `close`            |             | `CustomEvent<any>` |
| `onClickRightIcon` |             | `CustomEvent<any>` |
| `replay`           |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-icon](../glue-icon)

### Graph
```mermaid
graph TD;
  glue-notice-bar --> glue-icon
  glue-icon --> glue-badge
  style glue-notice-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
