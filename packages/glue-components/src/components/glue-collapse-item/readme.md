# glue-collapse-item

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                  | Default     |
| ----------------- | ------------------ | ----------- | ------------------------------------- | ----------- |
| `arrowDirection`  | `arrow-direction`  |             | `"down" \| "left" \| "right" \| "up"` | `'down'`    |
| `border`          | `border`           |             | `boolean`                             | `true`      |
| `center`          | `center`           |             | `boolean`                             | `undefined` |
| `clickable`       | `clickable`        |             | `boolean`                             | `undefined` |
| `disabled`        | `disabled`         |             | `boolean`                             | `undefined` |
| `g_title`         | `g_title`          |             | `string`                              | `undefined` |
| `icon`            | `icon`             |             | `string`                              | `undefined` |
| `iconPrefix`      | `icon-prefix`      |             | `string`                              | `undefined` |
| `isLink`          | `is-link`          |             | `boolean`                             | `undefined` |
| `label`           | `label`            |             | `number \| string`                    | `undefined` |
| `name`            | `name`             |             | `string`                              | `undefined` |
| `required`        | `required`         |             | `boolean`                             | `undefined` |
| `size`            | `size`             |             | `string`                              | `undefined` |
| `tilabelClasstle` | `tilabel-classtle` |             | `any`                                 | `null`      |
| `titleClass`      | `title-class`      |             | `any`                                 | `null`      |
| `titleStyle`      | `title-style`      |             | `any`                                 | `null`      |
| `value`           | `value`            |             | `number \| string`                    | `undefined` |
| `valueClass`      | `value-class`      |             | `any`                                 | `null`      |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `clickTitle` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [glue-cell](../glue-cell)

### Graph
```mermaid
graph TD;
  glue-collapse-item --> glue-cell
  glue-cell --> glue-icon
  glue-icon --> glue-badge
  style glue-collapse-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
