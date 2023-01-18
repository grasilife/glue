# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

## 代码演示

### 基础用法

```html
<glue-slider :value="value" @glueChange="onChange" />
```

```js
export default {
  data() {
    return {};
  },
  methods: {
    onChange(value) {}
  }
};
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```html
<glue-slider :value="value" range @glueChange="onChange" />
```

```js
export default {
  data() {
    return {};
  },
  methods: {
    onChange(value) {}
  }
};
```

### 指定选择范围

```html
<glue-slider :value="value" :min="-50" :max="50" />
```

### 禁用

```html
<glue-slider :value="value" disabled />
```

### 指定步长

```html
<glue-slider :value="value" :step="10" />
```

### 自定义样式

```html
<glue-slider :value="value" bar-height="4px" active-color="#ee0a24" />
```

### 自定义按钮

```html
<glue-slider :value="value" active-color="#ee0a24" button-block="#slot">
  <div slot="button-block">
    <div class="custom-button">{{ value }}</div>
  </div>
</glue-slider>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```html
<div :style="{ height: '150px' }">
  <glue-slider :value="value" vertical @glueChange="onChange" />
  <glue-slider
    :value="value2"
    range
    vertical
    style="margin-left: 100px;"
    @glueChange="onChange"
  />
</div>
```

```js
export default {
  data() {
    return {};
  },
  methods: {
    onChange(value) {}
  }
};
```

## API

### Props

| 参数              | 说明                                      | 类型                 | 默认值    |
|-------------------|-----------------------------------------|----------------------|-----------|
| button-block      | 使用#slot开启插槽                         | string_              | ``        |
| value             | 当前进度百分比                            | _number \| number[]_ | `0`       |
| max               | 最大值                                    | _number \| string_   | `100`     |
| min               | 最小值                                    | _number \| string_   | `0`       |
| step              | 步长                                      | _number \| string_   | `1`       |
| bar-height        | 进度条高度，默认单位为`px`                 | _number \| string_   | `2px`     |
| button-size       | 滑块按钮大小，默认单位为`px`               | _number \| string_   | `24px`    |
| active-color      | 进度条激活态颜色                          | _string_             | `#1989fa` |
| inactive-color    | 进度条非激活态颜色                        | _string_             | `#e5e5e5` |
| range             | 是否开启双滑块模式                        | _boolean_            | `false`   |
| disabled          | 是否禁用滑块                              | _boolean_            | `false`   |
| readonly `v3.0.5` | 是否为只读状态，只读状态下无法修改滑块的值 | _boolean_            | `false`   |
| vertical          | 是否垂直展示                              | _boolean_            | `false`   |

### Events

| 事件名        | 说明                     | 回调参数        |
|---------------|------------------------|-----------------|
| glueChange    | 进度变化且结束拖动后触发 | value: 当前进度 |
| glueDragStart | 开始拖动时触发           | -               |
| glueDragEnd   | 结束拖动时触发           | -               |

### Slots

| 名称         | 说明           |
|--------------|--------------|
| button-block | 自定义滑动按钮 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                              | 默认值                         | 描述 |
|-----------------------------------|--------------------------------|------|
| @slider-active-background-color   | `@blue`                        | -    |
| @slider-inactive-background-color | `@gray-3`                      | -    |
| @slider-disabled-opacity          | `@disabled-opacity`            | -    |
| @slider-bar-height                | `2px`                          | -    |
| @slider-button-width              | `24px`                         | -    |
| @slider-button-height             | `24px`                         | -    |
| @slider-button-border-radius      | `50%`                          | -    |
| @slider-button-background-color   | `@white`                       | -    |
| @slider-button-box-shadow         | `0 1px 2px rgba(0, 0, 0, 0.5)` | -    |
