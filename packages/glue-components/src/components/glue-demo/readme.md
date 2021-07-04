# glue-demo



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [glue-calendar](../glue-calendar)
- [glue-cell](../glue-cell)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-calendar
  glue-demo --> glue-cell
  glue-calendar --> glue-calendar-month
  glue-calendar --> glue-button
  glue-calendar --> glue-calendar-header
  glue-calendar --> glue-popup
  glue-calendar-month --> glue-calendar-day
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-icon --> glue-badge
  glue-popup --> glue-icon
  glue-popup --> glue-overlay
  glue-cell --> glue-icon
  style glue-demo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
