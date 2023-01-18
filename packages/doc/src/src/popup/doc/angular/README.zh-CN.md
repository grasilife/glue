# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 代码演示

### 基础用法

通过 `show` 控制弹出层

```html
<glue-cell is-link @click="showPopup">展示弹出层</glue-cell>
<glue-popup :show="showBasic" @glueClose="showBasic = false">
    <div :style="{ padding: '30px 50px' }">内容</div>
</glue-popup>
```

```js
<script>
export default {
  data() {
    return {
      showBasic: false,
    };
  },
};
</script>
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```html
<glue-popup :show="showBasic" position="top" width="100%" height="30%" />
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `close-icon-position` 属性可以自定义图标位置。

```html
<glue-popup
  :show="showBasic"
  closeable
  position="bottom"
  width="100%" height="30%"
  @glueClose="showTop = false"
/>
<!-- 自定义图标 -->
<glue-popup
  :show="showBasic"
  closeable
  close-icon="close"
  position="bottom"
  width="100%" height="30%"
  @glueClose="showTop = false"
/>
<!-- 图标位置 -->
<glue-popup
  :show="showBasic"
  closeable
  close-icon-position="top-left"
  position="bottom"
  width="100%" height="30%"
  @glueClose="showTop = false"
/>
```

```js
<script>
export default {
  data() {
    return {
      showBasic: false,
    };
  },
};
</script>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<glue-popup
  :show="showBasic"
  round
  position="bottom"
  width="100%" height="30%"
  @glueClose="showTop = false"
/>
```

```js
<script>
export default {
  data() {
    return {
      showBasic: false,
    };
  },
};
</script>
```

### 指定挂载位置

弹出层默认挂载到组件标签所在位置，可以通过 `teleport` 属性指定挂载位置。

```html
<!-- 挂载到 body 节点下 -->

<glue-popup :show="showGetContainer" teleport="body" @glueClose="showGetContainer = false">
    <div :style="{ padding: '30px 50px' }">内容</div>
</glue-popup>

<!-- 挂载到 #app 节点下 -->

<glue-popup :show="showGetContainer" teleport="#app" @glueClose="showGetContainer = false">
    <div :style="{ padding: '30px 50px' }">内容</div>
</glue-popup>

<!-- 挂载到指定的元素下 -->

<glue-popup :show="showGetContainer" :teleport="myContainer" @glueClose="showGetContainer = false">
    <div :style="{ padding: '30px 50px' }">内容</div>
</glue-popup>
```

```js
<script>
const myContainer = document.querySelector('.my-container');
export default {
  data() {
    return {
      showBasic: false,
      myContainer,
    };
  },
};
</script>
```

> 注意：使用 teleport 属性的组件不能为根节点

## API

### Props

| 参数                   | 说明                                                                                   | 类型                        | 默认值      |
|------------------------|--------------------------------------------------------------------------------------|-----------------------------|-------------|
| show                   | 是否显示弹出层                                                                         | _boolean_                   | `false`     |
| overlay                | 是否显示遮罩层                                                                         | _boolean_                   | `true`      |
| position               | 弹出位置，可选值为`center`  `top` `bottom` `right` `left`                               | _string_                    | `center`    |
| overlay-class          | 自定义遮罩层类名                                                                       | _string \| Array \| object_ | -           |
| overlay-style          | 自定义遮罩层样式                                                                       | _object_                    | -           |
| duration               | 动画时长，单位毫秒                                                                      | _number \| string_          | `300`       |
| round                  | 是否显示圆角                                                                           | _boolean_                   | `false`     |
| lock-scroll            | 是否锁定背景滚动                                                                       | _boolean_                   | `true`      |
| lazy-render            | 是否在显示弹层时才渲染节点                                                             | _boolean_                   | `true`      |
| close-on-popstate      | 是否在页面回退时自动关闭                                                               | _boolean_                   | `false`     |
| close-on-click-overlay | 是否在点击遮罩层后关闭                                                                 | _boolean_                   | `true`      |
| closeable              | 是否显示关闭图标                                                                       | _boolean_                   | `false`     |
| close-icon             | 关闭图标名称或图片链接                                                                 | _string_                    | `cross`     |
| close-icon-position    | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right`                        | _string_                    | `top-right` |
| easing                 | 动画类名，等价于 [easing](https://animejs.com/documentation/#linearEasing) 的`name`属性 | _string_                    | -           |
| transition-appear      | 是否在初始渲染时启用过渡动画                                                           | _boolean_                   | `false`     |
| teleport               | 指定挂载的节点                                                                         | _string \| Element_         | -           |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)              | _boolean_                   | `false`     |

### Events

| 事件名             | 说明                       | 回调参数       |
|--------------------|--------------------------|----------------|
| glueClick          | 点击弹出层时触发           | _event: Event_ |
| glueClickOverlay   | 点击遮罩层时触发           | -              |
| glueClickCloseIcon | 点击关闭图标时触发         | _event: Event_ |
| glueOpen           | 打开弹出层时触发           | -              |
| glueClose          | 关闭弹出层时触发           | -              |
| glueOpened         | 打开弹出层且动画结束后触发 | -              |
| glueClosed         | 关闭弹出层且动画结束后触发 | -              |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                           | 默认值                               | 描述 |
|--------------------------------|--------------------------------------|------|
| @popup-background-color        | `@white`                             | -    |
| @popup-transition              | `transform @animation-duration-base` | -    |
| @popup-round-border-radius     | `16px`                               | -    |
| @popup-close-icon-size         | `22px`                               | -    |
| @popup-close-icon-color        | `@gray-5`                            | -    |
| @popup-close-icon-active-color | `@gray-6`                            | -    |
| @popup-close-icon-margin       | `16px`                               | -    |
| @popup-close-icon-z-index      | `1`                                  | -    |
