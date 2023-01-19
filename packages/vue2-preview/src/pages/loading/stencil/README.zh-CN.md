# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner`。

```html
<glue-loading />

<glue-loading type="spinner" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<glue-loading color="#1989fa" />

<glue-loading type="spinner" color="#1989fa" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```html
<glue-loading size="24" />

<glue-loading type="spinner" size="24px" />
```

### 加载文案

可以使用默认插槽在图标的右侧插入加载文案。

```html
<glue-loading size="24px" text="加载中..."></glue-loading>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```html
<glue-loading size="24px" vertical text="加载中..."></glue-loading>
```

### 自定义文案颜色

通过 `color` 或者 `text-color` 属性设置加载文案的颜色。

```html
<!-- 可修改文案和加载图标的颜色 -->
<glue-loading color="#0094ff" text="加载中..."/>

<!-- 只修改文案颜色 -->
<glue-loading text-color="#0094ff" text="加载中..."/>
```

## API

### Props

| 参数       | 说明                         | 类型               | 默认值     |
|------------|----------------------------|--------------------|------------|
| color      | 颜色                         | _string_           | `#c9c9c9`  |
| text       | 文字,使用#slot开启插槽       | _string_           | ``         |
| type       | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size       | 加载图标大小，默认单位为 `px` | _number \| string_ | `30px`     |
| text-size  | 文字大小，默认单位为 `px`     | _number \| string_ | `14px`     |
| text-color | 文字颜色                     | _string_           | `#c9c9c9`  |
| vertical   | 是否垂直排列图标和文字内容   | _boolean_          | `false`    |

### Slots

| 名称 | 说明     |
|------|--------|
| text | 加载文案 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值          | 描述 |
|-------------------------------------|-----------------|------|
| @loading-text-color                 | `@gray-6`       | -    |
| @loading-text-font-size             | `@font-size-md` | -    |
| @loading-spinner-color              | `@gray-5`       | -    |
| @loading-spinner-size               | `30px`          | -    |
| @loading-spinner-animation-duration | `0.8s`          | -    |
