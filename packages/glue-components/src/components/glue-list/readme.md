# glue-list

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `direction`      | `direction`       |             | `string`  | `'down'`    |
| `error`          | `error`           |             | `boolean` | `undefined` |
| `errorText`      | `error-text`      |             | `string`  | `undefined` |
| `finished`       | `finished`        |             | `boolean` | `undefined` |
| `finishedText`   | `finished-text`   |             | `string`  | `undefined` |
| `immediateCheck` | `immediate-check` |             | `boolean` | `true`      |
| `loading`        | `loading`         |             | `any`     | `undefined` |
| `loadingText`    | `loading-text`    |             | `string`  | `'加载中...'`  |
| `offset`         | `offset`          |             | `number`  | `300`       |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `glueClickErrorText` |             | `CustomEvent<any>` |
| `glueLoad`           |             | `CustomEvent<any>` |


## Methods

### `check() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [glue-loading](../glue-loading)

### Graph
```mermaid
graph TD;
  glue-list --> glue-loading
  style glue-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
