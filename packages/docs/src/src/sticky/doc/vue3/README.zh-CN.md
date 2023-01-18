# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```html
<glue-sticky>
  <glue-button type="primary">基础用法</glue-button>
</glue-sticky>
```

### 吸顶距离

通过 `offset-top` 属性可以设置组件在吸顶时与顶部的距离。

```html
<glue-sticky :offset-top-value="50">
  <glue-button type="primary">吸顶距离</glue-button>
</glue-sticky>
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```html
<div ref="container" style="height: 150px;">
  <glue-sticky :container="this.$ref.container">
    <glue-button type="warning">指定容器</glue-button>
  </glue-sticky>
</div>
```

### 吸底距离

将 position 设置为 bottom 可以让组件吸附在底部。通过 offset-bottom 属性可以设置组件在吸底时与底部的距离。

```html
<van-sticky :offset-bottom-value="50" position="bottom">
  <van-button type="primary">吸底距离</van-button>
</van-sticky>
```

## API

### Props

| 参数                | 说明                                                        | 类型               | 默认值 |
|---------------------|-----------------------------------------------------------|--------------------|--------|
| offset-top-value    | 吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0`    |
| offset-bottom-value | 吸底时与底部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0`    |
| z-index             | 吸顶时的 z-index                                            | _number \| string_ | `99`   |
| container           | 容器对应的 HTML 节点                                        | _Element_          | -      |

### Events

| 事件名     | 说明       | 回调参数                                       |
|------------|----------|--------------------------------------------|
| glueScroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称            | 默认值 | 描述 |
|-----------------|--------|------|
| @sticky-z-index | `99`   | -    |
