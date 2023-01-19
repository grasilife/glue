# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<glue-divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容。

```html
<glue-divider>文字</glue-divider>
```

### 内容位置

通过 `content-position` 指定内容所在位置。

```html
<glue-divider content-position="left">文字</glue-divider>
<glue-divider content-position="right">文字</glue-divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<glue-divider dashed>文字</glue-divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```html
<glue-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  文字
</glue-divider>
```

## API

### Props

| 参数             | 说明                             | 类型      | 默认值   |
|------------------|--------------------------------|-----------|----------|
| dashed           | 是否使用虚线                     | _boolean_ | `false`  |
| hairline         | 是否使用 0.5px 线                | _boolean_ | `true`   |
| content-position | 内容位置，可选值为 `left` `right` | _string_  | `center` |

### Slots

| 名称    | 说明 |
|---------|----|
| default | 内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                         | 默认值          | 描述 |
|------------------------------|-----------------|------|
| @divider-margin              | `@padding-md 0` | -    |
| @divider-text-color          | `@gray-6`       | -    |
| @divider-font-size           | `@font-size-md` | -    |
| @divider-line-height         | `24px`          | -    |
| @divider-border-color        | `@border-color` | -    |
| @divider-content-padding     | `@padding-md`   | -    |
| @divider-content-left-width  | `10%`           | -    |
| @divider-content-right-width | `10%`           | -    |
