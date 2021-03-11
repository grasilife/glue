# glue-contact-edit



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type                             | Default                  |
| ----------------- | ------------------- | ----------- | -------------------------------- | ------------------------ |
| `contactInfo`     | --                  |             | `{ tel: string; name: string; }` | `{ ...DEFAULT_CONTACT }` |
| `isDeleting`      | `is-deleting`       |             | `boolean`                        | `undefined`              |
| `isEdit`          | `is-edit`           |             | `boolean`                        | `undefined`              |
| `isSaving`        | `is-saving`         |             | `boolean`                        | `undefined`              |
| `setDefaultLabel` | `set-default-label` |             | `string`                         | `undefined`              |
| `showSetDefault`  | `show-set-default`  |             | `boolean`                        | `undefined`              |
| `telValidator`    | --                  |             | `(value: string) => boolean`     | `isMobile`               |


## Dependencies

### Depends on

- [glue-button](../glue-button)
- [glue-switch](../glue-switch)
- [glue-cell](../glue-cell)
- [glue-form](../glue-form)
- [glue-field](../glue-field)

### Graph
```mermaid
graph TD;
  glue-contact-edit --> glue-button
  glue-contact-edit --> glue-switch
  glue-contact-edit --> glue-cell
  glue-contact-edit --> glue-form
  glue-contact-edit --> glue-field
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-icon --> glue-badge
  glue-switch --> glue-loading
  glue-cell --> glue-icon
  glue-field --> glue-cell
  glue-field --> glue-icon
  style glue-contact-edit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
