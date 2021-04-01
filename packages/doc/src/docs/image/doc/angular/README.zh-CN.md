# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```html
<glue-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```html
<glue-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  width="10rem"
  height="10rem"
  fit="cover"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  width="10rem"
  height="10rem"
  fit="fill"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  width="10rem"
  height="10rem"
  fit="none"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  width="10rem"
  height="10rem"
  fit="scale-down"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```html
<glue-image
  round
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  round
  width="10rem"
  height="10rem"
  fit="cover"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  round
  width="10rem"
  height="10rem"
  fit="fill"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  round
  width="10rem"
  height="10rem"
  fit="none"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<glue-image
  round
  width="10rem"
  height="10rem"
  fit="scale-down"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 图片懒加载

使用图片懒加载,图片必须设置尺寸

```html
<glue-image
  width="100"
  height="100"
  lazy-load
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIcon` 插槽自定义内容。

```html
<glue-image width="100%" height="27vw" loading-icon="#slot">
  <div slot="loadingIcon">
    <glue-loading type="spinner" size="20" />
  </div>
</glue-image>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `errorIcon` 插槽自定义内容。

```html
 <glue-image width="100%" height="27vw" src="x" error-icon="#slot">
    <div slot="errorIcon">加载失败</div>
</glue-image>
```

## API

### Props

| 参数         | 说明                                                                | 类型               | 默认值       |
|--------------|-------------------------------------------------------------------|--------------------|--------------|
| src          | 图片链接                                                            | _string_           | -            |
| fit          | 图片填充模式                                                        | _string_           | `fill`       |
| alt          | 替代文本                                                            | _string_           | -            |
| width        | 宽度，默认单位为`px`                                                 | _number \| string_ | -            |
| height       | 高度，默认单位为`px`                                                 | _number \| string_ | -            |
| radius       | 圆角大小，默认单位为`px`                                             | _number \| string_ | `0`          |
| round        | 是否显示为圆形                                                      | _boolean_          | `false`      |
| lazy-load    | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用     | _boolean_          | `false`      |
| show-error   | 是否展示图片加载失败提示                                            | _boolean_          | `true`       |
| show-loading | 是否展示图片加载中提示                                              | _boolean_          | `true`       |
| error-icon   | 失败时提示的[图标名称](#/zh-CN/icon)或图片链接,使用#slot开启插槽    | _string_           | `photo-fail` |
| loading-icon | 加载时提示的[图标名称](#/zh-CN/icon)或图片链接,使用#slot开启插槽    | _string_           | `photo`      |
| icon-prefix  | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_           | `glue-icon`  |

### 图片填充模式 

| 名称       | 含义                                                 |
|------------|----------------------------------------------------|
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来          |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                              |
| none       | 保持图片原有尺寸                                     |
| scale-down | 取 `none` 或 `contain` 中较小的一个                  |

### Events

| 事件名  | 说明               | 回调参数       |
|---------|------------------|----------------|
| default | 默认事件           | _event: Event_ |
| load    | 图片加载完毕时触发 | -              |
| error   | 图片加载失败时触发 | -              |

### Slots

| 名称        | 说明                       |
|-------------|--------------------------|
| default     | 自定义图片下方的内容       |
| loadingIcon | 自定义加载中的提示内容     |
| errorIcon   | 自定义加载失败时的提示内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值              | 描述 |
|-------------------------------------|---------------------|------|
| @image-placeholder-text-color       | `@gray-6`           | -    |
| @image-placeholder-font-size        | `@font-size-md`     | -    |
| @image-placeholder-background-color | `@background-color` | -    |
| @image-loading-icon-size            | `32px`              | -    |
| @image-loading-icon-color           | `@gray-4`           | -    |
| @image-error-icon-size              | `32px`              | -    |
| @image-error-icon-color             | `@gray-4`           | -    |
