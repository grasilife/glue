# glue-contact-list

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description | Type     | Default     |
| ---------------- | ------------------ | ----------- | -------- | ----------- |
| `addText`        | `add-text`         |             | `string` | `undefined` |
| `defaultTagText` | `default-tag-text` |             | `string` | `undefined` |
| `list`           | `list`             |             | `any`    | `undefined` |
| `modelValue`     | `model-value`      |             | `any`    | `null`      |

## Dependencies

### Depends on

- [glue-radio](../glue-radio)
- [glue-icon](../glue-icon)
- [glue-tag](../glue-tag)
- [glue-cell](../glue-cell)
- [glue-radio-group](../glue-radio-group)
- [glue-button](../glue-button)

### Graph

```mermaid
graph TD;
  glue-contact-list --> glue-radio
  glue-contact-list --> glue-icon
  glue-contact-list --> glue-tag
  glue-contact-list --> glue-cell
  glue-contact-list --> glue-radio-group
  glue-contact-list --> glue-button
  glue-icon --> glue-badge
  glue-tag --> glue-icon
  glue-cell --> glue-icon
  glue-button --> glue-loading
  glue-button --> glue-icon
  style glue-contact-list fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
