# glue-demo



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [glue-uploader](../glue-uploader)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-uploader
  glue-uploader --> glue-uploader-preview-item
  glue-uploader --> glue-icon
  glue-uploader-preview-item --> glue-icon
  glue-uploader-preview-item --> glue-loading
  glue-uploader-preview-item --> glue-image
  glue-icon --> glue-badge
  glue-image --> glue-icon
  style glue-demo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
