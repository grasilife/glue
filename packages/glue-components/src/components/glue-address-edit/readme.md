# glue-address-edit

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute            | Description | Type                                                                                                                                                                               | Default              |
| ------------------------ | -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `addressInfo`            | --                   |             | `{ name: string; tel: string; country: string; province: string; city: string; county: string; areaCode: string; postalCode: string; addressDetail: string; isDefault: boolean; }` | `{ ...defaultData }` |
| `areaColumnsPlaceholder` | --                   |             | `any[]`                                                                                                                                                                            | `[]`                 |
| `areaList`               | `area-list`          |             | `any`                                                                                                                                                                              | `undefined`          |
| `areaPlaceholder`        | `area-placeholder`   |             | `string`                                                                                                                                                                           | `undefined`          |
| `deleteButtonText`       | `delete-button-text` |             | `string`                                                                                                                                                                           | `undefined`          |
| `detailMaxlength`        | `detail-maxlength`   |             | `number`                                                                                                                                                                           | `200`                |
| `detailRows`             | `detail-rows`        |             | `number`                                                                                                                                                                           | `1`                  |
| `disableArea`            | `disable-area`       |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `isDeleting`             | `is-deleting`        |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `isSaving`               | `is-saving`          |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `postalValidator`        | --                   |             | `(value: any) => boolean`                                                                                                                                                          | `isPostal`           |
| `saveButtonText`         | `save-button-text`   |             | `string`                                                                                                                                                                           | `undefined`          |
| `searchResult`           | --                   |             | `[]`                                                                                                                                                                               | `undefined`          |
| `showArea`               | `show-area`          |             | `boolean`                                                                                                                                                                          | `true`               |
| `showDelete`             | `show-delete`        |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `showDetail`             | `show-detail`        |             | `boolean`                                                                                                                                                                          | `true`               |
| `showPostal`             | `show-postal`        |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `showSearchResult`       | `show-search-result` |             | `string`                                                                                                                                                                           | `undefined`          |
| `showSetDefault`         | `show-set-default`   |             | `boolean`                                                                                                                                                                          | `undefined`          |
| `telMaxlength`           | `tel-maxlength`      |             | `number \| string`                                                                                                                                                                 | `undefined`          |
| `telValidator`           | --                   |             | `(value: string) => boolean`                                                                                                                                                       | `isMobile`           |
| `validator`              | `validator`          |             | `any`                                                                                                                                                                              | `undefined`          |


## Dependencies

### Depends on

- [glue-switch](../glue-switch)
- [glue-cell](../glue-cell)
- [glue-field](../glue-field)
- [glue-button](../glue-button)
- [glue-popup](../glue-popup)

### Graph
```mermaid
graph TD;
  glue-address-edit --> glue-switch
  glue-address-edit --> glue-cell
  glue-address-edit --> glue-field
  glue-address-edit --> glue-button
  glue-address-edit --> glue-popup
  glue-switch --> glue-loading
  glue-cell --> glue-icon
  glue-icon --> glue-badge
  glue-field --> glue-icon
  glue-field --> glue-cell
  glue-button --> glue-loading
  glue-button --> glue-icon
  glue-popup --> glue-icon
  glue-popup --> glue-overlay
  style glue-address-edit fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
