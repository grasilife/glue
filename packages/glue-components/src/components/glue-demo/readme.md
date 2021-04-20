# glue-demo



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [glue-list](../glue-list)
- [glue-cell](../glue-cell)
- [glue-toast](../glue-toast)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-list
  glue-demo --> glue-cell
  glue-demo --> glue-toast
  glue-list --> glue-loading
  glue-cell --> glue-icon
  glue-icon --> glue-badge
  glue-toast --> glue-icon
  glue-toast --> glue-loading
  style glue-demo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
