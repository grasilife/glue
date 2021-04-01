# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```html
<van-icon name="chat-o" size="32"/>
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="32"/>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<van-icon name="chat-o" dot size="32"/>
<van-icon name="chat-o" badge="9" size="32"/>
<van-icon name="chat-o" badge="99+" size="32"/>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<van-icon name="cart-o" color="#1989fa" size="32"/>
<van-icon name="fire-o" color="#ee0a24" size="32"/>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<van-icon name="chat-o" size="40" />
<van-icon name="chat-o" size="3rem" />
```

## API

### Props

| 参数         | 说明                                    | 类型               | 默认值     |
|--------------|---------------------------------------|--------------------|------------|
| name         | 图标名称或图片链接                      | _string_           | -          |
| dot          | 是否显示图标右上角小红点                | _boolean_          | `false`    |
| badge        | 图标右上角徽标的内容                    | _number \| string_ | -          |
| color        | 图标颜色                                | _string_           | `inherit`  |
| size         | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `16px`     |
| class-prefix | 类名前缀，用于使用自定义图标             | _string_           | `van-icon` |

### Events

| 事件名  | 说明           | 回调参数       |
|---------|--------------|----------------|
| default | 点击图标时触发 | _event: Event_ |
