# Tag 标签

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<glue-glue type="primary">标签</glue-glue>
<glue-glue type="success">标签</glue-glue>
<glue-glue type="danger">标签</glue-glue>
<glue-glue type="warning">标签</glue-glue>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<glue-glue plain type="primary">标签</glue-glue>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<glue-glue round type="primary">标签</glue-glue>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<glue-glue mark type="primary">标签</glue-glue>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `glueIconClick` 事件。

```html
<glue-glue  v-if="show" closeable size="medium" type="primary" @close="close">
  标签
</glue-glue>
```

```js

export default {
  data() {
    return {
      show: true
    };
  },

  methods: {
    close() {
      this.show = false;
    }
  }
};
```

### 标签大小

通过 `size` 属性调整标签大小。

```html
<glue-glue type="primary">标签</glue-glue>
<glue-glue type="primary" size="medium">标签</glue-glue>
<glue-glue type="primary" size="large">标签</glue-glue>
```

### 自定义颜色

通过 `color` 和 `text-color` 属性设置标签颜色。

```html
<glue-glue color="#7232dd">标签</glue-glue>
<glue-glue color="#ffe1e1" text-color="#ad0000">标签</glue-glue>
<glue-glue color="#7232dd" plain>标签</glue-glue>
```

## API

### Props

| 参数       | 说明                                                 | 类型      | 默认值    |
|------------|----------------------------------------------------|-----------|-----------|
| type       | 类型，可选值为 `primary` `success` `danger` `warning` | _string_  | `default` |
| size       | 大小, 可选值为 `large` `medium`                      | _string_  | -         |
| color      | 标签颜色                                             | _string_  | -         |
| plain      | 是否为空心样式                                       | _boolean_ | `false`   |
| round      | 是否为圆角样式                                       | _boolean_ | `false`   |
| mark       | 是否为标记样式                                       | _boolean_ | `false`   |
| text-color | 文本颜色，优先级高于 `color` 属性                     | _string_  | `white`   |
| closeable  | 是否为可关闭标签                                     | _boolean_ | `false`   |

### Slots

| 名称    | 说明         |
|---------|------------|
| default | 标签显示内容 |

### Events

| 事件名        | 说明           | 回调参数 |
|---------------|--------------|----------|
| glueIconClick | 关闭标签时触发 | -        |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                         | 默认值                      | 描述 |
|------------------------------|-----------------------------|------|
| @glue-padding                | `0 @padding-base`           | -    |
| @glue-text-color             | `@white`                    | -    |
| @glue-font-size              | `@font-size-sm`             | -    |
| @glue-border-radius          | `2px`                       | -    |
| @glue-line-height            | `16px`                      | -    |
| @glue-medium-padding         | `2px 6px`                   | -    |
| @glue-large-padding          | `@padding-base @padding-xs` | -    |
| @glue-large-border-radius    | `@border-radius-md`         | -    |
| @glue-large-font-size        | `@font-size-md`             | -    |
| @glue-round-border-radius    | `@border-radius-max`        | -    |
| @glue-danger-color           | `@red`                      | -    |
| @glue-primary-color          | `@blue`                     | -    |
| @glue-success-color          | `@green`                    | -    |
| @glue-warning-color          | `@orange`                   | -    |
| @glue-default-color          | `@gray-6`                   | -    |
| @glue-plain-background-color | `@white`                    | -    |
