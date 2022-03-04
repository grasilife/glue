# glue-address-list-item

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type      | Default     |
| ---------------- | ------------------ | ----------- | --------- | ----------- |
| `data`           | `data`             |             | `any`     | `undefined` |
| `defaultTagText` | `default-tag-text` |             | `string`  | `undefined` |
| `disabled`       | `disabled`         |             | `boolean` | `undefined` |
| `switchable`     | `switchable`       |             | `boolean` | `undefined` |


## Dependencies

### Depends on

- [glue-icon](../glue-icon)
- [glue-tag](../glue-tag)
- [glue-cell](../glue-cell)

### Graph
```mermaid
graph TD;
  glue-address-list-item --> glue-icon
  glue-address-list-item --> glue-tag
  glue-address-list-item --> glue-cell
  glue-icon --> glue-badge
  glue-tag --> glue-icon
  glue-cell --> glue-icon
  style glue-address-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
