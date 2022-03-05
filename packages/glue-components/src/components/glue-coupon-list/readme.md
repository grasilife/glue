# glue-coupon-list

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description | Type      | Default       |
| ------------------------ | -------------------------- | ----------- | --------- | ------------- |
| `chosenCoupon`           | `chosen-coupon`            |             | `number`  | `-1`          |
| `closeButtonText`        | `close-button-text`        |             | `string`  | `undefined`   |
| `code`                   | `code`                     |             | `string`  | `undefined`   |
| `coupons`                | --                         |             | `any[]`   | `[]`          |
| `currency`               | `currency`                 |             | `string`  | `'¥'`         |
| `disabledCoupons`        | --                         |             | `any[]`   | `[]`          |
| `disabledTitle`          | `disabled-title`           |             | `string`  | `undefined`   |
| `displayedCouponIndex`   | `displayed-coupon-index`   |             | `number`  | `-1`          |
| `emptyImage`             | `empty-image`              |             | `string`  | `EMPTY_IMAGE` |
| `enabledTitle`           | `enabled-title`            |             | `string`  | `undefined`   |
| `exchangeButtonDisabled` | `exchange-button-disabled` |             | `boolean` | `undefined`   |
| `exchangeButtonLoading`  | `exchange-button-loading`  |             | `boolean` | `undefined`   |
| `exchangeButtonText`     | `exchange-button-text`     |             | `string`  | `undefined`   |
| `exchangeMinLength`      | `exchange-min-length`      |             | `number`  | `1`           |
| `first`                  | `first`                    |             | `string`  | `undefined`   |
| `inputPlaceholder`       | `input-placeholder`        |             | `string`  | `undefined`   |
| `showCloseButton`        | `show-close-button`        |             | `boolean` | `true`        |
| `showCount`              | `show-count`               |             | `boolean` | `true`        |
| `showExchangeBar`        | `show-exchange-bar`        |             | `boolean` | `true`        |


## Dependencies

### Depends on

- [glue-field](../glue-field)
- [glue-button](../glue-button)
- [glue-tab](../glue-tab)
- [glue-coupon](../glue-coupon)
- [glue-tabs](../glue-tabs)

### Graph
```mermaid
graph TD;
  glue-coupon-list --> glue-field
  glue-coupon-list --> glue-button
  glue-coupon-list --> glue-tab
  glue-coupon-list --> glue-coupon
  glue-coupon-list --> glue-tabs
  glue-field --> glue-icon
  glue-field --> glue-cell
  glue-icon --> glue-badge
  glue-cell --> glue-icon
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-tab --> glue-swipe-item
  glue-coupon --> glue-checkbox
  glue-checkbox --> glue-checker
  glue-checker --> glue-icon
  glue-tabs --> glue-tabs-title
  glue-tabs --> glue-sticky
  glue-tabs --> glue-tabs-content
  glue-tabs-title --> glue-badge
  glue-tabs-content --> glue-swipe
  style glue-coupon-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
