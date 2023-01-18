# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。



## 代码演示

### 基础用法

通过 `value` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```html
<glue-switch :value="checked" @glueChange="checked = !checked"/>
```

```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
<glue-switch :value="checked" disabled @glueChange="checked = !checked"/>
```
```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
<glue-switch :value="checked" loading @glueChange="checked = !checked"/>
```
```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```
### 自定义大小

通过 `size` 属性自定义开关的大小。

```html
<glue-switch :value="checked" size="24px" @glueChange="checked = !checked"/>
```
```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```
### 自定义颜色

`active-color` 属性表示打开时的背景色，`inactive-color` 表示关闭时的背景色。

```html
<glue-switch :value="checked" active-color="#ee0a24" inactive-color="#dcdee0" @glueChange="checked = !checked"/>
```
```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```

### 搭配单元格使用

```html
<glue-cell center title="标题" right-icon="#slot">
  <div slot="rightIcon">
    <glue-switch :value="checked" size="24" @glueChange="checked = !checked"/>
  </div>
</glue-cell>
```
```js
export default {
  data() {
    return {
      checked: true,
    };
  },
};
```
## API

### Props

| 参数           | 说明                    | 类型               | 默认值    |
|----------------|-----------------------|--------------------|-----------|
| value          | 开关选中状态            | _any_              | `false`   |
| loading        | 是否为加载状态          | _boolean_          | `false`   |
| disabled       | 是否为禁用状态          | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| active-color   | 打开时的背景色          | _string_           | `#1989fa` |
| inactive-color | 关闭时的背景色          | _string_           | `white`   |
| active-value   | 打开时对应的值          | _any_              | `true`    |
| inactive-value | 关闭时对应的值          | _any_              | `false`   |

### Events

| 事件名     | 说明               | 回调参数     |
|------------|------------------|--------------|
| glueChange | 开关状态切换时触发 | _value: any_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                          | 默认值                                        | 描述 |
|-------------------------------|-----------------------------------------------|------|
| @switch-size                  | `30px`                                        | -    |
| @switch-width                 | `2em`                                         | -    |
| @switch-height                | `1em`                                         | -    |
| @switch-node-size             | `1em`                                         | -    |
| @switch-node-background-color | `@white`                                      | -    |
| @switch-node-box-shadow       | `0 3px 1px 0 rgba(0, 0, 0, 0.05)`             | -    |
| @switch-background-color      | `@white`                                      | -    |
| @switch-on-background-color   | `@blue`                                       | -    |
| @switch-transition-duration   | `@animation-duration-base`                    | -    |
| @switch-disabled-opacity      | `@disabled-opacity`                           | -    |
| @switch-border                | `@border-width-base solid rgba(0, 0, 0, 0.1)` | -    |
