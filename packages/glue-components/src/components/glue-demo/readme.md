# glue-demo



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [glue-tabs](../glue-tabs)
- [glue-tab](../glue-tab)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-tabs
  glue-demo --> glue-tab
  glue-tabs --> glue-tabs-title
  glue-tabs --> glue-sticky
  glue-tabs --> glue-tabs-content
  glue-tabs-title --> glue-badge
  glue-tabs-content --> glue-swipe
  glue-tab --> glue-swipe-item
  style glue-demo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
