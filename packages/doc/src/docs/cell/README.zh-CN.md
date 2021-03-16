# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<glue-cell-group>
  <glue-cell title="单元格" value="内容" />
  <glue-cell title="单元格" value="内容" label="描述信息" />
</glue-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<glue-cell title="单元格" value="内容" size="large" />
<glue-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<glue-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<glue-cell value="内容" />
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<glue-cell title="单元格" is-link />
<glue-cell title="单元格" is-link value="内容" />
<glue-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<glue-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<glue-cell title="路由跳转" is-link to="index" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<glue-cell-group title="分组1">
  <glue-cell title="单元格" value="内容" />
</glue-cell-group>
<glue-cell-group title="分组2">
  <glue-cell title="单元格" value="内容" />
</glue-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<glue-cell :value="content" is-link title="#slot">
  <!-- 使用 title 插槽来自定义标题 -->
  <div slot="title">
    <span class="custom-title">{{ cell }}</span>
    <glue-tag type="danger">{{ tag }}</glue-tag>
  </div>
</glue-cell>

<glue-cell value="#slot" is-link :title="cell">
  <!-- 使用 value 插槽来自定义标题 -->
  <div slot="value">
    <span class="custom-title">{{ value }}</span>
    <glue-tag type="danger">{{ tag }}</glue-tag>
  </div>
</glue-cell>

<glue-cell :title="cell" icon="#slot" right-icon="#slot">
  <!-- 使用icon插槽和right-icon插槽来自定义标题 -->
  <div slot="icon">
    <glue-icon name="shop-o" class="search-icon" />
  </div>
  <div slot="rightIcon">
    <glue-icon name="search" class="search-icon" />
  </div>
</glue-cell>

 <glue-cell :title="cell" right-icon="#slot">
   <!-- 使用right-icon插槽来自定义标题 -->
  <div slot="rightIcon">
    <glue-icon name="search" class="search-icon" />
  </div>
</glue-cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<glue-cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 |
|--------|--------------|-----------|--------|
| title  | 分组标题       | _string_  | `-`    |
| border | 是否显示外边框 | _boolean_ | `true` |

### Cell Props

| 参数            | 说明                                                                | 类型                        | 默认值     |
|-----------------|-------------------------------------------------------------------|-----------------------------|------------|
| title           | 左侧标题,使用#slot开启插槽                                                           | _number \| string_ |        | -          |
| value           | 右侧内容,使用#slot开启插槽                                                            | _number \| string_          | -          |
| label           | 标题下方的描述信息,使用#slot开启插槽                                                  | _string_                    | -          |
| size            | 单元格大小，可选值为 `large`                                         | _string_                    | -          |
| icon            | 左侧[图标名称](#/zh-CN/icon)或图片链接,使用#slot开启插槽                               | _string_                    | -          |
| right-icon      | 左侧[图标名称](#/zh-CN/icon),使用#slot开启插槽                                         | _string_                    | -          |
| icon-prefix     | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_                    | `van-icon` |
| border          | 是否显示内边框                                                      | _boolean_                   | `true`     |
| replace         | 是否在跳转时替换当前页面历史                                        | _boolean_                   | `false`    |
| clickable       | 是否开启点击反馈                                                    | _boolean_                   | `null`     |
| is-link         | 是否展示右侧箭头并开启点击反馈                                      | _boolean_                   | `false`    |
| required        | 是否显示表单必填星号                                                | _boolean_                   | `false`    |
| center          | 是否使内容垂直居中                                                  | _boolean_                   | `false`    |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down`                                | _string_                    | `right`    |
| title-style     | 左侧标题额外样式                                                    | _string \| Array \| object_ | -          |
| title-class     | 左侧标题额外类名                                                    | _string \| Array \| object_ | -          |
| value-class     | 右侧内容额外类名                                                    | _string \| Array \| object_ | -          |
| label-class     | 描述信息额外类名                                                    | _string \| Array \| object_ | -          |

### Cell Events

| 事件名  | 说明     | 回调参数       |
|---------|--------|----------------|
| default | 默认事件 | _event: Event_ |

### CellGroup Slots

| 名称          | 说明           |
|---------------|--------------|

### Cell Slots

| 名称       | 说明                         |
|------------|----------------------------|
| default    | 自定义右侧 value 的内容      |
| title      | 自定义左侧 title 的内容      |
| label      | 自定义标题下方 label 的内容  |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧按钮，默认为`arrow` |
| extra      | 自定义单元格最右侧的额外内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                          | 默认值                                | 描述 |
|-------------------------------|---------------------------------------|------|
| @cell-font-size               | `@font-size-md`                       | -    |
| @cell-line-height             | `24px`                                | -    |
| @cell-vertical-padding        | `10px`                                | -    |
| @cell-horizontal-padding      | `@padding-md`                         | -    |
| @cell-text-color              | `@text-color`                         | -    |
| @cell-background-color        | `@white`                              | -    |
| @cell-border-color            | `@border-color`                       | -    |
| @cell-active-color            | `@active-color`                       | -    |
| @cell-required-color          | `@red`                                | -    |
| @cell-label-color             | `@gray-6`                             | -    |
| @cell-label-font-size         | `@font-size-sm`                       | -    |
| @cell-label-line-height       | `@line-height-sm`                     | -    |
| @cell-label-margin-top        | `@padding-base`                       | -    |
| @cell-value-color             | `@gray-6`                             | -    |
| @cell-icon-size               | `16px`                                | -    |
| @cell-right-icon-color        | `@gray-6`                             | -    |
| @cell-large-vertical-padding  | `@padding-sm`                         | -    |
| @cell-large-title-font-size   | `@font-size-lg`                       | -    |
| @cell-large-label-font-size   | `@font-size-md`                       | -    |
| @cell-group-background-color  | `@white`                              | -    |
| @cell-group-title-color       | `@gray-6`                             | -    |
| @cell-group-title-padding     | `@padding-md @padding-md @padding-xs` | -    |
| @cell-group-title-font-size   | `@font-size-md`                       | -    |
| @cell-group-title-line-height | `16px`                                | -    |
