# glue-tag



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `closeable` | `closeable`  |             | `boolean` | `undefined` |
| `color`     | `color`      |             | `string`  | `undefined` |
| `first`     | `first`      |             | `string`  | `undefined` |
| `mark`      | `mark`       |             | `boolean` | `undefined` |
| `plain`     | `plain`      |             | `boolean` | `undefined` |
| `round`     | `round`      |             | `boolean` | `undefined` |
| `show`      | `show`       |             | `boolean` | `true`      |
| `size`      | `size`       |             | `string`  | `undefined` |
| `textColor` | `text-color` |             | `string`  | `undefined` |
| `type`      | `type`       |             | `string`  | `'default'` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [glue-address-list-item](../glue-address-list-item)
 - [glue-card](../glue-card)
 - [glue-contact-list](../glue-contact-list)

### Depends on

- [glue-icon](../glue-icon)

### Graph
```mermaid
graph TD;
  glue-tag --> glue-icon
  glue-icon --> glue-badge
  glue-address-list-item --> glue-tag
  glue-card --> glue-tag
  glue-contact-list --> glue-tag
  style glue-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
