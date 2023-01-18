# Layout 布局

### 介绍

Layout 提供了 `glue-row` 和 `glue-col` 两个组件来进行行列布局。

## 代码演示

### 基础用法

Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```html
<glue-row>
  <glue-col span="8">span: 8</glue-col>
  <glue-col span="8">span: 8</glue-col>
  <glue-col span="8">span: 8</glue-col>
</glue-row>

<glue-row>
  <glue-col span="4">span: 4</glue-col>
  <glue-col span="10" offset="4">offset: 4, span: 10</glue-col>
</glue-row>

<glue-row>
  <glue-col offset="12" span="12">offset: 12, span: 12</glue-col>
</glue-row>
```

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```html
<glue-row gutter="20">
  <glue-col span="8">span: 8</glue-col>
  <glue-col span="8">span: 8</glue-col>
  <glue-col span="8">span: 8</glue-col>
</glue-row>
```

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

```html
<!-- 左对齐 -->
<glue-row>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
</glue-row>

<!-- 居中 -->
<glue-row justify="center">
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
</glue-row>

<!-- 右对齐 -->
<glue-row justify="end">
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
</glue-row>

<!-- 两端对齐 -->
<glue-row justify="space-between">
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
</glue-row>

<!-- 每个元素的两侧间隔相等 -->
<glue-row justify="space-around">
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
  <glue-col span="6">span: 6</glue-col>
</glue-row>
```

## API

### Row Props

| 参数    | 说明                                                                             | 类型               | 默认值  |
|---------|--------------------------------------------------------------------------------|--------------------|---------|
| gutter  | 列元素之间的间距（单位为 px）                                                      | _number \| string_ | `0`     |
| tag     | 自定义元素标签                                                                   | _string_           | `div`   |
| justify | 主轴对齐方式，可选值为 `start` `end` `center` <br> `space-around` `space-between` | _string_           | `start` |
| align   | 交叉轴对齐方式，可选值为 `center` `bottom`                                        | _string_           | `top`   |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
|--------|--------------|--------------------|--------|
| span   | 列元素宽度     | _number \| string_ | `0`    |
| offset | 列元素偏移距离 | _number \| string_ | -      |

### Row Events

| 事件名  | 说明     | 回调参数       |
|---------|--------|----------------|
| default | 默认事件 | _event: Event_ |

### Col Events

| 事件名  | 说明     | 回调参数       |
|---------|--------|----------------|
| default | 默认事件 | _event: Event_ |
