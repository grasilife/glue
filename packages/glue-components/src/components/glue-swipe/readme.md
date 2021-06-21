# glue-swipe



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type               | Default     |
| ----------------- | ------------------ | ----------- | ------------------ | ----------- |
| `autoplay`        | `autoplay`         |             | `number`           | `undefined` |
| `duration`        | `duration`         |             | `number \| string` | `500`       |
| `height`          | `height`           |             | `number`           | `undefined` |
| `indicatorColor`  | `indicator-color`  |             | `string`           | `'#1989fa'` |
| `initialSwipe`    | `initial-swipe`    |             | `number`           | `0`         |
| `lazyRender`      | `lazy-render`      |             | `boolean`          | `undefined` |
| `loop`            | `loop`             |             | `boolean`          | `false`     |
| `showIndicators`  | `show-indicators`  |             | `any`              | `false`     |
| `stopPropagation` | `stop-propagation` |             | `boolean`          | `false`     |
| `touchable`       | `touchable`        |             | `boolean`          | `false`     |
| `vertical`        | `vertical`         |             | `boolean`          | `false`     |
| `width`           | `width`            |             | `number`           | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `glueChange` |             | `CustomEvent<any>` |


## Methods

### `getActiveIndicator() => Promise<number>`



#### Returns

Type: `Promise<number>`



### `getCount() => Promise<number>`



#### Returns

Type: `Promise<number>`



### `getSize() => Promise<number>`



#### Returns

Type: `Promise<number>`




## Dependencies

### Used by

 - [glue-demo](../glue-demo)
 - [glue-tabs-content](../glue-tabs-content)

### Graph
```mermaid
graph TD;
  glue-demo --> glue-swipe
  glue-tabs-content --> glue-swipe
  style glue-swipe fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
