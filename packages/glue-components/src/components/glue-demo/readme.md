# glue-demo



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `first`  | `first`   |             | `string` | `undefined` |
| `last`   | `last`    |             | `string` | `undefined` |
| `middle` | `middle`  |             | `string` | `undefined` |


## Dependencies

### Depends on

- [glue-notice-bar](../glue-notice-bar)
- [glue-progress](../glue-progress)
- [glue-skeleton](../glue-skeleton)
- [glue-steps](../glue-steps)
- [glue-step](../glue-step)
- [glue-sticky](../glue-sticky)
- [glue-button](../glue-button)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-notice-bar
  glue-demo --> glue-progress
  glue-demo --> glue-skeleton
  glue-demo --> glue-steps
  glue-demo --> glue-step
  glue-demo --> glue-sticky
  glue-demo --> glue-button
  glue-notice-bar --> glue-icon
  glue-icon --> glue-badge
  glue-button --> glue-loading
  glue-button --> glue-icon
  style glue-demo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
